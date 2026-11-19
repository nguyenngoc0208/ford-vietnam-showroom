import { handleCarImageError } from '../data/fordCars';

export default function CompareBar({
  selectedCars,
  onRemoveCar,
  onClearAll,
  onOpenCompare,
}) {
  if (!selectedCars || selectedCars.length === 0) return null;

  const canCompare = selectedCars.length >= 2;

  return (
    <div className="compare-bar-wrap" role="region" aria-label="Thanh so sánh xe">
      <div className="compare-bar">
        <div className="compare-bar-items">
          {selectedCars.map((car) => (
            <div key={car.id} className="compare-chip">
              <img
                src={car.image}
                alt={car.name}
                onError={(event) =>
                  handleCarImageError(event, car.name, car.category)
                }
              />
              <span>{car.name}</span>
              <button
                type="button"
                className="compare-chip-remove"
                onClick={() => onRemoveCar(car.id)}
                aria-label={`Bỏ ${car.name} khỏi so sánh`}
              >
                ×
              </button>
            </div>
          ))}
          {selectedCars.length < 3 && (
            <span className="compare-slot-hint">
              {selectedCars.length === 1
                ? 'Chọn thêm 1–2 xe nữa để so sánh'
                : 'Có thể chọn thêm 1 xe (tối đa 3)'}
            </span>
          )}
        </div>

        <div className="compare-bar-actions">
          <button
            type="button"
            className="compare-clear-btn"
            onClick={onClearAll}
          >
            Xóa hết
          </button>
          <button
            type="button"
            className="pill-btn pill-btn--blue compare-submit-btn"
            disabled={!canCompare}
            onClick={onOpenCompare}
          >
            So sánh ngay ({selectedCars.length}/3)
          </button>
        </div>
      </div>
    </div>
  );
}

