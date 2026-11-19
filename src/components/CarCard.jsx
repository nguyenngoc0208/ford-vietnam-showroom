import { useEffect, useState } from 'react';
import {
  DEALER_BRANCHES,
  formatVND,
  getCarYearVariant,
  getColorOption,
  getTotalStock,
  handleCarImageError,
} from '../data/fordCars';

export default function CarCard({
  car,
  activeBranchId = 'all',
  activeCity = 'Tất cả tỉnh/thành',
  isCompared = false,
  onToggleCompare,
  onSelect,
}) {
  const [selectedYear, setSelectedYear] = useState(car.defaultYear || '');
  const [selectedColor, setSelectedColor] = useState(
    () =>
      getCarYearVariant(car, car.defaultYear)?.defaultColor ||
      car.colors?.[0]?.name ||
      '',
  );

  useEffect(() => {
    car.colors?.forEach((colorObj) => {
      if (colorObj.image) {
        const preloader = new window.Image();
        preloader.src = colorObj.image;
      }
    });
  }, [car.colors]);

  const yearVariant = getCarYearVariant(car, selectedYear);
  const yearColors = yearVariant.cardColors || yearVariant.colors || car.colors;
  const activeColorObj = getColorOption(car, selectedColor, selectedYear);
  const displayedPrice = yearVariant.price;
  const stockCount = getTotalStock(
    car,
    activeBranchId,
    '',
    activeCity,
    selectedYear,
  );
  const isAvailable = stockCount > 0;
  const activeImageSrc = activeColorObj.image || yearVariant.image;

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    const nextVariant = getCarYearVariant(car, year);
    if (nextVariant?.defaultColor) {
      setSelectedColor(nextVariant.defaultColor);
    }
  };

  const activeBranchName =
    activeBranchId !== 'all'
      ? DEALER_BRANCHES.find((b) => b.id === activeBranchId)?.name
      : activeCity && activeCity !== 'Tất cả tỉnh/thành'
        ? activeCity
        : null;

  const stockLabel = isAvailable
    ? activeBranchName
      ? `Còn ${stockCount} xe tại ${activeBranchName}`
      : `Còn ${stockCount} xe sẵn sàng giao`
    : 'Hết xe sẵn — Đặt hàng trước';

  return (
    <article
      className="vehicle-card"
      onClick={() => onSelect(car, activeColorObj.name, selectedYear)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(car, activeColorObj.name, selectedYear);
        }
      }}
    >
      <div className="vehicle-card-media">
        <span className="vehicle-card-segment">{car.category}</span>

        <button
          type="button"
          className={`compare-toggle-btn ${isCompared ? 'is-selected' : ''}`}
          onClick={(event) => {
            event.stopPropagation();
            onToggleCompare?.(car);
          }}
          aria-pressed={isCompared}
        >
          {isCompared ? '✓ Đã chọn' : '+ So sánh'}
        </button>

        <img
          key={activeImageSrc}
          src={activeImageSrc}
          alt={`${yearVariant.name} - ${activeColorObj.name}`}
          className="car-fade-img"
          loading="lazy"
          onError={(event) =>
            handleCarImageError(event, yearVariant.name, car.category)
          }
        />

        {activeColorObj.name && (
          <span className="vehicle-color-tag">
            <span
              className="swatch-dot-mini"
              style={{ backgroundColor: activeColorObj.hex }}
            />
            {activeColorObj.name}
          </span>
        )}
      </div>

      <div className="vehicle-card-body">
        <div className="vehicle-card-title-row">
          <h3 className="vehicle-card-title">{yearVariant.name}</h3>
          {car.availableYears && (
            <div
              className="card-year-tabs"
              onClick={(event) => event.stopPropagation()}
              role="group"
              aria-label={`Chọn năm phiên bản ${yearVariant.name}`}
            >
              {car.availableYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  className={`card-year-tab ${selectedYear === year ? 'is-active' : ''}`}
                  onClick={() => handleSelectYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="vehicle-card-desc">{yearVariant.shortDesc}</p>

        <div className="vehicle-card-footer-stack">
          <div className="vehicle-card-price-row">
            <span className="vehicle-price-label">Giá niêm yết từ:</span>
            <strong className="vehicle-price-value">
              {formatVND(displayedPrice)}
            </strong>
          </div>

          <div
            className="vehicle-swatches"
            onClick={(event) => event.stopPropagation()}
            role="group"
            aria-label={`Chọn màu ngoại thất ${car.name}`}
          >
            <span className="swatches-label">
              Màu: <strong>{activeColorObj.name}</strong>
            </span>
            <div className="swatches-list">
              {yearColors.map((colorObj) => {
                const isSelected = activeColorObj.name === colorObj.name;
                return (
                  <button
                    key={colorObj.name}
                    type="button"
                    className={`swatch-btn ${isSelected ? 'is-selected' : ''}`}
                    style={{ backgroundColor: colorObj.hex }}
                    title={colorObj.name}
                    aria-label={`Chọn màu ${colorObj.name}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedColor(colorObj.name)}
                  />
                );
              })}
            </div>
          </div>

          <div className="vehicle-stock-row">
            <span
              className={`vehicle-stock-badge ${isAvailable ? 'is-in' : 'is-out'}`}
            >
              <span className="stock-dot" aria-hidden="true" />
              {stockLabel}
            </span>
          </div>

          <button
            type="button"
            className="pill-btn pill-btn--navy vehicle-cta"
            onClick={(event) => {
              event.stopPropagation();
              onSelect(car, activeColorObj.name, selectedYear);
            }}
          >
            Xem chi tiết &amp; Kho đại lý
          </button>
        </div>
      </div>
    </article>
  );
}
