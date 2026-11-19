export default function QuickActionsBar({
  onScrollToInventory,
  onOpenPromo,
  onOpenTestDrive,
  onFocusDealers,
}) {
  const actions = [
    {
      id: 'promo',
      title: 'Bảng Giá & Khuyến Mãi',
      desc: 'Cập nhật ưu đãi tháng mới nhất',
      onClick: onOpenPromo,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: 'inventory',
      title: 'Tra Cứu Xe Có Sẵn Tại Kho',
      desc: 'Kiểm tra số lượng & màu sắc thực tế',
      onClick: onScrollToInventory,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 13h18l-1.5-5.5A2 2 0 0 0 17.6 6H6.4a2 2 0 0 0-1.9 1.5L3 13Z" />
          <path d="M2 13v5h2v-2h16v2h2v-5" />
          <circle cx="7" cy="14" r="1" />
          <circle cx="17" cy="14" r="1" />
        </svg>
      ),
    },
    {
      id: 'test-drive',
      title: 'Đăng Ký Lái Thử',
      desc: 'Trải nghiệm thực tế tại showroom',
      onClick: onOpenTestDrive,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 10V3M10.3 13l-6.1 3.5M13.7 13l6.1 3.5" />
        </svg>
      ),
    },
    {
      id: 'dealers',
      title: 'Tìm Đại Lý Ford',
      desc: 'Hệ thống đại lý ủy quyền toàn quốc',
      onClick: onFocusDealers,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 12 3.5a6.5 6.5 0 0 1 6.5 6.5c0 5.4-6.5 11-6.5 11Z" />
          <circle cx="12" cy="10" r="2.3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="quick-actions-strip" aria-label="Công cụ nhanh Ford">
      <div className="container">
        <div className="quick-actions-grid">
          {actions.map((item) => (
            <button
              key={item.id}
              type="button"
              className="quick-action-card"
              onClick={item.onClick}
            >
              <span className="quick-action-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="quick-action-text">
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </span>
              <span className="quick-action-arrow" aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

