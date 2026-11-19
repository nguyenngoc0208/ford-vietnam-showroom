import { useEffect, useState } from 'react';
import {
  COLOR_SWATCHES,
  DEALER_CITIES,
  formatBranchAddress,
  formatVND,
  getBranchStockForTrim,
  getCarYearVariant,
  getColorOption,
  getGoogleMapsUrl,
  getTotalStock,
  handleCarImageError,
} from '../data/fordCars';

const SPEC_FIELDS = [
  { key: 'engine', label: 'Động cơ' },
  { key: 'power', label: 'Công suất cực đại' },
  { key: 'torque', label: 'Mô-men xoắn cực đại' },
  { key: 'range', label: 'Tầm hoạt động', optional: true },
  { key: 'transmission', label: 'Hộp số' },
  { key: 'drivetrain', label: 'Hệ dẫn động' },
];

export default function CarDetailModal({
  car,
  initialColor = '',
  initialYear = '',
  initialCity = 'Tất cả tỉnh/thành',
  onReserveVehicle,
  onClose,
}) {
  const [selectedTrimIndex, setSelectedTrimIndex] = useState(0);
  const [selectedEngineIndex, setSelectedEngineIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(
    initialYear || car?.defaultYear || '',
  );
  const [selectedColor, setSelectedColor] = useState(
    initialColor || car?.colors?.[0]?.name || '',
  );
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [holdBranchId, setHoldBranchId] = useState(null);
  const [holdColor, setHoldColor] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [holdSubmitted, setHoldSubmitted] = useState(null);

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

  const yearVariant = getCarYearVariant(car, selectedYear);
  const yearColors = yearVariant?.colors || car.colors || [];
  const activeTrims = yearVariant?.trims || car.trims || [];
  const activeTrim = activeTrims[selectedTrimIndex] ||
    activeTrims[0] || {
      name: yearVariant?.name || car.name,
      price: yearVariant?.price ?? car.price,
      ...car.specs,
    };
  const engineOptions = activeTrim.engineOptions || [];
  const activeEngineOption =
    engineOptions[selectedEngineIndex] || engineOptions[0] || null;
  const activeSpecsSource = activeEngineOption
    ? { ...activeTrim, ...activeEngineOption }
    : activeTrim;
  const activeTrimPrice = activeEngineOption
    ? activeEngineOption.price
    : activeTrim.price;
  const activeStockKey = activeEngineOption?.stockKey || activeTrim.name;
  const trimDisplayName = activeEngineOption
    ? `${activeTrim.name} (${activeEngineOption.label})`
    : activeTrim.name;

  const availableTrimColors = activeTrim.availableColors?.length
    ? activeTrim.availableColors
        .map((colorName) => yearColors.find((c) => c.name === colorName))
        .filter(Boolean)
    : yearColors;
  const resolvedColorName = availableTrimColors.some(
    (c) => c.name === selectedColor,
  )
    ? selectedColor
    : availableTrimColors[0]?.name || selectedColor;
  const activeColorObj =
    availableTrimColors.find((c) => c.name === resolvedColorName) ||
    getColorOption(car, resolvedColorName, selectedYear);

  const yearDelta =
    !car.yearVariants && selectedYear && car.yearPrices?.[selectedYear]
      ? car.yearPrices[selectedYear] - car.price
      : 0;
  const colorDelta = activeColorObj?.priceDelta || 0;
  const effectivePrice = activeTrimPrice + yearDelta + colorDelta;
  const activeImageSrc = activeColorObj.image || yearVariant?.image || car.image;

  const trimTotalStock = getTotalStock(car, 'all', activeStockKey);
  const filteredInventory =
    selectedCity === 'Tất cả tỉnh/thành'
      ? car.inventory
      : car.inventory.filter((item) => item.city === selectedCity);
  const activeHoldBranch = car.inventory.find(
    (b) => b.branchId === holdBranchId,
  );
  const activeHoldBranchStock = getBranchStockForTrim(
    activeHoldBranch,
    activeStockKey,
  );

  const getBranchYearColors = (branchItem) =>
    branchItem?.colorsByYear?.[selectedYear] || branchItem?.colors || [];

  const getHoldableColors = (branchItem) => {
    const trimColorNames = availableTrimColors.map((c) => c.name);
    const branchColors = getBranchYearColors(branchItem);
    if (!branchColors.length) {
      return trimColorNames;
    }
    const matching = branchColors.filter((c) =>
      trimColorNames.includes(c),
    );
    return matching.length > 0 ? matching : trimColorNames;
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setSelectedTrimIndex(0);
    setSelectedEngineIndex(0);
    setHoldSubmitted(null);
    setHoldBranchId(null);
    const nextVariant = getCarYearVariant(car, year);
    if (car.yearVariants && nextVariant?.defaultColor) {
      setSelectedColor(nextVariant.defaultColor);
    }
  };

  const handleSelectTrim = (index) => {
    setSelectedTrimIndex(index);
    setSelectedEngineIndex(0);
    setHoldSubmitted(null);
    setHoldBranchId(null);
    const nextTrim = activeTrims[index];
    if (nextTrim?.availableColors?.length) {
      if (!nextTrim.availableColors.includes(selectedColor)) {
        setSelectedColor(nextTrim.availableColors[0]);
      }
    }
  };

  const handleSelectEngine = (index) => {
    setSelectedEngineIndex(index);
    setHoldSubmitted(null);
    setHoldBranchId(null);
  };

  const handleOpenHoldForm = (branchItem) => {
    setHoldSubmitted(null);
    setHoldBranchId(branchItem.branchId);
    const holdable = getHoldableColors(branchItem);
    const defaultBranchColor = holdable.includes(activeColorObj.name)
      ? activeColorObj.name
      : holdable[0] || activeColorObj.name;
    setHoldColor(defaultBranchColor);
  };

  const handleSubmitHold = (event) => {
    event.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !activeHoldBranch) {
      return;
    }

    const chosenColorName =
      holdColor || activeColorObj.name || 'Tùy chọn tại đại lý';
    const chosenColorDelta =
      getColorOption(car, chosenColorName, selectedYear)?.priceDelta || 0;

    const reservation = onReserveVehicle({
      car,
      branchItem: activeHoldBranch,
      trimName: trimDisplayName,
      stockKey: activeStockKey,
      year: selectedYear,
      price: activeTrimPrice + yearDelta + chosenColorDelta,
      color: chosenColorName,
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
                key={activeImageSrc}
                src={activeImageSrc}
                alt={`${yearVariant.name} - ${trimDisplayName} - ${activeColorObj.name}`}
                className="car-fade-img"
                onError={(event) =>
                  handleCarImageError(event, yearVariant.name, car.category)
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
                className={`vehicle-stock-badge ${trimTotalStock > 0 ? 'is-in' : 'is-out'}`}
              >
                <span className="stock-dot" aria-hidden="true" />
                {trimTotalStock > 0
                  ? `Bản ${trimDisplayName}: Còn ${trimTotalStock} xe trên toàn quốc`
                  : `Bản ${trimDisplayName}: Tạm hết xe sẵn`}
              </span>
            </div>

            <h2 id="modal-car-title" className="modal-title">
              {yearVariant.name}
              {selectedYear ? ` (${selectedYear})` : ''} — {trimDisplayName}
            </h2>
            <p className="modal-price">
              Giá niêm yết: <strong>{formatVND(effectivePrice)}</strong>
            </p>
            <p className="modal-description">
              {yearVariant.description || car.description}
            </p>

            {car.availableYears && (
              <div className="modal-option-block">
                <span className="modal-option-label">Năm phiên bản:</span>
                <div className="trim-pills" role="group" aria-label="Chọn năm phiên bản">
                  {car.availableYears.map((year) => (
                    <button
                      key={year}
                      type="button"
                      className={`trim-pill ${selectedYear === year ? 'is-active' : ''}`}
                      onClick={() => handleSelectYear(year)}
                    >
                      Phiên bản {year}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTrims.length > 0 && (
              <div className="modal-option-block">
                <span className="modal-option-label">
                  Chọn phiên bản ({activeTrims.length} phiên bản):
                </span>
                <div className="trim-pills" role="group" aria-label="Chọn phiên bản">
                  {activeTrims.map((trim, index) => (
                    <button
                      key={trim.name}
                      type="button"
                      className={`trim-pill ${selectedTrimIndex === index ? 'is-active' : ''}`}
                      onClick={() => handleSelectTrim(index)}
                    >
                      {trim.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {engineOptions.length > 0 && (
              <div className="modal-option-block">
                <span className="modal-option-label">
                  Tùy chọn động cơ &amp; dẫn động ({activeTrim.name}):
                </span>
                <div
                  className="engine-radio-group"
                  role="radiogroup"
                  aria-label="Chọn tùy chọn động cơ"
                >
                  {engineOptions.map((option, index) => {
                    const isSelected = selectedEngineIndex === index;
                    return (
                      <label
                        key={option.label}
                        className={`engine-radio-card ${isSelected ? 'is-active' : ''}`}
                      >
                        <input
                          type="radio"
                          name={`engine-option-${car.id}`}
                          checked={isSelected}
                          onChange={() => handleSelectEngine(index)}
                        />
                        <span className="engine-radio-body">
                          <strong>{option.label}</strong>
                          <span>{formatVND(option.price)}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="modal-option-block">
              <span className="modal-option-label">
                Màu ngoại thất đang xem ({availableTrimColors.length} màu):{' '}
                <strong>{activeColorObj.name}</strong>
                {typeof activeColorObj.priceDelta === 'number' && (
                  <span
                    className={`modal-color-price-note ${
                      activeColorObj.priceDelta > 0 ? 'is-premium' : ''
                    }`}
                  >
                    {activeColorObj.priceDelta > 0
                      ? `+ ${formatVND(activeColorObj.priceDelta)}`
                      : '0 VNĐ'}
                  </span>
                )}
              </span>
              <div className="modal-color-swatches" role="group" aria-label="Chọn màu ngoại thất">
                {availableTrimColors.map((colorObj) => {
                  const isActive = activeColorObj.name === colorObj.name;
                  const priceLabel =
                    typeof colorObj.priceDelta === 'number'
                      ? colorObj.priceDelta > 0
                        ? ` (+ ${formatVND(colorObj.priceDelta)})`
                        : ' (0 VNĐ)'
                      : '';
                  return (
                    <button
                      key={colorObj.name}
                      type="button"
                      className={`modal-swatch-btn ${isActive ? 'is-active' : ''}`}
                      style={{ backgroundColor: colorObj.hex }}
                      title={`${colorObj.name}${priceLabel}`}
                      aria-label={`Chọn màu ${colorObj.name}${priceLabel}`}
                      aria-pressed={isActive}
                      onClick={() => setSelectedColor(colorObj.name)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Specs (Updates dynamically per selected trim & engine) */}
        <section className="modal-section modal-specs-box">
          <h3 className="modal-section-title">
            Thông số kỹ thuật — {trimDisplayName}
          </h3>
          <div className="specs-grid">
            {SPEC_FIELDS.map(({ key, label, optional }) => {
              const value = activeSpecsSource[key] || yearVariant.specs[key];
              if (optional && !value) {
                return null;
              }
              return (
                <div key={key} className="spec-item">
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{value || '—'}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Branch Inventory Table */}
        <section className="modal-section">
          <div className="inventory-heading-row">
            <div>
              <h3 className="modal-section-title">
                Tồn kho phiên bản {trimDisplayName} tại {filteredInventory.length}{' '}
                Showroom{' '}
                {selectedCity === 'Tất cả tỉnh/thành' ? 'Toàn Quốc' : selectedCity}
              </h3>
              <p className="inventory-subnote">
                Lọc theo tỉnh/thành hoặc bấm &ldquo;Chỉ đường&rdquo; để mở Google Maps, &ldquo;Đặt giữ xe&rdquo; để giữ suất giao ngay.
              </p>
            </div>
          </div>

          <div
            className="modal-city-filter branch-filter-pills"
            role="group"
            aria-label="Lọc showroom theo tỉnh thành"
          >
            {DEALER_CITIES.map((city) => (
              <button
                key={city}
                type="button"
                className={`branch-pill ${selectedCity === city ? 'is-active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="inventory-table-wrap">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Showroom Ford Toàn Quốc</th>
                  <th>Số lượng kho</th>
                  <th>Màu sắc sẵn có</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((branchItem) => {
                  const trimStock = getBranchStockForTrim(
                    branchItem,
                    activeStockKey,
                  );
                  const hasStock = trimStock > 0;
                  const branchColors = getBranchYearColors(branchItem);
                  const { primaryAddress, legacyAddress } = formatBranchAddress(
                    branchItem.address,
                  );
                  return (
                    <tr key={branchItem.branchId}>
                      <td data-label="Đại lý Ford">
                        <div className="branch-cell-main">
                          <div className="branch-name-row">
                            <span className="branch-name">{branchItem.branch}</span>
                            {branchItem.city && (
                              <span className="branch-city-badge">
                                {branchItem.city}
                              </span>
                            )}
                          </div>
                          <div className="branch-address-block">
                            <div className="branch-address-row">
                              <span className="branch-address branch-address-primary text-sm text-slate-700">
                                {primaryAddress}
                              </span>
                              <a
                                href={getGoogleMapsUrl(branchItem)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-direction-link"
                                onClick={(event) => event.stopPropagation()}
                              >
                                Chỉ đường ↗
                              </a>
                            </div>
                            {legacyAddress && (
                              <span className="branch-address-legacy block text-xs text-slate-500 mt-0.5">
                                {legacyAddress}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td data-label="Số lượng kho">
                        <strong className="branch-qty">
                          {trimStock} chiếc
                        </strong>
                      </td>
                      <td data-label="Màu sắc sẵn có">
                        {hasStock && branchColors.length > 0 ? (
                          <div className="color-list">
                            {branchColors.map((colorName) => (
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
                          <span className="no-colors">Tạm hết bản này</span>
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
                  Tồn kho bản {holdSubmitted.trimName} tại {holdSubmitted.branchName} đã được cập nhật giảm 1 chiếc và lưu vào Tài khoản của bạn.
                </p>
              </div>
            ) : (
              <>
                <div className="hold-form-header">
                  <div>
                    <h4>Đặt giữ xe tại {activeHoldBranch.branch}</h4>
                    <p>
                      {yearVariant.name}
                      {selectedYear ? ` (${selectedYear})` : ''} — {trimDisplayName} • Tồn kho còn:{' '}
                      <strong>{activeHoldBranchStock} chiếc</strong>
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
                    {getHoldableColors(activeHoldBranch).map((colorName) => (
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
