import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import SplitHero from './components/SplitHero';
import QuickActionsBar from './components/QuickActionsBar';
import CarCard from './components/CarCard';
import CarDetailModal from './components/CarDetailModal';
import UtilityModal from './components/UtilityModal';
import AccountModal from './components/AccountModal';
import {
  CATEGORY_TABS,
  DEALER_BRANCHES,
  fordCars,
  getTotalStock,
} from './data/fordCars';
import './App.css';

const STORAGE_KEYS = {
  stock: 'ford_vn_hcm_stock_v2',
  reservations: 'ford_vn_reservations_v2',
  testDrives: 'ford_vn_test_drives_v2',
};

function readJsonStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function buildInitialCars() {
  const savedStockMap = readJsonStorage(STORAGE_KEYS.stock, null);
  if (!savedStockMap || typeof savedStockMap !== 'object') {
    return fordCars;
  }
  return fordCars.map((car) => ({
    ...car,
    inventory: car.inventory.map((branchItem) => {
      const savedStock = savedStockMap?.[car.id]?.[branchItem.branchId];
      return typeof savedStock === 'number'
        ? { ...branchItem, stock: Math.max(0, savedStock) }
        : branchItem;
    }),
  }));
}

function serializeStockMap(carsList) {
  const map = {};
  for (const car of carsList) {
    map[car.id] = {};
    for (const branchItem of car.inventory) {
      map[car.id][branchItem.branchId] = branchItem.stock;
    }
  }
  return map;
}

export default function App() {
  const [cars, setCars] = useState(buildInitialCars);
  const [reservations, setReservations] = useState(() =>
    readJsonStorage(STORAGE_KEYS.reservations, []),
  );
  const [testDrives, setTestDrives] = useState(() =>
    readJsonStorage(STORAGE_KEYS.testDrives, []),
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedBranchId, setSelectedBranchId] = useState('all');
  const [modalCarState, setModalCarState] = useState({
    carId: null,
    color: '',
    year: '',
  });
  const [utilityModalMode, setUtilityModalMode] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);

  const catalogRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        selectedBranchId === 'all' || getTotalStock(car, selectedBranchId) > 0;
      return matchesCategory && matchesSearch && matchesBranch;
    });
  }, [cars, searchQuery, selectedCategory, selectedBranchId]);

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
    setModalCarState({
      carId: found.id,
      color: found.colors?.[0]?.name || '',
      year: found.defaultYear || '',
    });
  };

  const handleReserveVehicle = ({
    car,
    branchItem,
    trimName,
    year,
    price,
    color,
    customerName,
    customerPhone,
  }) => {
    const targetBranch = car.inventory.find(
      (b) => b.branchId === branchItem.branchId,
    );
    if (!targetBranch || targetBranch.stock <= 0) return null;

    const nextCars = cars.map((item) => {
      if (item.id !== car.id) return item;
      return {
        ...item,
        inventory: item.inventory.map((b) =>
          b.branchId === branchItem.branchId
            ? { ...b, stock: Math.max(0, b.stock - 1) }
            : b,
        ),
      };
    });

    const newReservation = {
      id: `res-${Date.now()}`,
      code: `FORD-${car.id.slice(0, 3).toUpperCase()}-${String(Date.now()).slice(-4)}`,
      carId: car.id,
      carName: car.name,
      trimName,
      year,
      price,
      branchId: branchItem.branchId,
      branchName: branchItem.branch,
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

    return newReservation;
  };

  const handleCancelReservation = (reservationId) => {
    const target = reservations.find((r) => r.id === reservationId);
    if (!target) return;

    const nextCars = cars.map((item) => {
      if (item.id !== target.carId) return item;
      return {
        ...item,
        inventory: item.inventory.map((b) =>
          b.branchId === target.branchId
            ? { ...b, stock: b.stock + 1 }
            : b,
        ),
      };
    });

    const nextReservations = reservations.filter((r) => r.id !== reservationId);
    setCars(nextCars);
    setReservations(nextReservations);
    persistStock(nextCars);
    persistList(STORAGE_KEYS.reservations, nextReservations);
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
    return newBooking;
  };

  const activeModalCar = modalCarState.carId
    ? cars.find((c) => c.id === modalCarState.carId) || null
    : null;
  const activeBranch = DEALER_BRANCHES.find((b) => b.id === selectedBranchId);

  return (
    <div className="ford-page">
      <Navbar
        cars={cars}
        isScrolled={isScrolled}
        reservationCount={reservations.length}
        onNavigateCatalog={() => scrollToCatalog(false)}
        onSelectCategoryAndScroll={(category) => {
          setSelectedCategory(category);
          scrollToCatalog(false);
        }}
        onOpenSearch={() => scrollToCatalog(true)}
        onSelectCar={(car, year) =>
          setModalCarState({
            carId: car.id,
            color: car.colors?.[0]?.name || '',
            year: year || car.defaultYear || '',
          })
        }
        onOpenUtilityModal={(mode) => setUtilityModalMode(mode)}
        onOpenAccountModal={() => setAccountOpen(true)}
      />

      <main>
        <SplitHero
          onExploreCar={(carId) => openCarById(carId)}
          onCheckInventory={() => scrollToCatalog(false)}
        />

        <QuickActionsBar
          onScrollToInventory={() => scrollToCatalog(false)}
          onOpenPromo={() => setUtilityModalMode('calculator')}
          onOpenTestDrive={() => setUtilityModalMode('test-drive')}
          onFocusDealers={() => {
            if (selectedBranchId === 'all') {
              setSelectedBranchId('ben-thanh');
            }
            scrollToCatalog(false);
          }}
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
                  : ''}
              </p>
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

            <div className="branch-filter-bar" aria-label="Lọc theo chi nhánh đại lý">
              <span className="branch-filter-label">
                Lọc xe có sẵn theo đại lý:
              </span>
              <div className="branch-filter-pills">
                {DEALER_BRANCHES.map((branch) => (
                  <button
                    key={branch.id}
                    type="button"
                    className={`branch-pill ${selectedBranchId === branch.id ? 'is-active' : ''}`}
                    onClick={() => setSelectedBranchId(branch.id)}
                  >
                    {branch.name}
                  </button>
                ))}
              </div>
            </div>

            {filteredCars.length > 0 ? (
              <div className="vehicle-grid">
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    activeBranchId={selectedBranchId}
                    onSelect={(selected, color, year) =>
                      setModalCarState({ carId: selected.id, color, year })
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
                  Bạn có thể chuyển sang &ldquo;Tất cả chi nhánh&rdquo; để xem tồn kho toàn quốc hoặc khôi phục tồn kho mặc định.
                </p>
                <button
                  type="button"
                  className="pill-btn pill-btn--navy"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tất cả');
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
        <div className="container footer-grid">
          <div>
            <span className="ford-oval-badge ford-oval-badge--sm">
              <span>Ford</span>
            </span>
            <p className="footer-brand-note">
              Ford Việt Nam — Trải nghiệm đặt xe, tra cứu tồn kho đại lý và dịch vụ hậu mãi
              chính hãng chuẩn toàn cầu Ready Set Ford.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Hệ thống Showroom Ford TP.HCM</h4>
            <p>Bến Thành Ford • City Ford Bình Triệu • Gia Định Ford • Phú Mỹ Ford</p>
            <p>Sài Gòn Ford (Cao Thắng, Phổ Quang, Nam Sài Gòn) • Western Ford An Lạc</p>
          </div>
          <div className="footer-links-col">
            <h4>Hỗ trợ Khách hàng</h4>
            <p>Tổng đài CSKH: 1800 588 888 (Miễn phí)</p>
            <p>Giá niêm yết đã bao gồm VAT • Dữ liệu tồn kho cập nhật thời gian thực</p>
          </div>
        </div>
      </footer>

      <CarDetailModal
        key={
          activeModalCar
            ? `${activeModalCar.id}-${modalCarState.color}-${modalCarState.year}`
            : 'closed'
        }
        car={activeModalCar}
        initialColor={modalCarState.color}
        initialYear={modalCarState.year}
        onReserveVehicle={handleReserveVehicle}
        onClose={() => setModalCarState({ carId: null, color: '', year: '' })}
      />

      <UtilityModal
        key={utilityModalMode || 'utility-closed'}
        cars={cars}
        mode={utilityModalMode}
        onClose={() => setUtilityModalMode(null)}
        onSelectCar={(car, year) =>
          setModalCarState({
            carId: car.id,
            color: car.colors?.[0]?.name || '',
            year: year || car.defaultYear || '',
          })
        }
        onSubmitTestDrive={handleSubmitTestDrive}
      />

      <AccountModal
        isOpen={accountOpen}
        reservations={reservations}
        testDrives={testDrives}
        onCancelReservation={handleCancelReservation}
        onResetInventory={handleResetInventory}
        onClose={() => setAccountOpen(false)}
      />
    </div>
  );
}
