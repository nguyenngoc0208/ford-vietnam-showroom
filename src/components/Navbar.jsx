import { useEffect, useState } from 'react';
import FordLogo from './FordLogo';
import {
  MEGA_CATEGORIES,
  formatVND,
  getCarYearVariant,
  handleCarImageError,
} from '../data/fordCars';

export default function Navbar({
  cars,
  isScrolled,
  reservationCount = 0,
  onSelectCategoryAndScroll,
  onOpenSearch,
  onOpenFinder,
  onSelectCar,
  onOpenUtilityModal,
  onOpenAccountModal,
}) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState('Xe SUV');
  const [selectedYears, setSelectedYears] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(true);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState('Xe SUV');

  const solidHeader = isScrolled || megaMenuOpen || mobileMenuOpen;

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const activeCategoryConfig =
    MEGA_CATEGORIES.find((cat) => cat.key === activeMegaCategory) ||
    MEGA_CATEGORIES[0];

  const categoryCars = cars.filter(
    (car) => car.category === activeCategoryConfig.key,
  );

  const getActiveYear = (car) =>
    selectedYears[car.id] || car.defaultYear || '';

  const handleSelectFromMenu = (car) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onSelectCar(car, getActiveYear(car));
  };

  const handleSelectCategoryBanner = (categoryKey = activeCategoryConfig.key) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    onSelectCategoryAndScroll(categoryKey);
  };

  return (
    <div
      className={`site-header-wrap ${solidHeader ? 'is-solid' : 'is-transparent'}`}
      onMouseLeave={() => setMegaMenuOpen(false)}
    >
      {/* Top Utility Bar (Desktop & Tablet) */}
      <div className="top-utility-bar">
        <div className="utility-inner">
          <span className="utility-tagline">
            Ford Việt Nam — Ready Set Ford
          </span>
          <div className="utility-links">
            <button
              type="button"
              className="utility-link"
              onClick={() => onOpenUtilityModal('dealers')}
            >
              Tìm Đại Lý
            </button>
            <button
              type="button"
              className="utility-link"
              onClick={() => onOpenUtilityModal('test-drive')}
            >
              Đăng Ký Lái Thử
            </button>
            <button
              type="button"
              className="utility-link"
              onClick={() => onOpenUtilityModal('calculator')}
            >
              Bảng Giá Xe
            </button>
            <button
              type="button"
              className="utility-link"
              onClick={() => onOpenUtilityModal('calculator')}
            >
              Khuyến Mãi
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="main-navbar">
        <div className="navbar-inner">
          <div className="navbar-left-group">
            <a
              href="#top"
              className="navbar-brand"
              aria-label="Ford Việt Nam Trang chủ"
            >
              <FordLogo className="ford-logo--navbar" decorative />
            </a>

            <nav className="navbar-center" aria-label="Menu chính">
              <div
                className="nav-item-dropdown"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
                <button
                  type="button"
                  className={`nav-link nav-link--trigger ${megaMenuOpen ? 'is-open' : ''}`}
                  aria-expanded={megaMenuOpen}
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                >
                  Sản Phẩm
                </button>
              </div>

              <button
                type="button"
                className="nav-link"
                onClick={() => onOpenUtilityModal('calculator')}
              >
                Mua Xe
              </button>
              <a href="#ford-support" className="nav-link">
                Dịch Vụ &amp; Hỗ Trợ
              </a>
              <button
                type="button"
                className="nav-link"
                onClick={() => onOpenUtilityModal('test-drive')}
              >
                Khám Phá Ford
              </button>
            </nav>
          </div>

          <div className="navbar-actions">
            <button
              type="button"
              className="nav-icon-btn"
              onClick={onOpenSearch}
              aria-label="Tìm kiếm dòng xe"
              title="Tìm kiếm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7.5" />
                <path d="m20.5 20.5-4.2-4.2" />
              </svg>
            </button>

            <button
              type="button"
              className="nav-finder-btn"
              onClick={onOpenFinder}
              title="Tư vấn chọn xe & phiên bản theo nhu cầu"
            >
              Tư vấn chọn xe ✨
            </button>

            <button
              type="button"
              className="nav-icon-btn nav-icon-btn--dealer"
              onClick={() => onOpenUtilityModal('dealers')}
              aria-label="Tìm đại lý Ford toàn quốc"
              title="Tìm đại lý Ford"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 12 3.5a6.5 6.5 0 0 1 6.5 6.5c0 5.4-6.5 11-6.5 11Z" />
                <circle cx="12" cy="10" r="2.3" />
              </svg>
            </button>

            <button
              type="button"
              className="nav-icon-btn nav-icon-btn--account"
              onClick={onOpenAccountModal}
              aria-label="Tài khoản & Đơn giữ xe đã đặt"
              title="Tài khoản & Đơn giữ xe"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 19.5a7 7 0 0 1 14 0" />
              </svg>
              {reservationCount > 0 && (
                <span className="account-badge" aria-hidden="true">
                  {reservationCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mega Menu 2 Cột (Desktop) */}
        {megaMenuOpen && (
          <div className="mega-menu" role="region" aria-label="Danh mục xe Ford">
            <div className="mega-menu-layout">
              <div className="mega-left-col" role="tablist" aria-label="Phân khúc xe">
                {MEGA_CATEGORIES.map((category) => {
                  const isActive = activeMegaCategory === category.key;
                  return (
                    <button
                      key={category.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`mega-cat-btn ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveMegaCategory(category.key)}
                      onClick={() => setActiveMegaCategory(category.key)}
                    >
                      <span>{category.label}</span>
                      <span className="mega-cat-arrow" aria-hidden="true">
                        &#8250;
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mega-right-col">
                <div className="mega-banner">
                  <img
                    src={activeCategoryConfig.bannerImage}
                    alt={activeCategoryConfig.bannerTitle}
                    onError={(event) =>
                      handleCarImageError(
                        event,
                        activeCategoryConfig.bannerTitle,
                        activeCategoryConfig.label,
                      )
                    }
                  />
                  <div className="mega-banner-overlay">
                    <h3 className="mega-banner-title">
                      {activeCategoryConfig.bannerTitle}
                    </h3>
                    <button
                      type="button"
                      className="pill-btn pill-btn--white mega-banner-cta"
                      onClick={() => handleSelectCategoryBanner()}
                    >
                      Chọn xe &amp; Báo giá
                    </button>
                  </div>
                </div>

                <div className="mega-vehicles-row">
                  {categoryCars.map((car) => {
                    const activeYear = getActiveYear(car);
                    const variant = getCarYearVariant(car, activeYear);

                    return (
                      <div key={car.id} className="mega-vehicle-card">
                        <div className="mega-vehicle-years">
                          {car.availableYears &&
                            car.availableYears.map((year) => (
                              <button
                                key={year}
                                type="button"
                                className={`mega-year-tab ${activeYear === year ? 'is-active' : ''}`}
                                onClick={() =>
                                  setSelectedYears((prev) => ({
                                    ...prev,
                                    [car.id]: year,
                                  }))
                                }
                              >
                                {year}
                              </button>
                            ))}
                        </div>

                        <button
                          type="button"
                          className="mega-vehicle-trigger"
                          onClick={() => handleSelectFromMenu(car)}
                        >
                          <div className="mega-vehicle-thumb">
                            <img
                              src={variant.image}
                              alt={variant.name}
                              onError={(event) =>
                                handleCarImageError(event, variant.name, car.category)
                              }
                            />
                          </div>
                          <strong className="mega-vehicle-name">{variant.name}</strong>
                          <span className="mega-vehicle-price">
                            Giá từ : {formatVND(variant.price)}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sliding Drawer Menu */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
        aria-hidden={!mobileMenuOpen}
      >
        <aside
          className={`mobile-drawer-panel ${mobileMenuOpen ? 'is-open' : ''}`}
          aria-label="Menu điều hướng di động"
        >
          <div className="mobile-drawer-header">
            <FordLogo className="ford-logo--drawer" label="Ford Việt Nam" />
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Đóng menu di động"
            >
              ✕
            </button>
          </div>

          <div className="mobile-drawer-body">
            {/* Accordion Sản Phẩm */}
            <div className="mobile-accordion">
              <button
                type="button"
                className="mobile-accordion-trigger"
                aria-expanded={mobileProductsExpanded}
                onClick={() => setMobileProductsExpanded((prev) => !prev)}
              >
                <span>Sản Phẩm</span>
                <span className="mobile-acc-chevron">
                  {mobileProductsExpanded ? '−' : '+'}
                </span>
              </button>

              {mobileProductsExpanded && (
                <div className="mobile-accordion-content">
                  {MEGA_CATEGORIES.map((category) => {
                    const isGroupOpen = mobileExpandedGroup === category.key;
                    const groupCars = cars.filter(
                      (c) => c.category === category.key,
                    );
                    return (
                      <div key={category.key} className="mobile-cat-group">
                        <button
                          type="button"
                          className={`mobile-cat-trigger ${isGroupOpen ? 'is-open' : ''}`}
                          onClick={() =>
                            setMobileExpandedGroup(
                              isGroupOpen ? '' : category.key,
                            )
                          }
                        >
                          <span>{category.label}</span>
                          <span>{isGroupOpen ? '▾' : '›'}</span>
                        </button>

                        {isGroupOpen && (
                          <div className="mobile-cat-cars">
                            {groupCars.map((car) => {
                              const variant = getCarYearVariant(car, car.defaultYear);
                              return (
                                <button
                                  key={car.id}
                                  type="button"
                                  className="mobile-car-row"
                                  onClick={() => handleSelectFromMenu(car)}
                                >
                                  <img
                                    src={variant.image}
                                    alt={variant.name}
                                    onError={(event) =>
                                      handleCarImageError(
                                        event,
                                        variant.name,
                                        car.category,
                                      )
                                    }
                                  />
                                  <div>
                                    <strong>{variant.name}</strong>
                                    <span>
                                      Từ {formatVND(variant.price)}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                            <button
                              type="button"
                              className="mobile-cat-all-link"
                              onClick={() =>
                                handleSelectCategoryBanner(category.key)
                              }
                            >
                              Xem tất cả {category.label} →
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              className="mobile-drawer-link"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUtilityModal('calculator');
              }}
            >
              Mua Xe &amp; Dự Toán Lăn Bánh
            </button>
            <button
              type="button"
              className="mobile-drawer-link"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUtilityModal('calculator');
              }}
            >
              Bảng Giá Xe
            </button>
            <button
              type="button"
              className="mobile-drawer-link"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUtilityModal('test-drive');
              }}
            >
              Đăng Ký Lái Thử
            </button>
            <button
              type="button"
              className="mobile-drawer-link mobile-drawer-link--finder"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFinder?.();
              }}
            >
              Tư vấn chọn xe ✨
            </button>
            <button
              type="button"
              className="mobile-drawer-link"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUtilityModal('dealers');
              }}
            >
              Tìm Đại Lý &amp; Chỉ Đường Maps
            </button>
            <a
              href="#ford-support"
              className="mobile-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dịch Vụ &amp; Hỗ Trợ
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
