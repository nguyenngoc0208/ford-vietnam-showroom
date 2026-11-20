import { useEffect, useState } from 'react';
import {
  DEALER_BRANCHES,
  DEALER_CITIES,
  FORD_BRANCHES,
  formatBranchAddress,
  formatVND,
  getCarYearVariant,
  getGoogleMapsUrl,
  getTotalStock,
} from '../data/fordCars';

const REGION_CONFIG = {
  hcm: {
    label: 'TP. Hồ Chí Minh',
    suvTaxRate: 0.1,
    pickupTaxRate: 0.06,
    vanTaxRate: 0.02,
    carPlateFee: 20000000,
    commercialPlateFee: 500000,
  },
  hanoi: {
    label: 'Hà Nội',
    suvTaxRate: 0.12,
    pickupTaxRate: 0.072,
    vanTaxRate: 0.02,
    carPlateFee: 20000000,
    commercialPlateFee: 500000,
  },
  other: {
    label: 'Tỉnh thành khác',
    suvTaxRate: 0.1,
    pickupTaxRate: 0.06,
    vanTaxRate: 0.02,
    carPlateFee: 1000000,
    commercialPlateFee: 150000,
  },
};

function computeOnRoadCost(car, basePrice, regionKey) {
  const region = REGION_CONFIG[regionKey] || REGION_CONFIG.hcm;
  const isEv = car.category === 'Xe Điện';
  const isPickup = car.id.includes('ranger') || car.id.includes('raptor');
  const isTransit = car.id === 'transit';

  let taxRate = region.suvTaxRate;
  if (isEv) taxRate = 0;
  else if (isTransit) taxRate = region.vanTaxRate;
  else if (isPickup) taxRate = region.pickupTaxRate;

  const registrationFee = Math.round(basePrice * taxRate);
  const plateFee =
    isPickup || isTransit ? region.commercialPlateFee : region.carPlateFee;
  const roadFee = isTransit ? 3240000 : 1560000;
  const insuranceAndInspection = (isTransit ? 1825000 : 873400) + 340000;

  return {
    taxRatePercent: (taxRate * 100).toFixed(1).replace('.0', ''),
    isEv,
    registrationFee,
    plateFee,
    roadFee,
    insuranceAndInspection,
    total:
      basePrice +
      registrationFee +
      plateFee +
      roadFee +
      insuranceAndInspection,
  };
}

function getDefaultDateString() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

export default function UtilityModal({
  cars,
  mode,
  canGoBack = false,
  onHistoryBack,
  onClose,
  onSelectCar,
  onSelectBranchFilter,
  onSubmitTestDrive,
}) {
  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id || 'everest');
  const [selectedTrimIndex, setSelectedTrimIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState('');
  const [regionKey, setRegionKey] = useState('hcm');

  const [selectedBranchId, setSelectedBranchId] = useState(DEALER_BRANCHES[1].id);
  const [selectedDealerCity, setSelectedDealerCity] = useState('Tất cả tỉnh/thành');
  const [appointmentDate, setAppointmentDate] = useState(getDefaultDateString);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [testDriveReceipt, setTestDriveReceipt] = useState(null);

  useEffect(() => {
    if (!mode) return undefined;
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
  }, [mode, onClose]);

  if (!mode) return null;

  const isCalculator = mode === 'calculator';
  const isDealers = mode === 'dealers';
  const activeCar = cars.find((c) => c.id === selectedCarId) || cars[0];
  const effectiveYear = selectedYear || activeCar.defaultYear || '';
  const yearVariant = getCarYearVariant(activeCar, effectiveYear);
  const rawTrims = yearVariant?.trims?.length
    ? yearVariant.trims
    : [{ name: activeCar.name, price: activeCar.price }];
  const trims = rawTrims.flatMap((trim) =>
    trim.engineOptions?.length
      ? trim.engineOptions.map((opt) => ({
          name: `${trim.name} — ${opt.label}`,
          price: opt.price,
        }))
      : [trim],
  );
  const activeTrim = trims[selectedTrimIndex] || trims[0];
  const yearDelta =
    !activeCar.yearVariants &&
    effectiveYear &&
    activeCar.yearPrices?.[effectiveYear]
      ? activeCar.yearPrices[effectiveYear] - activeCar.price
      : 0;
  const listedPrice = activeTrim.price + yearDelta;
  const breakdown = computeOnRoadCost(activeCar, listedPrice, regionKey);

  const handleSelectCarChange = (newCarId) => {
    setSelectedCarId(newCarId);
    setSelectedTrimIndex(0);
    const nextCar = cars.find((c) => c.id === newCarId);
    setSelectedYear(nextCar?.defaultYear || '');
  };

  const handleSubmitTestDrive = (event) => {
    event.preventDefault();
    if (!fullName.trim() || !phone.trim() || !appointmentDate) return;

    const branchObj =
      DEALER_BRANCHES.find((b) => b.id === selectedBranchId) ||
      DEALER_BRANCHES[1];

    const record = onSubmitTestDrive?.({
      carId: activeCar.id,
      carName: activeCar.name,
      branchId: branchObj.id,
      branchName: branchObj.name,
      date: appointmentDate,
      customerName: fullName.trim(),
      customerPhone: phone.trim(),
    });

    setTestDriveReceipt(
      record || {
        carName: activeCar.name,
        branchName: branchObj.name,
        date: appointmentDate,
        customerName: fullName.trim(),
        customerPhone: phone.trim(),
      },
    );
  };

  const allBranches = DEALER_BRANCHES.filter((b) => b.id !== 'all');
  const filteredDealers =
    selectedDealerCity === 'Tất cả tỉnh/thành'
      ? allBranches
      : allBranches.filter((b) => b.city === selectedDealerCity);
  const cityGroups = DEALER_CITIES.filter((c) => c !== 'Tất cả tỉnh/thành');
  const selectedBranchObj =
    allBranches.find((b) => b.id === selectedBranchId) || allBranches[0];
  const selectedBranchAddr = formatBranchAddress(selectedBranchObj?.address || '');

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="utility-modal-title"
    >
      <div className="modal-content modal-content--shell utility-modal-content">
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
            <span className="modal-sticky-badge">
              {isDealers
                ? 'TÌM ĐẠI LÝ FORD'
                : isCalculator
                  ? 'BẢNG GIÁ & LĂN BÁNH'
                  : 'ĐĂNG KÝ LÁI THỬ'}
            </span>
          </div>
          <button
            type="button"
            className="modal-close modal-close--pill"
            onClick={onClose}
            aria-label="Đóng hộp thoại"
          >
            ✕ Đóng
          </button>
        </div>

        <div className="modal-scroll-body">
        {isDealers ? (
          <div>
            <p className="catalog-eyebrow">HỆ THỐNG ĐẠI LÝ ỦY QUYỀN TOÀN QUỐC</p>
            <h2 id="utility-modal-title" className="modal-title">
              Tìm Đại Lý Showroom Ford ({filteredDealers.length} Chi Nhánh)
            </h2>
            <p className="modal-description">
              Tra cứu địa chỉ {FORD_BRANCHES.length} showroom Ford chính hãng tại 6 thành phố trực thuộc Trung ương (TP. Hồ Chí Minh, Hà Nội, Hải Phòng, Đà Nẵng, Cần Thơ và TP. Huế); mở Google Maps chỉ đường hoặc lọc xe có sẵn tại chi nhánh.
            </p>

            <div
              className="modal-city-filter branch-filter-pills"
              role="group"
              aria-label="Lọc đại lý theo tỉnh thành"
            >
              {DEALER_CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  className={`branch-pill ${selectedDealerCity === city ? 'is-active' : ''}`}
                  onClick={() => setSelectedDealerCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="dealers-modal-list">
              {filteredDealers.map((branch) => {
                const branchTotalCars = cars.reduce(
                  (sum, c) => sum + getTotalStock(c, branch.id),
                  0,
                );
                const { primaryAddress, legacyAddress } = formatBranchAddress(
                  branch.address,
                );
                return (
                  <div key={branch.id} className="dealer-modal-card">
                    <div className="dealer-modal-info">
                      <div className="dealer-modal-top">
                        <strong>{branch.name}</strong>
                        {branch.city && (
                          <span className="branch-city-badge">{branch.city}</span>
                        )}
                        <span
                          className={`branch-status ${branchTotalCars > 0 ? 'is-in' : 'is-out'}`}
                        >
                          {branchTotalCars > 0
                            ? `${branchTotalCars} xe sẵn kho`
                            : 'Đang nhập lô mới'}
                        </span>
                      </div>
                      <div className="dealer-modal-address">
                        <span className="branch-address-primary text-sm text-slate-700">
                          {primaryAddress}
                        </span>
                        {legacyAddress && (
                          <span className="branch-address-legacy block text-xs text-slate-500 mt-0.5">
                            {legacyAddress}
                          </span>
                        )}
                      </div>
                      <span className="dealer-modal-hotline">
                        Hotline: {branch.hotline}
                      </span>
                    </div>

                    <div className="dealer-modal-actions">
                      <a
                        href={getGoogleMapsUrl(branch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-btn pill-btn--outline-navy btn-table-hold"
                      >
                        Chỉ đường ↗
                      </a>
                      <button
                        type="button"
                        className="pill-btn pill-btn--navy btn-table-hold"
                        onClick={() => {
                          onClose();
                          onSelectBranchFilter?.(branch.id);
                        }}
                      >
                        Xem xe tại kho
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : isCalculator ? (
          <div>
            <p className="catalog-eyebrow">BẢNG GIÁ &amp; DỰ TOÁN LĂN BÁNH</p>
            <h2 id="utility-modal-title" className="modal-title">
              Tính Nhanh Chi Phí Lăn Bánh Xe Ford
            </h2>
            <p className="modal-description">
              Chọn dòng xe, phiên bản và khu vực đăng ký để ước tính tổng chi phí lăn bánh theo quy định hiện hành.
            </p>

            <div className="calc-controls-grid">
              <label className="utility-field">
                <span>Dòng xe Ford</span>
                <select
                  value={activeCar.id}
                  onChange={(event) => handleSelectCarChange(event.target.value)}
                >
                  {cars.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.name} ({car.category})
                    </option>
                  ))}
                </select>
              </label>

              <label className="utility-field">
                <span>Phiên bản</span>
                <select
                  value={selectedTrimIndex}
                  onChange={(event) =>
                    setSelectedTrimIndex(Number(event.target.value))
                  }
                >
                  {trims.map((trim, index) => (
                    <option key={trim.name} value={index}>
                      {trim.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {activeCar.availableYears && (
              <div className="calc-year-row">
                <span>Năm phiên bản:</span>
                <div className="region-pills">
                  {activeCar.availableYears.map((year) => (
                    <button
                      key={year}
                      type="button"
                      className={`region-pill ${effectiveYear === year ? 'is-active' : ''}`}
                      onClick={() => {
                        setSelectedYear(year);
                        setSelectedTrimIndex(0);
                      }}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="calc-region-row">
              <span>Khu vực đăng ký:</span>
              <div className="region-pills" role="group" aria-label="Chọn khu vực đăng ký">
                {Object.entries(REGION_CONFIG).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    className={`region-pill ${regionKey === key ? 'is-active' : ''}`}
                    onClick={() => setRegionKey(key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="estimate-card">
              <div className="estimate-row">
                <span>Giá niêm yết (đã gồm VAT)</span>
                <strong>{formatVND(listedPrice)}</strong>
              </div>
              <div className="estimate-row">
                <span>
                  Lệ phí trước bạ ({breakdown.taxRatePercent}%
                  {breakdown.isEv ? ' — Ưu đãi xe điện' : ''})
                </span>
                <strong>{formatVND(breakdown.registrationFee)}</strong>
              </div>
              <div className="estimate-row">
                <span>Phí cấp biển số ({REGION_CONFIG[regionKey].label})</span>
                <strong>{formatVND(breakdown.plateFee)}</strong>
              </div>
              <div className="estimate-row">
                <span>Phí sử dụng đường bộ (1 năm)</span>
                <strong>{formatVND(breakdown.roadFee)}</strong>
              </div>
              <div className="estimate-row">
                <span>Bảo hiểm TNDS &amp; Phí đăng kiểm</span>
                <strong>{formatVND(breakdown.insuranceAndInspection)}</strong>
              </div>
              <div className="estimate-total">
                <span>Tổng chi phí lăn bánh dự kiến</span>
                <strong>{formatVND(breakdown.total)}</strong>
              </div>
            </div>

            <div className="calc-promo-note">
              <strong>Khuyến mãi áp dụng:</strong> {activeCar.promo}
            </div>

            <div className="calc-footer-actions">
              <button
                type="button"
                className="pill-btn pill-btn--navy"
                onClick={() => {
                  onClose();
                  onSelectCar(activeCar, effectiveYear);
                }}
              >
                Xem tồn kho {activeCar.name} tại đại lý
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="catalog-eyebrow">TRẢI NGHIỆM THỰC TẾ</p>
            <h2 id="utility-modal-title" className="modal-title">
              Đăng Ký Lái Thử Xe Ford
            </h2>
            <p className="modal-description">
              Chọn mẫu xe, showroom Ford chính hãng toàn quốc và ngày hẹn phù hợp để trải nghiệm thực tế.
            </p>

            {testDriveReceipt ? (
              <div className="hold-receipt utility-success">
                <span className="receipt-badge">ĐẶT LỊCH LÁI THỬ THÀNH CÔNG</span>
                <h4>
                  Hẹn lái thử {testDriveReceipt.carName} ngày{' '}
                  {testDriveReceipt.date}
                </h4>
                <div className="hold-receipt-grid">
                  <div>
                    <span>Khách hàng:</span>
                    <strong>
                      {testDriveReceipt.customerName} (
                      {testDriveReceipt.customerPhone})
                    </strong>
                  </div>
                  <div>
                    <span>Đại lý Ford:</span>
                    <strong>{testDriveReceipt.branchName}</strong>
                  </div>
                </div>
                <button
                  type="button"
                  className="pill-btn pill-btn--navy"
                  style={{ marginTop: '14px' }}
                  onClick={onClose}
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form className="utility-form" onSubmit={handleSubmitTestDrive}>
                <div className="utility-field-row">
                  <label className="utility-field">
                    <span>Chọn mẫu xe Ford</span>
                    <select
                      value={selectedCarId}
                      onChange={(event) => setSelectedCarId(event.target.value)}
                    >
                      {cars.map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.name} ({car.category})
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="utility-field">
                    <span>Ngày hẹn lái thử *</span>
                    <input
                      type="date"
                      required
                      min={getDefaultDateString()}
                      value={appointmentDate}
                      onChange={(event) => setAppointmentDate(event.target.value)}
                    />
                  </label>
                </div>

                <label className="utility-field">
                  <span>Chọn showroom Ford toàn quốc</span>
                  <select
                    value={selectedBranchId}
                    onChange={(event) => setSelectedBranchId(event.target.value)}
                  >
                    {cityGroups.map((city) => (
                      <optgroup key={city} label={city}>
                        {allBranches
                          .filter((branch) => branch.city === city)
                          .map((branch) => (
                            <option key={branch.id} value={branch.id}>
                              {branch.name} — {formatBranchAddress(branch.address).primaryAddress}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                  {selectedBranchObj && (
                    <div className="dealer-modal-address">
                      <span className="branch-address-primary text-sm text-slate-700">
                        {selectedBranchAddr.primaryAddress}
                      </span>
                      {selectedBranchAddr.legacyAddress && (
                        <span className="branch-address-legacy block text-xs text-slate-500 mt-0.5">
                          {selectedBranchAddr.legacyAddress}
                        </span>
                      )}
                    </div>
                  )}
                </label>

                <div className="utility-field-row">
                  <label className="utility-field">
                    <span>Họ và tên *</span>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </label>

                  <label className="utility-field">
                    <span>Số điện thoại *</span>
                    <input
                      type="tel"
                      required
                      placeholder="0909 xxx xxx"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </label>
                </div>

                <button type="submit" className="pill-btn pill-btn--navy">
                  Xác nhận đăng ký lái thử
                </button>
              </form>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
