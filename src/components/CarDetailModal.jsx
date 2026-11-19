import { useEffect, useState } from 'react';
import {
  COLOR_SWATCHES,
  formatVND,
  getColorOption,
  getTotalStock,
  handleCarImageError,
} from '../data/fordCars';

const SPEC_FIELDS = [
  { key: 'engine', label: 'Động cơ' },
  { key: 'power', label: 'Công suất cực đại' },
  { key: 'transmission', label: 'Hộp số' },
  { key: 'drivetrain', label: 'Hệ dẫn động' },
];

export default function CarDetailModal({
  car,
  initialColor = '',
  initialYear = '',
  onReserveVehicle,
  onClose,
}) {
  const [selectedTrimIndex, setSelectedTrimIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(
    initialYear || car?.defaultYear || '',
  );
  const [selectedColor, setSelectedColor] = useState(
    initialColor || car?.colors?.[0]?.name || '',
  );
  const [holdBranchId, setHoldBranchId] = useState(null);
  const [holdColor, setHoldColor] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [holdSubmitted, setHoldSubmitted] = useState(null);
  const [isSwapping, setIsSwapping] = useState(false);

  useEffect(() => {
    car?.colors?.forEach((colorObj) => {
      if (colorObj.image) {
        const preloader = new window.Image();
        preloader.src = colorObj.image;
      }
    });
  }, [car]);

  useEffect(() => {
    if (!car) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [car, onClose]);

  if (!car) return null;

  const activeColorObj = getColorOption(car, selectedColor);
  const activeTrim = car.trims?.[selectedTrimIndex] || {
    name: car.name,
    price: car.price,
    ...car.specs,
  };

  const yearDelta =
    selectedYear && car.yearPrices?.[selectedYear]
      ? car.yearPrices[selectedYear] - car.price
      : 0;
  const effectivePrice = activeTrim.price + yearDelta;

  const totalStock = getTotalStock(car);
  const activeHoldBranch = car.inventory.find(
    (b) => b.branchId === holdBranchId,
  );

  const handleOpenHoldForm = (branchItem) => {
    setHoldSubmitted(null);
    setHoldBranchId(branchItem.branchId);
    const defaultBranchColor = branchItem.colors.includes(activeColorObj.name)
      ? activeColorObj.name
      : branchItem.colors[0] || activeColorObj.name;
    setHoldColor(defaultBranchColor);
  };

  const handleSubmitHold = (event) => {
    event.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !activeHoldBranch) {
      return;
    }

    const reservation = onReserveVehicle({
      car,
      branchItem: activeHoldBranch,
      trimName: activeTrim.name,
      year: selectedYear,
      price: effectivePrice,
      color: holdColor || activeColorObj.name || 'Tùy chọn tại đại lý',
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
    });

    if (reservation) {
      setHoldSubmitted(reservation);
      setCustomerName('');
      setCustomerPhone('');
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-car-title"
    >
      <div className="modal-content">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Đóng chi tiết xe"
        >
          ×
        </button>

        {/* Overview */}
        <div className="modal-overview">
          <div className="modal-overview-media">
            <div className="modal-image-wrapper">
              <img
                src={activeColorObj.image || car.image}
                alt={`${car.name} - ${activeTrim.name} - ${activeColorObj.name}`}
                className={isSwapping ? 'is-swapping' : ''}
                onError={(event) =>
                  handleCarImageError(event, car.name, car.category)
                }
              />
            </div>
            <div className="modal-promo-banner">
              <strong>Ưu đãi hiện hành:</strong> {car.promo}
            </div>
          </div>

          <div className="modal-overview-info">
            <div className="modal-badges">
              <span className="vehicle-card-segment">{car.category}</span>
              <span
                className={`vehicle-stock-badge ${totalStock > 0 ? 'is-in' : 'is-out'}`}
              >
                <span className="stock-dot" aria-hidden="true" />
                {totalStock > 0
                  ? `TP.HCM còn ${totalStock} xe sẵn sàng giao`
                  : 'Tạm hết xe sẵn tại kho'}
              </span>
            </div>

            <h2 id="modal-car-title" className="modal-title">
              {car.name}
              {selectedYear ? ` (${selectedYear})` : ''} — {activeTrim.name}
            </h2>
            <p className="modal-price">
              Giá niêm yết: <strong>{formatVND(effectivePrice)}</strong>
            </p>
            <p className="modal-description">{car.description}</p>

            {car.availableYears && (
              <div className="modal-option-block">
                <span className="modal-option-label">Năm phiên bản:</span>
                <div className="trim-pills" role="group" aria-label="Chọn năm phiên bản">
                  {car.availableYears.map((year) => (
                    <button
                      key={year}
                      type="button"
                      className={`trim-pill ${selectedYear === year ? 'is-active' : ''}`}
                      onClick={() => setSelectedYear(year)}
                    >
                      Phiên bản {year}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {car.trims && car.trims.length > 0 && (
              <div className="modal-option-block">
                <span className="modal-option-label">Chọn phiên bản:</span>
                <div className="trim-pills" role="group" aria-label="Chọn phiên bản">
                  {car.trims.map((trim, index) => (
                    <button
                      key={trim.name}
                      type="button"
                      className={`trim-pill ${selectedTrimIndex === index ? 'is-active' : ''}`}
                      onClick={() => setSelectedTrimIndex(index)}
                    >
                      {trim.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-option-block">
              <span className="modal-option-label">
                Màu ngoại thất đang xem: <strong>{activeColorObj.name}</strong>
              </span>
              <div className="modal-color-swatches" role="group" aria-label="Chọn màu ngoại thất">
                {car.colors.map((colorObj) => {
                  const isActive = activeColorObj.name === colorObj.name;
                  return (
                    <button
                      key={colorObj.name}
                      type="button"
                      className={`modal-swatch-btn ${isActive ? 'is-active' : ''}`}
                      onClick={() => {
                        if (colorObj.name === activeColorObj.name) return;
                        setIsSwapping(true);
                        setSelectedColor(colorObj.name);
                        window.setTimeout(() => setIsSwapping(false), 180);
                      }}
                    >
                      <span
                        className="color-dot"
                        style={{ backgroundColor: colorObj.hex }}
                      />
                      {colorObj.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Specs */}
        <section className="modal-section modal-specs-box">
          <h3 className="modal-section-title">Thông số kỹ thuật nổi bật</h3>
          <div className="specs-grid">
            {SPEC_FIELDS.map(({ key, label }) => (
              <div key={key} className="spec-item">
                <span className="spec-label">{label}</span>
                <span className="spec-value">
                  {activeTrim[key] || car.specs[key]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Branch Inventory Table */}
        <section className="modal-section">
          <div className="inventory-heading-row">
            <div>
              <h3 className="modal-section-title">
                Tra cứu Tồn kho Hệ thống Showroom Ford TP.HCM
              </h3>
              <p className="inventory-subnote">
                Nhấn &ldquo;Đặt giữ xe&rdquo; tại showroom còn hàng để trừ tồn kho thời gian thực và nhận mã giữ chỗ.
              </p>
            </div>
          </div>

          <div className="inventory-table-wrap">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Showroom Ford TP.HCM</th>
                  <th>Số lượng kho</th>
                  <th>Màu sắc sẵn có</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {car.inventory.map((branchItem) => {
                  const hasStock = branchItem.stock > 0;
                  return (
                    <tr key={branchItem.branchId}>
                      <td data-label="Đại lý Ford">
                        <div className="branch-cell-main">
                          <div className="branch-name">{branchItem.branch}</div>
                          <div className="branch-address">{branchItem.address}</div>
                        </div>
                      </td>
                      <td data-label="Số lượng kho">
                        <strong className="branch-qty">
                          {branchItem.stock} chiếc
                        </strong>
                      </td>
                      <td data-label="Màu sắc sẵn có">
                        {hasStock && branchItem.colors.length > 0 ? (
                          <div className="color-list">
                            {branchItem.colors.map((colorName) => (
                              <span key={colorName} className="color-chip">
                                <span
                                  className="color-dot"
                                  style={{
                                    backgroundColor:
                                      COLOR_SWATCHES[colorName] || '#94a3b8',
                                  }}
                                />
                                {colorName}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="no-colors">Tạm hết xe tại kho</span>
                        )}
                      </td>
                      <td data-label="Trạng thái">
                        <span
                          className={`branch-status ${hasStock ? 'is-in' : 'is-out'}`}
                        >
                          {hasStock ? 'Sẵn xe giao ngay' : 'Hết xe tại kho'}
                        </span>
                      </td>
                      <td data-label="Thao tác" className="branch-action-cell">
                        {hasStock ? (
                          <button
                            type="button"
                            className="pill-btn pill-btn--navy btn-table-hold"
                            onClick={() => handleOpenHoldForm(branchItem)}
                          >
                            Đặt giữ xe
                          </button>
                        ) : (
                          <span className="no-colors">Không khả dụng</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Inline Hold Form & Confirmation Receipt */}
        {(activeHoldBranch || holdSubmitted) && (
          <section className="hold-form-box" aria-live="polite">
            {holdSubmitted ? (
              <div className="hold-receipt">
                <div className="hold-receipt-header">
                  <div>
                    <span className="receipt-badge">PHIẾU XÁC NHẬN ĐẶT GIỮ XE</span>
                    <h4>Giữ xe thành công! Mã giữ chỗ: {holdSubmitted.code}</h4>
                  </div>
                  <button
                    type="button"
                    className="hold-form-close"
                    onClick={() => {
                      setHoldSubmitted(null);
                      setHoldBranchId(null);
                    }}
                  >
                    Đóng phiếu
                  </button>
                </div>
                <div className="hold-receipt-grid">
                  <div>
                    <span>Khách hàng:</span>
                    <strong>
                      {holdSubmitted.customerName} ({holdSubmitted.customerPhone})
                    </strong>
                  </div>
                  <div>
                    <span>Mẫu xe &amp; Phiên bản:</span>
                    <strong>
                      {holdSubmitted.carName}
                      {holdSubmitted.year ? ` (${holdSubmitted.year})` : ''} —{' '}
                      {holdSubmitted.trimName}
                    </strong>
                  </div>
                  <div>
                    <span>Màu ngoại thất:</span>
                    <strong>{holdSubmitted.color}</strong>
                  </div>
                  <div>
                    <span>Chi nhánh giữ xe:</span>
                    <strong>{holdSubmitted.branchName}</strong>
                  </div>
                </div>
                <p className="hold-receipt-note">
                  Tồn kho tại {holdSubmitted.branchName} đã được cập nhật giảm 1 chiếc và lưu vào Tài khoản của bạn.
                </p>
              </div>
            ) : (
              <>
                <div className="hold-form-header">
                  <div>
                    <h4>Đặt giữ xe tại {activeHoldBranch.branch}</h4>
                    <p>
                      {car.name}
                      {selectedYear ? ` (${selectedYear})` : ''} — {activeTrim.name} • Tồn kho còn:{' '}
                      <strong>{activeHoldBranch.stock} chiếc</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="hold-form-close"
                    onClick={() => setHoldBranchId(null)}
                  >
                    Đóng
                  </button>
                </div>

                <form className="hold-form-grid-v2" onSubmit={handleSubmitHold}>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên *"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                  />
                  <select
                    value={holdColor}
                    onChange={(event) => setHoldColor(event.target.value)}
                    aria-label="Chọn màu xe còn sẵn tại kho"
                  >
                    {(activeHoldBranch.colors.length > 0
                      ? activeHoldBranch.colors
                      : car.colors.map((c) => c.name)
                    ).map((colorName) => (
                      <option key={colorName} value={colorName}>
                        Màu: {colorName}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="pill-btn pill-btn--blue">
                    Xác nhận đặt giữ xe
                  </button>
                </form>
              </>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
