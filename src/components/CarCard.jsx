import { useState } from 'react';
import {
  COLOR_SWATCHES,
  DEALER_BRANCHES,
  formatVND,
  getCarPriceForYear,
  getTotalStock,
  handleCarImageError,
} from '../data/fordCars';

export default function CarCard({ car, activeBranchId = 'all', onSelect }) {
  const [selectedColor, setSelectedColor] = useState(car.colors[0] || '');
  const [selectedYear, setSelectedYear] = useState(car.defaultYear || '');
  const [isColorPulse, setIsColorPulse] = useState(false);

  const displayedPrice = getCarPriceForYear(car, selectedYear);
  const stockCount = getTotalStock(car, activeBranchId);
  const isAvailable = stockCount > 0;
  const selectedColorHex = COLOR_SWATCHES[selectedColor] || '#94a3b8';

  const activeBranchName =
    activeBranchId !== 'all'
      ? DEALER_BRANCHES.find((b) => b.id === activeBranchId)?.name
      : null;

  const stockLabel = isAvailable
    ? activeBranchName
      ? `Còn ${stockCount} xe tại ${activeBranchName}`
      : `Còn ${stockCount} xe sẵn sàng giao`
    : 'Hết xe sẵn — Đặt hàng trước';

  const handleSelectSwatch = (colorName) => {
    if (colorName === selectedColor) return;
    setSelectedColor(colorName);
    setIsColorPulse(true);
    window.setTimeout(() => setIsColorPulse(false), 260);
  };

  return (
    <article
      className="vehicle-card"
      onClick={() => onSelect(car, selectedColor, selectedYear)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(car, selectedColor, selectedYear);
        }
      }}
    >
      <div className="vehicle-card-media">
        <div
          className="vehicle-color-backdrop"
          style={{
            background: `radial-gradient(circle at 50% 80%, ${selectedColorHex}38 0%, transparent 68%)`,
          }}
          aria-hidden="true"
        />
        <span className="vehicle-card-segment">{car.category}</span>
        <img
          src={car.image}
          alt={`${car.name} - ${selectedColor}`}
          className={isColorPulse ? 'is-color-switching' : ''}
          loading="lazy"
          onError={(event) =>
            handleCarImageError(event, car.name, car.category)
          }
        />
        {selectedColor && (
          <span className="vehicle-color-tag">
            <span
              className="swatch-dot-mini"
              style={{ backgroundColor: selectedColorHex }}
            />
            {selectedColor}
          </span>
        )}
      </div>

      <div className="vehicle-card-body">
        <div className="vehicle-card-title-row">
          <h3 className="vehicle-card-title">{car.name}</h3>
          {car.availableYears && (
            <div
              className="card-year-tabs"
              onClick={(event) => event.stopPropagation()}
              role="group"
              aria-label={`Chọn năm phiên bản ${car.name}`}
            >
              {car.availableYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  className={`card-year-tab ${selectedYear === year ? 'is-active' : ''}`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="vehicle-card-desc">{car.shortDesc}</p>

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
              Màu: <strong>{selectedColor}</strong>
            </span>
            <div className="swatches-list">
              {car.colors.map((colorName) => {
                const isSelected = selectedColor === colorName;
                return (
                  <button
                    key={colorName}
                    type="button"
                    className={`swatch-btn ${isSelected ? 'is-selected' : ''}`}
                    style={{
                      backgroundColor: COLOR_SWATCHES[colorName] || '#94a3b8',
                    }}
                    title={colorName}
                    aria-label={`Chọn màu ${colorName}`}
                    aria-pressed={isSelected}
                    onClick={() => handleSelectSwatch(colorName)}
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
              onSelect(car, selectedColor, selectedYear);
            }}
          >
            Xem chi tiết &amp; Kho đại lý
          </button>
        </div>
      </div>
    </article>
  );
}
