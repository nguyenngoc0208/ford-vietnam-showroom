import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import FordLogo from './components/FordLogo';
import SplitHero from './components/SplitHero';
import QuickActionsBar from './components/QuickActionsBar';
import CarCard from './components/CarCard';
import CarDetailModal from './components/CarDetailModal';
import UtilityModal from './components/UtilityModal';
import AccountModal from './components/AccountModal';
import CompareBar from './components/CompareBar';
import CompareModal from './components/CompareModal';
import SmartCarFinderModal from './components/SmartCarFinderModal';
import {
  CATEGORY_TABS,
  DEALER_BRANCHES,
  DEALER_CITIES,
  FORD_BRANCHES,
  fordCars,
  getBranchStockForTrim,
  getCarYearVariant,
  getTotalStock,
} from './data/fordCars';
import './App.css';

const STORAGE_KEYS = {
  stock: 'ford_vn_nationwide_stock_v19',
  reservations: 'ford_vn_reservations_v1',
  testDrives: 'ford_vn_test_drives_v3',
};

function readJsonStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function sumTrimStocks(stockByTrim) {
  return Object.values(stockByTrim || {}).reduce(
    (sum, qty) => sum + (typeof qty === 'number' ? Math.max(0, qty) : 0),
    0,
  );
}

function buildInitialCars() {
  const savedStockMap = readJsonStorage(STORAGE_KEYS.stock, null);
  if (!savedStockMap || typeof savedStockMap !== 'object') {
    return fordCars;
  }
  return fordCars.map((car) => ({
    ...car,
    inventory: car.inventory.map((branchItem) => {
      const savedBranch = savedStockMap?.[car.id]?.[branchItem.branchId];
      if (savedBranch && typeof savedBranch === 'object') {
        const mergedByTrim = {
          ...branchItem.stockByTrim,
          ...savedBranch,
        };
        return {
          ...branchItem,
          stockByTrim: mergedByTrim,
          stock: sumTrimStocks(mergedByTrim),
        };
      }
      return branchItem;
    }),
  }));
}

function serializeStockMap(carsList) {
  const map = {};
  for (const car of carsList) {
    map[car.id] = {};
    for (const branchItem of car.inventory) {
      map[car.id][branchItem.branchId] = branchItem.stockByTrim || {};
    }
  }
  return map;
}

const EMPTY_MODAL_CAR_STATE = {
  carId: null,
  color: '',
  year: '',
  trimIndex: 0,
  engineIndex: 0,
  city: null,
};

function createInitialFinderState(city = 'Tất cả tỉnh/thành') {
  return {
    step: 0,
    showResults: false,
    answers: {
      budget: '800-1100',
      purpose: 'versatile-work',
      preference: 'latest-2026',
      city: city || 'Tất cả tỉnh/thành',
    },
  };
}

function buildUrlForHistoryState(snapshot) {
  const params = new URLSearchParams();
  if (snapshot?.fordView === 'car' && snapshot.carId) {
    params.set('car', snapshot.carId);
    if (snapshot.year) {
      params.set('year', snapshot.year);
    }
  } else if (snapshot?.fordView === 'finder') {
    params.set('modal', 'finder');
  } else if (snapshot?.fordView === 'utility' && snapshot.mode) {
    params.set('modal', snapshot.mode);
  } else if (snapshot?.fordView === 'compare') {
    params.set('modal', 'compare');
  } else if (snapshot?.fordView === 'account') {
    params.set('modal', 'reservations');
  }
  const qs = params.toString();
  return `${window.location.pathname}${qs ? `?${qs}` : ''}`;
}

function parseDeepLinkFromUrl(carsList) {
  const params = new URLSearchParams(window.location.search);
  const carId = params.get('car');
  if (carId) {
    const car = carsList.find((item) => item.id === carId);
    if (car) {
      const requestedYear = params.get('year') || '';
      const validYear = car.availableYears?.includes(requestedYear)
        ? requestedYear
        : car.defaultYear || '';
      const defaultColor =
        getCarYearVariant(car, validYear)?.defaultColor ||
        car.colors?.[0]?.name ||
        '';
      return {
        fordView: 'car',
        carId: car.id,
        color: defaultColor,
        year: validYear,
        trimIndex: 0,
        engineIndex: 0,
        city: null,
      };
    }
  }

  const modal = params.get('modal');
  if (modal === 'finder') {
    return {
      fordView: 'finder',
      finderState: createInitialFinderState('Tất cả tỉnh/thành'),
    };
  }
  if (modal === 'dealers' || modal === 'calculator' || modal === 'test-drive') {
    return { fordView: 'utility', mode: modal };
  }
  if (modal === 'reservations' || modal === 'account') {
    return { fordView: 'account' };
  }
  return null;
}

export default function App() {
  const [cars, setCars] = useState(buildInitialCars);
  const [reservations, setReservations] = useState(() =>
    readJsonStorage(STORAGE_KEYS.reservations, []),
  );
  const [testDrives, setTestDrives] = useState(() =>
    readJsonStorage(STORAGE_KEYS.testDrives, []),
  );

  const [initialDeepLink] = useState(() => parseDeepLinkFromUrl(fordCars));

  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedCity, setSelectedCity] = useState('Tất cả tỉnh/thành');
  const [selectedBranchId, setSelectedBranchId] = useState('all');
  const [modalCarState, setModalCarState] = useState(() =>
    initialDeepLink?.fordView === 'car'
      ? {
          carId: initialDeepLink.carId,
          color: initialDeepLink.color,
          year: initialDeepLink.year,
          trimIndex: 0,
          engineIndex: 0,
          city: null,
        }
      : EMPTY_MODAL_CAR_STATE,
  );
  const [finderOpen, setFinderOpen] = useState(
    () => initialDeepLink?.fordView === 'finder',
  );
  const [finderState, setFinderState] = useState(() =>
    initialDeepLink?.fordView === 'finder'
      ? initialDeepLink.finderState
      : createInitialFinderState('Tất cả tỉnh/thành'),
  );
  const [utilityModalMode, setUtilityModalMode] = useState(() =>
    initialDeepLink?.fordView === 'utility' ? initialDeepLink.mode : null,
  );
  const [accountOpen, setAccountOpen] = useState(
    () => initialDeepLink?.fordView === 'account',
  );

  const [compareIds, setCompareIds] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [historyDepth, setHistoryDepth] = useState(0);
  const [toast, setToast] = useState(null);

  const catalogRef = useRef(null);
  const searchInputRef = useRef(null);
  const toastTimerRef = useRef(null);

  const resetAllOverlays = () => {
    setFinderOpen(false);
    setModalCarState(EMPTY_MODAL_CAR_STATE);
    setUtilityModalMode(null);
    setCompareOpen(false);
    setAccountOpen(false);
  };

  useEffect(() => {
    if (initialDeepLink) {
      const restored = { ...initialDeepLink, fordDepth: 0 };
      window.history.replaceState(
        restored,
        '',
        buildUrlForHistoryState(restored),
      );
    } else {
      const currentState = window.history.state || {};
      if (currentState.fordView || currentState.fordDepth) {
        window.history.replaceState(
          { ...currentState, fordView: null, fordDepth: 0 },
          '',
          buildUrlForHistoryState(null),
        );
      }
    }

    const handlePopState = (event) => {
      const nextState = event.state;
      const depth = nextState?.fordDepth || 0;
      setHistoryDepth(depth);
      const view = nextState?.fordView || null;

      setFinderOpen(view === 'finder');
      if (view === 'finder' && nextState.finderState) {
        setFinderState(nextState.finderState);
      }

      if (view === 'car' && nextState.carId) {
        setModalCarState({
          carId: nextState.carId,
          color: nextState.color || '',
          year: nextState.year || '',
          trimIndex: nextState.trimIndex ?? 0,
          engineIndex: nextState.engineIndex ?? 0,
          city: nextState.city || null,
        });
      } else {
        setModalCarState(EMPTY_MODAL_CAR_STATE);
      }

      setUtilityModalMode(view === 'utility' ? nextState.mode : null);
      setCompareOpen(view === 'compare');
      setAccountOpen(view === 'account');
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, [initialDeepLink]);

  const pushHistoryView = (snapshot) => {
    const nextDepth = (window.history.state?.fordDepth || 0) + 1;
    const stateObj = { ...snapshot, fordDepth: nextDepth };
    window.history.pushState(stateObj, '', buildUrlForHistoryState(stateObj));
    setHistoryDepth(nextDepth);
  };

  const dismissAllModals = () => {
    resetAllOverlays();
    const depth = window.history.state?.fordDepth || 0;
    if (depth > 0) {
      setHistoryDepth(0);
      window.history.go(-depth);
    } else if (window.location.search) {
      window.history.replaceState(
        { fordView: null, fordDepth: 0 },
        '',
        buildUrlForHistoryState(null),
      );
    }
  };

  const handleHistoryBack = () => {
    if ((window.history.state?.fordDepth || 0) > 0) {
      window.history.back();
    } else {
      dismissAllModals();
    }
  };

  const openCarModal = ({
    car,
    color = '',
    year = '',
    trimIndex = 0,
    engineIndex = 0,
    city = null,
  }) => {
    const resolvedYear = year || car.defaultYear || '';
    const resolvedColor =
      color ||
      getCarYearVariant(car, resolvedYear)?.defaultColor ||
      car.colors?.[0]?.name ||
      '';
    const nextCarState = {
      carId: car.id,
      color: resolvedColor,
      year: resolvedYear,
      trimIndex,
      engineIndex,
      city,
    };
    resetAllOverlays();
    setModalCarState(nextCarState);
    pushHistoryView({ fordView: 'car', ...nextCarState });
  };

  const openFinderModal = () => {
    const initFinder = createInitialFinderState(selectedCity);
    resetAllOverlays();
    setFinderState(initFinder);
    setFinderOpen(true);
    pushHistoryView({ fordView: 'finder', finderState: initFinder });
  };

  const handleFinderStepChange = (nextFinderState) => {
    setFinderState(nextFinderState);
    pushHistoryView({ fordView: 'finder', finderState: nextFinderState });
  };

  const openUtilityModal = (mode) => {
    resetAllOverlays();
    setUtilityModalMode(mode);
    pushHistoryView({ fordView: 'utility', mode });
  };

  const openCompareModal = () => {
    resetAllOverlays();
    setCompareOpen(true);
    pushHistoryView({ fordView: 'compare' });
  };

  const openAccountModal = () => {
    resetAllOverlays();
    setAccountOpen(true);
    pushHistoryView({ fordView: 'account' });
  };

  const showToast = (title, message, type = 'success') => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToast({ id: Date.now(), title, message, type });
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 4200);
  };

  const persistStock = (nextCars) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEYS.stock,
        JSON.stringify(serializeStockMap(nextCars)),
      );
    } catch {
      // ignore storage quota errors
    }
  };

  const persistList = (key, list) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(list));
    } catch {
      // ignore storage quota errors
    }
  };

  const visibleBranches = useMemo(() => {
    const allOption = DEALER_BRANCHES[0];
    const cityBranches =
      selectedCity === 'Tất cả tỉnh/thành'
        ? DEALER_BRANCHES.slice(1)
        : DEALER_BRANCHES.slice(1).filter((b) => b.city === selectedCity);
    return [allOption, ...cityBranches];
  }, [selectedCity]);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    if (selectedBranchId !== 'all' && city !== 'Tất cả tỉnh/thành') {
      const current = DEALER_BRANCHES.find((b) => b.id === selectedBranchId);
      if (!current || current.city !== city) {
        setSelectedBranchId('all');
      }
    }
  };

  const filteredCars = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return cars.filter((car) => {
      const matchesCategory =
        selectedCategory === 'Tất cả' || car.category === selectedCategory;
      const matchesSearch =
        !normalizedQuery ||
        car.name.toLowerCase().includes(normalizedQuery) ||
        car.category.toLowerCase().includes(normalizedQuery) ||
        car.shortDesc.toLowerCase().includes(normalizedQuery);
      const matchesBranch =
        selectedBranchId !== 'all'
          ? getTotalStock(car, selectedBranchId) > 0
          : selectedCity === 'Tất cả tỉnh/thành' ||
            getTotalStock(car, 'all', '', selectedCity) > 0;
      return matchesCategory && matchesSearch && matchesBranch;
    });
  }, [cars, searchQuery, selectedCategory, selectedCity, selectedBranchId]);

  const compareCars = useMemo(
    () =>
      compareIds
        .map((id) => cars.find((c) => c.id === id))
        .filter(Boolean),
    [compareIds, cars],
  );

  const scrollToCatalog = (focusSearch = false) => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (focusSearch) {
      window.setTimeout(() => {
        searchInputRef.current?.focus();
      }, 380);
    }
  };

  const openCarById = (carId) => {
    const found = cars.find((item) => item.id === carId) || cars[0];
    openCarModal({
      car: found,
      color: found.colors?.[0]?.name || '',
      year: found.defaultYear || '',
    });
  };

  const handleToggleCompare = (car) => {
    setCompareIds((prev) => {
      if (prev.includes(car.id)) {
        return prev.filter((id) => id !== car.id);
      }
      if (prev.length >= 3) {
        showToast(
          'Tối đa 3 xe so sánh',
          'Vui lòng bỏ bớt 1 xe trước khi thêm mẫu xe mới.',
          'info',
        );
        return prev;
      }
      return [...prev, car.id];
    });
  };

  const handleReserveVehicle = ({
    car,
    branchItem,
    trimName,
    stockKey,
    year,
    price,
    color,
    customerName,
    customerPhone,
  }) => {
    const resolvedStockKey = stockKey || trimName;
    const targetBranch = car.inventory.find(
      (b) => b.branchId === branchItem.branchId,
    );
    const currentTrimStock = getBranchStockForTrim(
      targetBranch,
      resolvedStockKey,
    );
    if (!targetBranch || currentTrimStock <= 0) return null;

    const nextCars = cars.map((item) => {
      if (item.id !== car.id) return item;
      return {
        ...item,
        inventory: item.inventory.map((b) => {
          if (b.branchId !== branchItem.branchId) return b;
          const nextByTrim = {
            ...(b.stockByTrim || {}),
            [resolvedStockKey]: Math.max(0, currentTrimStock - 1),
          };
          return {
            ...b,
            stockByTrim: nextByTrim,
            stock: sumTrimStocks(nextByTrim),
          };
        }),
      };
    });

    const variantName = getCarYearVariant(car, year)?.name || car.name;
    const newReservation = {
      id: `res-${Date.now()}`,
      code: `FORD-${car.id.slice(0, 3).toUpperCase()}-${String(Date.now()).slice(-4)}`,
      carId: car.id,
      carName: variantName,
      trimName,
      stockKey: resolvedStockKey,
      year,
      price,
      branchId: branchItem.branchId,
      branchName: branchItem.branch,
      branchAddress: branchItem.address || '',
      color,
      customerName,
      customerPhone,
      createdAt: new Date().toISOString(),
    };

    const nextReservations = [newReservation, ...reservations];

    setCars(nextCars);
    setReservations(nextReservations);
    persistStock(nextCars);
    persistList(STORAGE_KEYS.reservations, nextReservations);

    showToast(
      `Đặt giữ xe thành công (${newReservation.code})`,
      `${variantName} — ${trimName} tại ${branchItem.branch}`,
      'success',
    );

    return newReservation;
  };

  const handleCancelReservation = (reservationId) => {
    const target = reservations.find((r) => r.id === reservationId);
    if (!target) return;

    const nextCars = cars.map((item) => {
      if (item.id !== target.carId) return item;
      return {
        ...item,
        inventory: item.inventory.map((b) => {
          if (b.branchId !== target.branchId) return b;
          const restoreKey = target.stockKey || target.trimName;
          const prevQty = getBranchStockForTrim(b, restoreKey);
          const nextByTrim = {
            ...(b.stockByTrim || {}),
            [restoreKey]: prevQty + 1,
          };
          return {
            ...b,
            stockByTrim: nextByTrim,
            stock: sumTrimStocks(nextByTrim),
          };
        }),
      };
    });

    const nextReservations = reservations.filter((r) => r.id !== reservationId);
    setCars(nextCars);
    setReservations(nextReservations);
    persistStock(nextCars);
    persistList(STORAGE_KEYS.reservations, nextReservations);

    showToast(
      'Đã hủy đơn giữ xe',
      `Đã hoàn +1 xe về kho ${target.branchName}.`,
      'info',
    );
  };

  const handleResetInventory = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.stock);
      window.localStorage.removeItem(STORAGE_KEYS.reservations);
      window.localStorage.removeItem(STORAGE_KEYS.testDrives);
    } catch {
      // ignore storage errors
    }
    setCars(fordCars);
    setReservations([]);
    setTestDrives([]);
    showToast(
      'Đã khôi phục tồn kho',
      `Số lượng xe tại ${FORD_BRANCHES.length} showroom toàn quốc đã trở về mặc định.`,
      'info',
    );
  };

  const handleSubmitTestDrive = (booking) => {
    const newBooking = {
      id: `td-${Date.now()}`,
      ...booking,
      createdAt: new Date().toISOString(),
    };
    const nextTestDrives = [newBooking, ...testDrives];
    setTestDrives(nextTestDrives);
    persistList(STORAGE_KEYS.testDrives, nextTestDrives);

    showToast(
      'Đăng ký lái thử thành công!',
      `Hẹn ${booking.carName} ngày ${booking.date} tại ${booking.branchName}.`,
      'success',
    );

    return newBooking;
  };

  const activeModalCar = modalCarState.carId
    ? cars.find((c) => c.id === modalCarState.carId) || null
    : null;
  const activeBranch = DEALER_BRANCHES.find((b) => b.id === selectedBranchId);

  return (
    <div className={`ford-page ${compareCars.length > 0 ? 'has-compare-bar' : ''}`}>
      <Navbar
        cars={cars}
        isScrolled={isScrolled}
        reservationCount={reservations.length}
        onSelectCategoryAndScroll={(category) => {
          setSelectedCategory(category);
          scrollToCatalog(false);
        }}
        onOpenSearch={() => scrollToCatalog(true)}
        onOpenFinder={openFinderModal}
        onSelectCar={(car, year) => openCarModal({ car, year })}
        onOpenUtilityModal={openUtilityModal}
        onOpenAccountModal={openAccountModal}
      />

      <main>
        <SplitHero
          onExploreCar={(carId) => openCarById(carId)}
          onCheckInventory={() => scrollToCatalog(false)}
        />

        <QuickActionsBar
          onScrollToInventory={() => scrollToCatalog(false)}
          onOpenPromo={() => openUtilityModal('calculator')}
          onOpenTestDrive={() => openUtilityModal('test-drive')}
          onFocusDealers={() => openUtilityModal('dealers')}
        />

        <section
          id="catalog"
          ref={catalogRef}
          className="catalog-section"
          aria-label="Khám phá các dòng xe Ford"
        >
          <div className="container">
            <div className="catalog-header">
              <div>
                <p className="catalog-eyebrow">SHOWROOM CHÍNH HÃNG FORD VIỆT NAM</p>
                <h2 className="catalog-title">Khám Phá Các Dòng Xe Ford</h2>
              </div>
              <p className="catalog-count">
                Đang hiển thị <strong>{filteredCars.length}</strong> dòng xe
                {selectedBranchId !== 'all' && activeBranch
                  ? ` có sẵn tại ${activeBranch.name}`
                  : selectedCity !== 'Tất cả tỉnh/thành'
                    ? ` có sẵn tại ${selectedCity}`
                    : ''}
              </p>
            </div>

            <div className="finder-promo-banner" role="region" aria-label="Tư vấn chọn xe Ford nhanh">
              <div className="finder-promo-copy">
                <span className="finder-promo-badge">GỢI Ý THÔNG MINH</span>
                <p>
                  Chưa biết chọn phiên bản Ford nào phù hợp? Trả lời 4 câu hỏi nhanh trong 15 giây để tìm cấu hình chuẩn nhất &amp; kiểm tra xe sẵn kho gần bạn.
                </p>
              </div>
              <button
                type="button"
                className="pill-btn pill-btn--white finder-promo-cta"
                onClick={openFinderModal}
              >
                Bắt đầu tư vấn →
              </button>
            </div>

            <div className="catalog-controls">
              <div
                className="segment-tabs"
                role="tablist"
                aria-label="Phân khúc xe Ford"
              >
                {CATEGORY_TABS.map((category) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === category}
                    className={`segment-tab ${selectedCategory === category ? 'is-active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="quick-search">
                <svg
                  className="quick-search-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7.5" />
                  <path d="m20.5 20.5-4.2-4.2" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="search"
                  className="quick-search-input"
                  placeholder="Tìm theo tên xe (Ranger, Everest, Territory...)"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  aria-label="Tìm theo tên xe"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="quick-search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Xóa từ khóa"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="branch-filter-bar" aria-label="Lọc theo khu vực và chi nhánh đại lý">
              <div className="branch-filter-row">
                <span className="branch-filter-label">Khu vực / Tỉnh thành:</span>
                <div className="branch-filter-pills" role="group" aria-label="Chọn khu vực">
                  {DEALER_CITIES.map((city) => (
                    <button
                      key={city}
                      type="button"
                      className={`branch-pill branch-pill--city ${selectedCity === city ? 'is-active' : ''}`}
                      onClick={() => handleSelectCity(city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="branch-filter-row">
                <span className="branch-filter-label">
                  Showroom ({visibleBranches.length - 1} chi nhánh):
                </span>
                <div className="branch-filter-pills" role="group" aria-label="Chọn showroom">
                  {visibleBranches.map((branch) => (
                    <button
                      key={branch.id}
                      type="button"
                      className={`branch-pill ${selectedBranchId === branch.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedBranchId(branch.id)}
                    >
                      {branch.id === 'all' && selectedCity !== 'Tất cả tỉnh/thành'
                        ? `Tất cả tại ${selectedCity}`
                        : branch.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredCars.length > 0 ? (
              <div className="vehicle-grid">
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    activeBranchId={selectedBranchId}
                    activeCity={selectedCity}
                    isCompared={compareIds.includes(car.id)}
                    onToggleCompare={handleToggleCompare}
                    onSelect={(selected, color, year) =>
                      openCarModal({ car: selected, color, year })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="catalog-empty">
                <p className="catalog-empty-title">
                  Hiện chưa có xe sẵn thuộc bộ lọc đã chọn
                </p>
                <p className="catalog-empty-desc">
                  Bạn có thể chuyển sang &ldquo;Tất cả tỉnh/thành&rdquo; hoặc khôi phục tồn kho mặc định để xem xe có sẵn trên toàn quốc.
                </p>
                <button
                  type="button"
                  className="pill-btn pill-btn--navy"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tất cả');
                    setSelectedCity('Tất cả tỉnh/thành');
                    setSelectedBranchId('all');
                  }}
                >
                  Xem tất cả xe toàn quốc
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer id="ford-support" className="ford-footer">
        <div className="container">
          <div className="footer-grid-v2">
            <div className="footer-brand-col">
              <FordLogo className="ford-logo--footer" label="Ford Việt Nam" />
              <p className="footer-brand-note">
                Ford Việt Nam — Hệ thống trưng bày, so sánh thông số và tra cứu tồn kho
                thời gian thực tại {FORD_BRANCHES.length} showroom Ford chính hãng trên toàn quốc.
              </p>
              <div className="footer-hotline-box">
                <span>Hotline Hỗ trợ Khách hàng 24/7</span>
                <strong>1800 588 888</strong>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Sản Phẩm Ford</h4>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => {
                  setSelectedCategory('Xe SUV');
                  scrollToCatalog(false);
                }}
              >
                Dòng xe SUV (Everest, Territory)
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => {
                  setSelectedCategory('Xe Thương mại');
                  scrollToCatalog(false);
                }}
              >
                Bán tải &amp; Thương mại (Ranger, Raptor, Transit)
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => {
                  setSelectedCategory('Xe Điện');
                  scrollToCatalog(false);
                }}
              >
                Xe thuần điện (Mustang Mach-E)
              </button>
            </div>

            <div className="footer-links-col">
              <h4>Mua Xe &amp; Tiện Ích</h4>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => openUtilityModal('calculator')}
              >
                Bảng giá &amp; Dự toán chi phí lăn bánh
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => openUtilityModal('test-drive')}
              >
                Đăng ký lái thử xe tại Showroom
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => openUtilityModal('dealers')}
              >
                Tìm {FORD_BRANCHES.length} Showroom toàn quốc &amp; Chỉ đường Maps
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={openAccountModal}
              >
                Quản lý đơn đặt giữ xe ({reservations.length})
              </button>
            </div>

            <div className="footer-links-col">
              <h4>Hệ thống {FORD_BRANCHES.length} Showroom Toàn Quốc</h4>
              <p>TP. Hồ Chí Minh (10): Bến Thành • City Ford • Sài Gòn Ford • Western • Gia Định • Phú Mỹ • Bình Dương • Vũng Tàu</p>
              <p>Hà Nội (7): Hà Nội Ford • Thăng Long • Thanh Xuân • Long Biên • Thủ Đô • Hà Thành • An Đô</p>
              <p>TP. trực thuộc TW khác (8): Hải Phòng (2) • Đà Nẵng (3) • Cần Thơ (2) • TP. Huế (1)</p>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© 2026 Ford Việt Nam. All rights reserved.</span>
            <span>Giá niêm yết đã bao gồm VAT • Dữ liệu tồn kho cập nhật thời gian thực</span>
          </div>
        </div>
      </footer>

      <CompareBar
        selectedCars={compareCars}
        onRemoveCar={(carId) =>
          setCompareIds((prev) => prev.filter((id) => id !== carId))
        }
        onClearAll={() => setCompareIds([])}
        onOpenCompare={openCompareModal}
      />

      <CompareModal
        isOpen={compareOpen}
        cars={compareCars}
        canGoBack={historyDepth > 1}
        onHistoryBack={handleHistoryBack}
        onSelectCar={(car, year) => openCarModal({ car, year })}
        onClose={dismissAllModals}
      />

      <CarDetailModal
        key={
          activeModalCar
            ? `${activeModalCar.id}-${modalCarState.color}-${modalCarState.year}-${modalCarState.trimIndex ?? 0}-${modalCarState.engineIndex ?? 0}-${modalCarState.city || selectedCity}`
            : 'closed'
        }
        car={activeModalCar}
        initialColor={modalCarState.color}
        initialYear={modalCarState.year}
        initialTrimIndex={modalCarState.trimIndex ?? 0}
        initialEngineIndex={modalCarState.engineIndex ?? 0}
        initialCity={modalCarState.city || selectedCity}
        canGoBack={historyDepth > 1}
        onHistoryBack={handleHistoryBack}
        onReserveVehicle={handleReserveVehicle}
        onClose={dismissAllModals}
      />

      <SmartCarFinderModal
        isOpen={finderOpen}
        cars={cars}
        finderState={finderState}
        onStepChange={handleFinderStepChange}
        onHistoryBack={handleHistoryBack}
        onSelectRecommendation={({
          car,
          year,
          trimIndex,
          engineIndex,
          color,
          city,
        }) => {
          if (city) {
            setSelectedCity(city);
            setSelectedBranchId('all');
          }
          openCarModal({
            car,
            year,
            trimIndex: trimIndex ?? 0,
            engineIndex: engineIndex ?? 0,
            color,
            city: city || selectedCity,
          });
        }}
        onClose={dismissAllModals}
      />

      <UtilityModal
        key={utilityModalMode || 'utility-closed'}
        cars={cars}
        mode={utilityModalMode}
        canGoBack={historyDepth > 1}
        onHistoryBack={handleHistoryBack}
        onClose={dismissAllModals}
        onSelectCar={(car, year) => openCarModal({ car, year })}
        onSelectBranchFilter={(branchId) => {
          const target = DEALER_BRANCHES.find((b) => b.id === branchId);
          setSelectedCity(target?.city || 'Tất cả tỉnh/thành');
          setSelectedBranchId(branchId);
          scrollToCatalog(false);
        }}
        onSubmitTestDrive={handleSubmitTestDrive}
      />

      <AccountModal
        isOpen={accountOpen}
        reservations={reservations}
        testDrives={testDrives}
        onCancelReservation={handleCancelReservation}
        onResetInventory={handleResetInventory}
        onClose={dismissAllModals}
      />

      {toast && (
        <div
          key={toast.id}
          className={`toast-banner toast-banner--${toast.type}`}
          role="status"
          aria-live="polite"
        >
          <span className="toast-icon" aria-hidden="true">
            {toast.type === 'success' ? '✓' : 'i'}
          </span>
          <div className="toast-body">
            <strong>{toast.title}</strong>
            <span>{toast.message}</span>
          </div>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToast(null)}
            aria-label="Đóng thông báo"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
