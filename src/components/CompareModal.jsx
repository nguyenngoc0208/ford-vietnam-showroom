import { useEffect } from 'react';
import {
  formatVND,
  getTotalStock,
  handleCarImageError,
} from '../data/fordCars';

const COMPARE_ROWS = [
  {
    key: 'price',
    label: 'Giá niêm yết từ',
    render: (car) => (
      <strong className="compare-price">{formatVND(car.price)}</strong>
    ),
  },
  {
    key: 'stock',
    label: 'Tồn kho toàn quốc',
    render: (car) => {
      const stock = getTotalStock(
        car,
        'all',
        '',
        'Tất cả tỉnh/thành',
        car.defaultYear || '',
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
    render: (car) => `${car.trims?.length || 1} phiên bản`,
  },
  {
    key: 'engine',
    label: 'Động cơ',
    render: (car) => car.specs.engine,
  },
  {
    key: 'power',
    label: 'Công suất',
    render: (car) => car.specs.power,
  },
  {
    key: 'torque',
    label: 'Mô-men xoắn',
    render: (car) => car.specs.torque || '—',
  },
  {
    key: 'transmission',
    label: 'Hộp số',
    render: (car) => car.specs.transmission,
  },
  {
    key: 'drivetrain',
    label: 'Hệ dẫn động',
    render: (car) => car.specs.drivetrain,
  },
  {
    key: 'seats',
    label: 'Số chỗ ngồi',
    render: (car) => car.specs.seats,
  },
  {
    key: 'colors',
    label: 'Màu sắc chính hãng',
    render: (car) => (
      <div className="compare-swatches">
        {car.colors.map((c) => (
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
            <span className="modal-sticky-badge">SO SÁNH {cars.length} XE</span>
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
            So Sánh {cars.length} Mẫu Xe Ford
          </h2>

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-row-label">Tiêu chí</th>
                  {cars.map((car) => (
                    <th key={car.id} className="compare-car-col">
                      <div className="compare-car-head">
                        <span className="vehicle-card-segment">{car.category}</span>
                        <div className="compare-car-img">
                          <img
                            src={car.image}
                            alt={car.name}
                            onError={(event) =>
                              handleCarImageError(event, car.name, car.category)
                            }
                          />
                        </div>
                        <strong className="compare-car-name">{car.name}</strong>
                        <button
                          type="button"
                          className="pill-btn pill-btn--navy btn-table-hold"
                          onClick={() => onSelectCar(car)}
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
                    {cars.map((car) => (
                      <td key={car.id}>{row.render(car)}</td>
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

