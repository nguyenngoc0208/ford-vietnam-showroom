import { useEffect, useState } from 'react';
import { DEALER_BRANCHES, formatVND } from '../data/fordCars';

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
  const isPickup = car.id === 'ranger' || car.id === 'raptor';
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
  onClose,
  onSelectCar,
  onSubmitTestDrive,
}) {
  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id || 'everest');
  const [selectedTrimIndex, setSelectedTrimIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState('');
  const [regionKey, setRegionKey] = useState('hcm');

  const [selectedBranchId, setSelectedBranchId] = useState(DEALER_BRANCHES[1].id);
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
  const activeCar = cars.find((c) => c.id === selectedCarId) || cars[0];
  const trims = activeCar.trims || [{ name: activeCar.name, price: activeCar.price }];
  const activeTrim = trims[selectedTrimIndex] || trims[0];
  const effectiveYear = selectedYear || activeCar.defaultYear || '';
  const yearDelta =
    effectiveYear && activeCar.yearPrices?.[effectiveYear]
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
      <div className="modal-content utility-modal-content">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Đóng hộp thoại"
        >
          ×
        </button>

        {isCalculator ? (
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
                      onClick={() => setSelectedYear(year)}
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
              Chọn mẫu xe, chi nhánh đại lý Ford và ngày hẹn phù hợp để trải nghiệm thực tế.
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
                  <span>Chọn chi nhánh đại lý Ford</span>
                  <select
                    value={selectedBranchId}
                    onChange={(event) => setSelectedBranchId(event.target.value)}
                  >
                    {DEALER_BRANCHES.filter((b) => b.id !== 'all').map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name} — {branch.address}
                      </option>
                    ))}
                  </select>
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
  );
}
