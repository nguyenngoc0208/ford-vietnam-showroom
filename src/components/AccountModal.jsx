import { useEffect } from 'react';
import { COLOR_SWATCHES, formatVND } from '../data/fordCars';

export default function AccountModal({
  isOpen,
  reservations,
  testDrives,
  onCancelReservation,
  onResetInventory,
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

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay account-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="account-modal-title"
    >
      <div className="account-panel">
        <div className="account-panel-header">
          <div>
            <p className="catalog-eyebrow">QUẢN LÝ ĐẶT XE TRỰC TUYẾN</p>
            <h2 id="account-modal-title" className="account-panel-title">
              Tài khoản &amp; Đơn giữ xe
            </h2>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Đóng bảng tài khoản"
          >
            ×
          </button>
        </div>

        <div className="account-panel-body">
          <div className="account-section">
            <div className="account-section-header">
              <h3>Đơn đặt giữ xe ({reservations.length})</h3>
            </div>

            {reservations.length > 0 ? (
              <div className="account-list">
                {reservations.map((item) => (
                  <div key={item.id} className="account-item-card">
                    <div className="account-item-top">
                      <span className="receipt-badge">{item.code}</span>
                      <button
                        type="button"
                        className="account-cancel-btn"
                        onClick={() => onCancelReservation(item.id)}
                      >
                        Hủy giữ xe (+1 kho)
                      </button>
                    </div>
                    <strong className="account-car-title">
                      {item.carName}
                      {item.year ? ` (${item.year})` : ''} — {item.trimName}
                    </strong>
                    <div className="account-item-meta">
                      <span>
                        Chi nhánh: <strong>{item.branchName}</strong>
                      </span>
                      <span className="account-color-inline">
                        Màu:
                        <span
                          className="color-dot"
                          style={{
                            backgroundColor:
                              COLOR_SWATCHES[item.color] || '#94a3b8',
                          }}
                        />
                        <strong>{item.color}</strong>
                      </span>
                      {item.price && (
                        <span>
                          Giá niêm yết: <strong>{formatVND(item.price)}</strong>
                        </span>
                      )}
                      <span>
                        Khách hàng: <strong>{item.customerName}</strong> —{' '}
                        {item.customerPhone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="account-empty">
                <p>Chưa có đơn đặt giữ xe nào.</p>
                <span>
                  Chọn bất kỳ mẫu xe nào và bấm &ldquo;Đặt giữ xe&rdquo; tại chi nhánh còn hàng để trải nghiệm trừ tồn kho thời gian thực.
                </span>
              </div>
            )}
          </div>

          {testDrives.length > 0 && (
            <div className="account-section">
              <div className="account-section-header">
                <h3>Lịch lái thử đã đăng ký ({testDrives.length})</h3>
              </div>
              <div className="account-list">
                {testDrives.map((td) => (
                  <div key={td.id} className="account-item-card">
                    <strong className="account-car-title">{td.carName}</strong>
                    <div className="account-item-meta">
                      <span>
                        Ngày hẹn: <strong>{td.date}</strong>
                      </span>
                      <span>
                        Đại lý: <strong>{td.branchName}</strong>
                      </span>
                      <span>
                        Khách: {td.customerName} ({td.customerPhone})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="account-panel-footer">
          <p className="account-storage-note">
            Dữ liệu tồn kho &amp; đơn giữ xe được lưu tự động trong{' '}
            <code>localStorage</code>.
          </p>
          <button
            type="button"
            className="pill-btn pill-btn--outline-navy account-reset-btn"
            onClick={onResetInventory}
          >
            Khôi phục tồn kho mặc định
          </button>
        </div>
      </div>
    </div>
  );
}

