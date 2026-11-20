import { useEffect, useState } from 'react';
import {
  formatVND,
  getCarYearVariant,
  getTotalStock,
  handleCarImageError,
} from '../data/fordCars';

function formatSpecText(value) {
  if (
    value === null ||
    value === undefined ||
    value === '' ||
    (typeof value === 'number' && Number.isNaN(value))
  ) {
    return 'Đang cập nhật';
  }
  return value;
}

function parseMaxMetric(text, unitRegex) {
  if (!text) return null;
  const matches = [...String(text).matchAll(/(\d+(?:\.\d+)?)\s*([^\d,;•()]*)/g)];
  let maxVal = null;
  for (const m of matches) {
    const num = Number(m[1]);
    const suffix = (m[2] || '').trim();
    if (!Number.isNaN(num) && unitRegex.test(suffix)) {
      maxVal = maxVal === null ? num : Math.max(maxVal, num);
    }
  }
  return maxVal;
}

const COMPARE_ROWS = [
  {
    key: 'price',
    label: 'Giá niêm yết từ',
    render: (col, highlights) => {
      const isBest = highlights.bestPriceIds.has(col.car.id);
      return (
        <div className={`compare-metric-cell ${isBest ? 'is-best' : ''}`}>
          <strong className="compare-price">{formatVND(col.variant.price)}</strong>
          {isBest && <span className="compare-best-badge">Giá tốt nhất</span>}
        </div>
      );
    },
  },
  {
    key: 'stock',
    label: 'Tồn kho toàn quốc',
    render: (col) => {
      const stock = getTotalStock(
        col.car,
        'all',
        '',
        'Tất cả tỉnh/thành',
        col.year,
      );
      return (
        <span className={`branch-status ${stock > 0 ? 'is-in' : 'is-out'}`}>
          {stock > 0 ? `Còn ${stock} chiếc` : 'Đặt hàng trước'}
        </span>
      );
    },
  },
  {
    key: 'trims',
    label: 'Số phiên bản',
    render: (col) => `${col.variant.trims?.length || 1} phiên bản`,
  },
  {
    key: 'engine',
    label: 'Động cơ',
    render: (col) => formatSpecText(col.variant.specs.engine),
  },
  {
    key: 'power',
    label: 'Công suất',
    render: (col, highlights) => {
      const isBest = highlights.bestPowerIds.has(col.car.id);
      return (
        <div className={`compare-metric-cell ${isBest ? 'is-best' : ''}`}>
          <span>{formatSpecText(col.variant.specs.power)}</span>
          {isBest && (
            <span className="compare-best-badge">Công suất cao nhất</span>
          )}
        </div>
      );
    },
  },
  {
    key: 'torque',
    label: 'Mô-men xoắn',
    render: (col, highlights) => {
      const isBest = highlights.bestTorqueIds.has(col.car.id);
      return (
        <div className={`compare-metric-cell ${isBest ? 'is-best' : ''}`}>
          <span>{formatSpecText(col.variant.specs.torque)}</span>
          {isBest && (
            <span className="compare-best-badge">Mô-men xoắn lớn nhất</span>
          )}
        </div>
      );
    },
  },
  {
    key: 'transmission',
    label: 'Hộp số',
    render: (col) => formatSpecText(col.variant.specs.transmission),
  },
  {
    key: 'drivetrain',
    label: 'Hệ dẫn động',
    render: (col) => formatSpecText(col.variant.specs.drivetrain),
  },
  {
    key: 'seats',
    label: 'Số chỗ ngồi',
    render: (col) => formatSpecText(col.variant.specs.seats),
  },
  {
    key: 'colors',
    label: 'Màu sắc chính hãng',
    render: (col) => (
      <div className="compare-swatches">
        {col.variant.colors.map((c) => (
          <span
            key={c.name}
            className="compare-swatch-dot"
            style={{ backgroundColor: c.hex }}
            title={c.name}
          />
        ))}
      </div>
    ),
  },
];

export default function CompareModal({
  isOpen,
  cars,
  canGoBack = false,
  onHistoryBack,
  onSelectCar,
  onClose,
}) {
  const [selectedYears, setSelectedYears] = useState({});

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cars || cars.length < 2) return null;

  const columns = cars.map((car) => {
    const year = selectedYears[car.id] || car.defaultYear || '';
    const variant = getCarYearVariant(car, year);
    return {
      car,
      year,
      variant,
      priceNum: variant.price,
      powerNum: parseMaxMetric(variant.specs.power, /^(?:PS|mã lực)/i),
      torqueNum: parseMaxMetric(variant.specs.torque, /^Nm/i),
    };
  });

  const prices = columns.map((c) => c.priceNum).filter((v) => typeof v === 'number');
  const minPrice = prices.length ? Math.min(...prices) : null;
  const maxPrice = prices.length ? Math.max(...prices) : null;

  const powers = columns.map((c) => c.powerNum).filter((v) => typeof v === 'number');
  const maxPower = powers.length ? Math.max(...powers) : null;
  const minPower = powers.length ? Math.min(...powers) : null;

  const torques = columns.map((c) => c.torqueNum).filter((v) => typeof v === 'number');
  const maxTorque = torques.length ? Math.max(...torques) : null;
  const minTorque = torques.length ? Math.min(...torques) : null;

  const highlights = {
    bestPriceIds: new Set(
      minPrice !== null && maxPrice !== null && minPrice < maxPrice
        ? columns.filter((c) => c.priceNum === minPrice).map((c) => c.car.id)
        : [],
    ),
    bestPowerIds: new Set(
      maxPower !== null && minPower !== null && maxPower > minPower
        ? columns.filter((c) => c.powerNum === maxPower).map((c) => c.car.id)
        : [],
    ),
    bestTorqueIds: new Set(
      maxTorque !== null && minTorque !== null && maxTorque > minTorque
        ? columns.filter((c) => c.torqueNum === maxTorque).map((c) => c.car.id)
        : [],
    ),
  };

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
    >
      <div className="modal-content modal-content--shell compare-modal-content">
        <div className="modal-sticky-header">
          <div className="modal-sticky-header-left">
            {canGoBack && onHistoryBack && (
              <button
                type="button"
                className="modal-header-nav-btn"
                onClick={onHistoryBack}
                aria-label="Quay lại"
              >
                ← Quay lại
              </button>
            )}
            <span className="modal-sticky-badge">SO SÁNH {columns.length} XE</span>
          </div>
          <button
            type="button"
            className="modal-close modal-close--pill"
            onClick={onClose}
            aria-label="Đóng bảng so sánh"
          >
            ✕ Đóng
          </button>
        </div>

        <div className="modal-scroll-body">
          <p className="catalog-eyebrow">SO SÁNH THÔNG SỐ &amp; TỒN KHO</p>
          <h2 id="compare-modal-title" className="modal-title">
            So Sánh {columns.length} Mẫu Xe Ford
          </h2>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-row-label">Tiêu chí</th>
                  {columns.map((col) => (
                    <th key={col.car.id} className="compare-car-col">
                      <div className="compare-car-head">
                        <span className="vehicle-card-segment">{col.car.category}</span>
                        {col.car.availableYears?.length > 0 && (
                          <div
                            className="compare-year-tabs"
                            role="group"
                            aria-label={`Chọn đời xe ${col.car.name}`}
                          >
                            {col.car.availableYears.map((yr) => (
                              <button
                                key={yr}
                                type="button"
                                className={`compare-year-btn ${col.year === yr ? 'is-active' : ''}`}
                                onClick={() =>
                                  setSelectedYears((prev) => ({
                                    ...prev,
                                    [col.car.id]: yr,
                                  }))
                                }
                              >
                                {yr}
                              </button>
                            ))}
                          </div>
                        )}
                        <div className="compare-car-img">
                          <img
                            src={col.variant.image}
                            alt={col.variant.name}
                            onError={(event) =>
                              handleCarImageError(
                                event,
                                col.variant.name,
                                col.car.category,
                              )
                            }
                          />
                        </div>
                        <strong className="compare-car-name">
                          {col.variant.name}
                          {col.year ? ` (${col.year})` : ''}
                        </strong>
                        <button
                          type="button"
                          className="pill-btn pill-btn--navy btn-table-hold"
                          onClick={() => onSelectCar(col.car, col.year)}
                        >
                          Xem tồn kho
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.key}>
                    <td className="compare-row-label">{row.label}</td>
                    {columns.map((col) => (
                      <td key={col.car.id}>{row.render(col, highlights)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

