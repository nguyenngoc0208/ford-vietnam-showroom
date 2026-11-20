export const COLOR_SWATCHES = {
  'Đỏ Thể Thao': '#7A0019',
  'Đen Huyền Bí': '#141414',
  'Trắng Ánh Sao': '#F3F4F6',
  'Xanh Mãnh Liệt': '#4E6B38',
  Bạc: '#CBD5E1',
  'Xám Meteor': '#52525B',
  Đen: '#141414',
  'Trắng Tuyết': '#FFFFFF',
  'Nâu Equinox': '#4A3728',
  'Đỏ Cam': '#EA580C',
  Trắng: '#FFFFFF',
  Đỏ: '#DC2626',
  'Xanh Khói': '#475569',
  Xanh: '#64829A',
  'Xanh Dương': '#1D4ED8',
  'Vàng Luxe': '#CA8A04',
  'Xám Conquer': '#64748B',
  'Cam Code': '#EA580C',
  'Ghi Xám': '#52525B',
  Xám: '#64748B',
  'Xanh Thạch Anh': '#52645D',
  'Vàng Cát': '#9E9584',
  Nâu: '#4A3F39',
  'Ghi Ánh Thép': '#6B7280',
  'Bạc Ánh Kim': '#CBD5E1',
  Cam: '#EA580C',
};

export const DEALER_CITIES = [
  'Tất cả tỉnh/thành',
  'TP. Hồ Chí Minh',
  'Hà Nội',
  'Hải Phòng',
  'Đà Nẵng',
  'Cần Thơ',
  'TP. Huế',
];

export const BRANCH_TYPE_LABELS = {
  '3S': '3S',
  '1S': '1S • Trưng bày',
  '2S': '2S • Dịch vụ',
};

export function getBranchTypeLabel(type = '3S') {
  return BRANCH_TYPE_LABELS[type] || '3S';
}

const RAW_FORD_BRANCHES = [
  // A. TP. Hồ Chí Minh (14 địa điểm)
  {
    id: 'saigon-cao-thang',
    name: 'Sài Gòn Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '61A Cao Thắng, Phường Bàn Cờ, TP. Hồ Chí Minh',
    administrative_area_before_merger: '61A Cao Thắng, Quận 3, TP. Hồ Chí Minh',
    hotline: '0968 703 703',
  },
  {
    id: 'saigon-pho-quang',
    name: 'Sài Gòn Ford – Phổ Quang',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '104 Phổ Quang, Phường Tân Sơn Hòa, TP. Hồ Chí Minh',
    administrative_area_before_merger: '104 Phổ Quang, Quận Tân Bình, TP. Hồ Chí Minh',
    hotline: '0933 885 885',
  },
  {
    id: 'saigon-nam-sg',
    name: 'Sài Gòn Ford – Nam Sài Gòn',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '161F Dạ Nam, Phường Chánh Hưng, TP. Hồ Chí Minh',
    administrative_area_before_merger: '161F Dạ Nam, Quận 8, TP. Hồ Chí Minh',
    hotline: '0925 158 158',
  },
  {
    id: 'ben-thanh',
    name: 'Bến Thành Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '39 Chế Lan Viên, Phường Tây Thạnh, TP. Hồ Chí Minh',
    administrative_area_before_merger: '39 Chế Lan Viên, Quận Tân Phú, TP. Hồ Chí Minh',
    hotline: '0908 061 061',
  },
  {
    id: 'tan-thuan-ford',
    name: 'Tân Thuận Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: 'KCX Tân Thuận, Phường Tân Thuận, TP. Hồ Chí Minh',
    administrative_area_before_merger: 'KCX Tân Thuận, Quận 7, TP. Hồ Chí Minh',
    hotline: '0917 764 636',
  },
  {
    id: 'western-an-lac',
    name: 'Western Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '530 Kinh Dương Vương, Phường An Lạc, TP. Hồ Chí Minh',
    administrative_area_before_merger: '530 Kinh Dương Vương, Quận Bình Tân, TP. Hồ Chí Minh',
    hotline: '0918 479 696',
  },
  {
    id: 'gia-dinh',
    name: 'Gia Định Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '900 Quốc lộ 1A, Phường Thới An, TP. Hồ Chí Minh',
    administrative_area_before_merger: '900 Quốc lộ 1A, Quận 12, TP. Hồ Chí Minh',
    hotline: '0933 681 123',
  },
  {
    id: 'suoi-tien-ford',
    name: 'Suối Tiên Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '35 Hoàng Hữu Nam, Phường Tăng Nhơn Phú, TP. Hồ Chí Minh',
    administrative_area_before_merger: '35 Hoàng Hữu Nam, TP. Thủ Đức, TP. Hồ Chí Minh',
    hotline: '0939 173 535',
  },
  {
    id: 'city-binh-trieu',
    name: 'City Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '218 Quốc lộ 13, Phường Hiệp Bình, TP. Hồ Chí Minh',
    administrative_area_before_merger: '218 Quốc lộ 13, TP. Thủ Đức, TP. Hồ Chí Minh',
    hotline: '0937 400 700',
  },
  {
    id: 'phu-my',
    name: 'Phú Mỹ Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: 'KCN Cát Lái 2, Phường Cát Lái, TP. Hồ Chí Minh',
    administrative_area_before_merger: 'KCN Cát Lái 2, TP. Thủ Đức, TP. Hồ Chí Minh',
    hotline: '0945 007 872',
  },
  {
    id: 'binh-duong-ford',
    name: 'Bình Dương Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: 'Khu Liên Hợp, Phường Bình Dương, TP. Hồ Chí Minh',
    administrative_area_before_merger: 'Khu Liên Hợp, TP. Thủ Dầu Một, Tỉnh Bình Dương',
    hotline: '0902 558 448',
  },
  {
    id: 'di-an-ford',
    name: 'Dĩ An Ford',
    branch_type: '3S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: 'Đường ĐT 743, Phường Dĩ An, TP. Hồ Chí Minh',
    administrative_area_before_merger: 'Đường ĐT 743, TP. Dĩ An, Tỉnh Bình Dương',
    hotline: '0901 261 779',
  },
  {
    id: 'city-ba-ria-2s',
    name: 'City Ford – Bà Rịa',
    branch_type: '2S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: 'Quốc lộ 51, Phường Bà Rịa, TP. Hồ Chí Minh',
    administrative_area_before_merger: 'Quốc lộ 51, TP. Bà Rịa, Tỉnh Bà Rịa - Vũng Tàu',
    hotline: '0933 265 269',
  },
  {
    id: 'vung-tau-ford',
    name: 'City Ford – Vũng Tàu',
    branch_type: '1S',
    city: 'TP. Hồ Chí Minh',
    administrative_area_after_merger: '40A Đường 30/4, Phường Tam Thắng, TP. Hồ Chí Minh',
    administrative_area_before_merger: '40A Đường 30/4, TP. Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu',
    hotline: '0933 590 077',
  },

  // B. Hà Nội (11 địa điểm: 8 3S + 2 1S + 1 2S)
  {
    id: 'ha-noi-ford',
    name: 'Hà Nội Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: '311–313 Trường Chinh, Phường Phương Liệt, Hà Nội',
    administrative_area_before_merger: '311–313 Trường Chinh, Phường Khương Mai, Quận Thanh Xuân, Hà Nội',
    hotline: '024 3565 8888',
  },
  {
    id: 'thang-long-ford',
    name: 'Thăng Long Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: '105 Láng Hạ, Phường Đống Đa, Hà Nội',
    administrative_area_before_merger: '105 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội',
    hotline: '024 3562 9999',
  },
  {
    id: 'thanh-xuan-ford',
    name: 'Thanh Xuân Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: 'Ngõ 443 Nguyễn Trãi, Phường Khương Đình, Hà Nội',
    administrative_area_before_merger: 'Ngõ 443 Nguyễn Trãi, Quận Thanh Xuân, Hà Nội',
    hotline: '024 3552 8888',
  },
  {
    id: 'long-bien-ford',
    name: 'Long Biên Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: '03 Nguyễn Văn Linh, Phường Việt Hưng, Hà Nội',
    administrative_area_before_merger: '03 Nguyễn Văn Linh, Quận Long Biên, Hà Nội',
    hotline: '024 3875 8888',
  },
  {
    id: 'ha-thanh-ford',
    name: 'Hà Thành Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: 'Cụm công nghiệp Lai Xá, Phường Tây Tựu, Hà Nội',
    administrative_area_before_merger: 'Cụm công nghiệp Lai Xá, Huyện Hoài Đức, Hà Nội',
    hotline: '024 3386 8888',
  },
  {
    id: 'my-dinh-ford',
    name: 'Mỹ Đình Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: 'Đường Trịnh Văn Bô, Phường Xuân Phương, Hà Nội',
    administrative_area_before_merger: 'Đường Trịnh Văn Bô, Quận Nam Từ Liêm, Hà Nội',
    hotline: '024 3768 8888',
  },
  {
    id: 'thu-do-ford',
    name: 'Thủ Đô Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: '05 Ngọc Hồi, Phường Yên Sở, Hà Nội',
    administrative_area_before_merger: '05 Ngọc Hồi, Huyện Thanh Trì, Hà Nội',
    hotline: '024 3681 8888',
  },
  {
    id: 'an-do-ford',
    name: 'An Đô Ford',
    branch_type: '3S',
    city: 'Hà Nội',
    administrative_area_after_merger: '168 Phạm Văn Đồng, Phường Đông Ngạc, Hà Nội',
    administrative_area_before_merger: '168 Phạm Văn Đồng, Quận Bắc Từ Liêm, Hà Nội',
    hotline: '024 3750 8888',
  },
  {
    id: 'txf-ha-dong-1s',
    name: 'TXF Hà Đông – 1S',
    branch_type: '1S',
    city: 'Hà Nội',
    administrative_area_after_merger: '1105 Do Lộ, Phường Yên Nghĩa, Hà Nội',
    administrative_area_before_merger: '1105 Do Lộ, Quận Hà Đông, Hà Nội',
    hotline: '024 3552 6666',
  },
  {
    id: 'htf-my-dinh-1s',
    name: 'HTF Mỹ Đình – 1S',
    branch_type: '1S',
    city: 'Hà Nội',
    administrative_area_after_merger: '02 Tôn Thất Thuyết, Phường Cầu Giấy, Hà Nội',
    administrative_area_before_merger: '02 Tôn Thất Thuyết, Quận Cầu Giấy, Hà Nội',
    hotline: '024 3386 6666',
  },
  {
    id: 'thang-long-tay-mo-2s',
    name: 'Thăng Long Ford – 2S Tây Mỗ',
    branch_type: '2S',
    city: 'Hà Nội',
    administrative_area_after_merger: 'Phường Tây Mỗ, Hà Nội',
    administrative_area_before_merger: 'Phường Tây Mỗ, Quận Nam Từ Liêm, Hà Nội',
    hotline: '024 3562 6666',
  },

  // C. Đà Nẵng (2 địa điểm)
  {
    id: 'da-nang-ford',
    name: 'Dana Ford – Showroom 1',
    branch_type: '3S',
    city: 'Đà Nẵng',
    administrative_area_after_merger: '56 Điện Biên Phủ, Phường Thanh Khê, Đà Nẵng',
    administrative_area_before_merger: '56 Điện Biên Phủ, Quận Thanh Khê, Đà Nẵng',
    hotline: '0236 3646 888',
  },
  {
    id: 'dana-ford',
    name: 'Dana Ford – Showroom 2',
    branch_type: '3S',
    city: 'Đà Nẵng',
    administrative_area_after_merger: '286 Phạm Hùng, Phường Hòa Xuân, Đà Nẵng',
    administrative_area_before_merger: '286 Phạm Hùng, Huyện Hòa Vang, Đà Nẵng',
    hotline: '0236 3616 888',
  },

  // D. Hải Phòng (2 địa điểm)
  {
    id: 'hai-phong-ford',
    name: 'Hải Phòng Ford',
    branch_type: '3S',
    city: 'Hải Phòng',
    administrative_area_after_merger: 'Tổ 3, Khu An Trì, Phường Hồng Bàng, TP. Hải Phòng',
    administrative_area_before_merger: 'Tổ 3, Khu An Trì, TP. Hải Phòng',
    hotline: '0225 3282 888',
  },
  {
    id: 'hai-duong-ford',
    name: 'Hải Dương Ford',
    branch_type: '3S',
    city: 'Hải Phòng',
    administrative_area_after_merger: 'Khu 14, Phường Thành Đông, TP. Hải Phòng',
    administrative_area_before_merger: 'Khu 14, TP. Hải Dương, Tỉnh Hải Dương',
    hotline: '0220 3895 888',
  },

  // E. Cần Thơ (1 địa điểm)
  {
    id: 'can-tho-ford',
    name: 'Cần Thơ Ford',
    branch_type: '3S',
    city: 'Cần Thơ',
    administrative_area_after_merger: 'Lô 11C Võ Nguyên Giáp, Phường Hưng Phú, TP. Cần Thơ',
    administrative_area_before_merger: 'Lô 11C Võ Nguyên Giáp, Quận Cái Răng, TP. Cần Thơ',
    hotline: '0292 3737 888',
  },

  // F. TP. Huế (1 địa điểm)
  {
    id: 'hue-ford',
    name: 'Huế Ford',
    branch_type: '3S',
    city: 'TP. Huế',
    administrative_area_after_merger: '595 Nguyễn Tất Thành, Khu vực Thủy Dương, TP. Huế',
    administrative_area_before_merger:
      '595 Nguyễn Tất Thành, Xã Thủy Dương, Thị xã Hương Thủy, Tỉnh Thừa Thiên Huế',
    hotline: '0234 3818 888',
  },
];

export const FORD_BRANCHES = RAW_FORD_BRANCHES.map((branch) => ({
  ...branch,
  type: branch.branch_type,
  address: `${branch.administrative_area_after_merger} (Địa chỉ cũ: ${branch.administrative_area_before_merger})`,
}));

export const DEALER_BRANCHES = [
  {
    id: 'all',
    name: 'Tất cả chi nhánh',
    city: 'Tất cả tỉnh/thành',
    address: `Hệ thống ${FORD_BRANCHES.length} Showroom Ford chính hãng tại 6 Thành phố trực thuộc Trung ương`,
    hotline: '1800 588 888',
  },
  ...FORD_BRANCHES,
];

const BRANCH_BY_ID = Object.fromEntries(
  FORD_BRANCHES.map((branch) => [branch.id, branch]),
);

const BRANCH_ORDER = Object.fromEntries(
  FORD_BRANCHES.map((branch, index) => [branch.id, index]),
);

function createBranchStock(branchId, stockByTrim, colors = [], colorsByYear = null) {
  const info = BRANCH_BY_ID[branchId];
  const branchType = info.branch_type || info.type || '3S';
  const isServiceOnly = branchType === '2S';
  const normalizedStockByTrim = isServiceOnly
    ? Object.fromEntries(Object.keys(stockByTrim).map((key) => [key, 0]))
    : stockByTrim;
  const stock = isServiceOnly
    ? 0
    : Object.values(normalizedStockByTrim).reduce((sum, qty) => sum + qty, 0);
  const entry = {
    branchId,
    branch: info.name,
    branch_type: branchType,
    type: branchType,
    city: info.city,
    administrative_area_after_merger: info.administrative_area_after_merger,
    administrative_area_before_merger: info.administrative_area_before_merger,
    address: info.address,
    stock,
    stockByTrim: normalizedStockByTrim,
    colors: stock > 0 ? colors : [],
  };
  if (colorsByYear) {
    entry.colorsByYear = Object.fromEntries(
      Object.entries(colorsByYear).map(([year, list]) => [
        year,
        stock > 0 ? list : [],
      ]),
    );
  }
  return entry;
}

export const MEGA_CATEGORIES = [
  {
    key: 'Xe SUV',
    label: 'Xe SUV',
    bannerTitle: 'Khám phá các mẫu xe SUV của Ford',
    bannerImage: '/images/cars/banner-suv.png',
  },
  {
    key: 'Xe Thương mại',
    label: 'Xe Thương mại',
    bannerTitle: 'Các mẫu xe Pick-up & thương mại',
    bannerImage: '/images/cars/banner-commercial.png',
  },
  {
    key: 'Xe Điện',
    label: 'Xe Điện',
    bannerTitle: 'Khám phá các mẫu xe điện của Ford',
    bannerImage: '/images/cars/banner-ev.png',
  },
];

export const CATEGORY_TABS = ['Tất cả', 'Xe SUV', 'Xe Thương mại', 'Xe Điện'];

export const HERO_SLIDES = [
  {
    id: 'territory',
    carId: 'territory',
    title: 'Ford Territory',
    subtitle: 'SUV 5 chỗ đô thị với động cơ 1.5L EcoBoost và khoang lái kép thông minh.',
    slogan: 'MỞ HÀNH TRÌNH ĐÁNG GIÁ',
    studioImage: '/images/cars/territory-red.png',
    lifestyleImage: '/images/cars/banner-suv.png',
  },
  {
    id: 'everest',
    carId: 'everest',
    title: 'Ford Everest',
    subtitle: 'SUV 7 chỗ khung gầm rời mạnh mẽ, làm chủ mọi cung đường cùng gia đình.',
    slogan: 'CHINH PHỤC MỌI ĐỊA HÌNH',
    studioImage: '/images/cars/everest-white.png',
    lifestyleImage: '/images/cars/banner-suv.png',
  },
  {
    id: 'ranger',
    carId: 'ranger',
    title: 'Ford Ranger Mới',
    subtitle: 'Bán tải biểu tượng thế hệ mới với 2 phiên bản Wildtrak & XLS, tùy chọn động cơ dầu 2.0L / 3.0L 10AT.',
    slogan: 'SỐNG CHẤT NHƯ RANGER',
    studioImage: '/images/cars/ranger-orange.png',
    lifestyleImage: '/images/cars/banner-commercial.png',
  },
];

const RAW_FORD_CARS = [
  {
    id: 'everest',
    name: 'Ford Everest',
    category: 'Xe SUV',
    price: 1129000000,
    promo: 'Ưu đãi gói bảo dưỡng & phụ kiện chính hãng trị giá 30 triệu đồng.',
    image: '/images/cars/everest-white.png',
    shortDesc:
      'SUV 7 chỗ khung gầm rời, động cơ Xăng 2.3L EcoBoost & Dầu 2.0L Turbo, hộp số tự động 10 cấp.',
    description:
      'Ford Everest thế hệ mới sở hữu khung gầm rời chắc chắn, lưới tản nhiệt chữ C đặc trưng, 6 chế độ kiểm soát địa hình và không gian 7 chỗ sang trọng.',
    colors: [
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        priceDelta: 8000000,
        image: '/images/cars/everest-white.png',
      },
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        priceDelta: 0,
        image: '/images/cars/everest-silver.png',
      },
      {
        name: 'Xám',
        hex: '#64748B',
        priceDelta: 0,
        image: '/images/cars/everest-grey.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        priceDelta: 0,
        image: '/images/cars/everest-black.png',
      },
      {
        name: 'Xanh Thạch Anh',
        hex: '#52645D',
        priceDelta: 8000000,
        image: '/images/cars/everest-quartz-green.png',
      },
    ],
    trims: [
      {
        name: 'Platinum+',
        price: 1629000000,
        engine: 'Xăng 2.3L EcoBoost 10AT 4x4',
        power: '300 PS',
        torque: '446 Nm',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu chủ động (4x4)',
        seats: '7 chỗ ngồi',
        availableColors: ['Trắng', 'Bạc', 'Xám', 'Đen', 'Xanh Thạch Anh'],
      },
      {
        name: 'Platinum',
        price: 1335000000,
        engine: 'Dầu 2.0L Turbo 10AT 4x2',
        power: null,
        torque: null,
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '7 chỗ ngồi',
        availableColors: ['Đen', 'Trắng', 'Bạc', 'Xanh Thạch Anh', 'Xám'],
        engineOptions: [
          {
            label: 'Dầu 2.0L Turbo 10AT 4x2',
            stockKey: 'Platinum 4x2',
            price: 1335000000,
            engine: 'Dầu 2.0L Turbo 10AT 4x2',
            power: null,
            torque: null,
            transmission: 'Tự động 10 cấp điện tử (10AT)',
            drivetrain: 'Cầu sau (4x2)',
          },
          {
            label: 'Dầu 2.0L Turbo 10AT 4x4',
            stockKey: 'Platinum 4x4',
            price: 1440000000,
            engine: 'Dầu 2.0L Turbo 10AT 4x4',
            power: null,
            torque: null,
            transmission: 'Tự động 10 cấp điện tử (10AT)',
            drivetrain: 'Hai cầu toàn thời gian (4x4)',
          },
        ],
      },
      {
        name: 'Sport',
        price: 1209000000,
        engine: 'Dầu 2.0L Turbo 10AT 4x2',
        power: null,
        torque: null,
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '7 chỗ ngồi',
        availableColors: ['Trắng', 'Xám', 'Đen'],
      },
      {
        name: 'Active',
        price: 1129000000,
        engine: 'Dầu 2.0L Turbo 10AT 4x2',
        power: null,
        torque: null,
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '7 chỗ ngồi',
        availableColors: ['Đen', 'Trắng'],
      },
    ],
    specs: {
      engine: 'Xăng 2.3L EcoBoost / Dầu 2.0L Turbo',
      power: '300 PS (bản Platinum+ 2.3L)',
      torque: '446 Nm (bản Platinum+ 2.3L)',
      transmission: 'Tự động 10 cấp (10AT)',
      drivetrain: '4x2 / 4x4 toàn thời gian',
      seats: '7 chỗ ngồi',
    },
    inventory: [
      createBranchStock(
        'ben-thanh',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Xanh Thạch Anh', 'Trắng', 'Xám', 'Đen'],
      ),
      createBranchStock(
        'city-binh-trieu',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 2,
          Active: 1,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'saigon-cao-thang',
        {
          'Platinum+': 1,
          'Platinum 4x2': 0,
          'Platinum 4x4': 1,
          Sport: 1,
          Active: 1,
        },
        ['Đen', 'Xám', 'Xanh Thạch Anh'],
      ),
      createBranchStock(
        'saigon-pho-quang',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'saigon-nam-sg',
        {
          'Platinum+': 0,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Xám', 'Trắng'],
      ),
      createBranchStock(
        'western-an-lac',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Xám', 'Trắng', 'Đen'],
      ),
      createBranchStock(
        'gia-dinh',
        {
          'Platinum+': 0,
          'Platinum 4x2': 0,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Đen'],
      ),
      createBranchStock(
        'phu-my',
        {
          'Platinum+': 2,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 1,
          Active: 1,
        },
        ['Xanh Thạch Anh', 'Trắng', 'Bạc', 'Xám'],
      ),
      createBranchStock(
        'ha-noi-ford',
        {
          'Platinum+': 2,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 3,
          Active: 2,
        },
        ['Xanh Thạch Anh', 'Đen', 'Trắng', 'Xám', 'Bạc'],
      ),
      createBranchStock(
        'thang-long-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Đen', 'Trắng', 'Xanh Thạch Anh'],
      ),
      createBranchStock(
        'da-nang-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 2,
          Active: 1,
        },
        ['Bạc', 'Trắng', 'Xám'],
      ),
      createBranchStock(
        'hai-phong-ford',
        {
          'Platinum+': 0,
          'Platinum 4x2': 0,
          'Platinum 4x4': 1,
          Sport: 1,
          Active: 1,
        },
        ['Đen', 'Xám', 'Bạc'],
      ),
      createBranchStock(
        'can-tho-ford',
        {
          'Platinum+': 0,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'binh-duong-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 2,
        },
        ['Xanh Thạch Anh', 'Đen', 'Trắng'],
      ),
      createBranchStock(
        'vung-tau-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Đen', 'Xanh Thạch Anh'],
      ),
      createBranchStock(
        'tan-thuan-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Xanh Thạch Anh', 'Trắng', 'Đen'],
      ),
      createBranchStock(
        'suoi-tien-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 2,
          Active: 1,
        },
        ['Trắng', 'Xám', 'Đen'],
      ),
      createBranchStock(
        'di-an-ford',
        {
          'Platinum+': 0,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 1,
          Active: 1,
        },
        ['Đen', 'Bạc', 'Trắng'],
      ),
      createBranchStock(
        'city-ba-ria-2s',
        {
          'Platinum+': 0,
          'Platinum 4x2': 0,
          'Platinum 4x4': 0,
          Sport: 0,
          Active: 0,
        },
        [],
      ),
      createBranchStock(
        'thanh-xuan-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Đen', 'Trắng', 'Bạc'],
      ),
      createBranchStock(
        'long-bien-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Trắng', 'Xám', 'Xanh Thạch Anh'],
      ),
      createBranchStock(
        'thu-do-ford',
        {
          'Platinum+': 0,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 1,
          Active: 1,
        },
        ['Đen', 'Trắng', 'Xám'],
      ),
      createBranchStock(
        'ha-thanh-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'an-do-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 1,
          Active: 1,
        },
        ['Xanh Thạch Anh', 'Đen', 'Trắng'],
      ),
      createBranchStock(
        'my-dinh-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 1,
          Sport: 2,
          Active: 1,
        },
        ['Trắng', 'Xám', 'Đen'],
      ),
      createBranchStock(
        'txf-ha-dong-1s',
        {
          'Platinum+': 0,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Đen'],
      ),
      createBranchStock(
        'htf-my-dinh-1s',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Xanh Thạch Anh', 'Trắng'],
      ),
      createBranchStock(
        'thang-long-tay-mo-2s',
        {
          'Platinum+': 0,
          'Platinum 4x2': 0,
          'Platinum 4x4': 0,
          Sport: 0,
          Active: 0,
        },
        [],
      ),
      createBranchStock(
        'hai-duong-ford',
        {
          'Platinum+': 0,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Đen'],
      ),
      createBranchStock(
        'dana-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Bạc', 'Xám'],
      ),
      createBranchStock(
        'hue-ford',
        {
          'Platinum+': 1,
          'Platinum 4x2': 1,
          'Platinum 4x4': 0,
          Sport: 1,
          Active: 1,
        },
        ['Trắng', 'Xám', 'Đen'],
      ),
    ],
  },
  {
    id: 'territory',
    name: 'Ford Territory',
    category: 'Xe SUV',
    price: 739000000,
    promo: 'Hỗ trợ 100% lệ phí trước bạ và tặng 1 năm bảo hiểm vật chất.',
    image: '/images/cars/territory-red.png',
    shortDesc:
      'SUV 5 chỗ đô thị, động cơ xăng 1.5L EcoBoost tăng áp I4, hộp số tự động 7 cấp ly hợp kép.',
    description:
      'Ford Territory mang thiết kế hiện đại, màn hình kép 12.3 inch, cửa sổ trời Panorama và công nghệ an toàn thông minh Ford Co-Pilot360.',
    colors: [
      {
        name: 'Đỏ',
        hex: '#DC2626',
        priceDelta: 0,
        image: '/images/cars/territory-red.png',
      },
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        priceDelta: 0,
        image: '/images/cars/territory-white.png',
      },
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        priceDelta: 0,
        image: '/images/cars/territory-silver.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        priceDelta: 0,
        image: '/images/cars/territory-black.png',
      },
      {
        name: 'Xanh',
        hex: '#64829A',
        priceDelta: 8000000,
        image: '/images/cars/territory-slate.png',
      },
    ],
    trims: [
      {
        name: 'Territory Platinum 1.5L AT',
        price: 916000000,
        engine: 'Xăng 1.5L EcoBoost',
        power: '160 PS @ 5.400–5.700 vòng/phút',
        torque: '248 Nm',
        transmission: 'Tự động 7 cấp',
        drivetrain: 'Dẫn động một cầu 4x2 • Chế độ lái tùy chọn',
        seats: '5 chỗ ngồi',
        fuel_consumption_l_100km: null,
      },
      {
        name: 'Territory Titanium X 1.5L AT',
        price: 875000000,
        engine: 'Xăng 1.5L EcoBoost',
        power: '160 PS @ 5.400–5.700 vòng/phút',
        torque: '248 Nm',
        transmission: 'Tự động 7 cấp',
        drivetrain: 'Dẫn động một cầu 4x2',
        seats: '5 chỗ ngồi',
        fuel_consumption_l_100km: null,
        speakers: null,
      },
      {
        name: 'Territory Titanium 1.5L AT',
        price: 819000000,
        engine: 'Xăng 1.5L EcoBoost',
        power: '160 PS @ 5.400–5.700 vòng/phút',
        torque: '248 Nm',
        transmission: 'Tự động 7 cấp',
        drivetrain: 'Dẫn động một cầu 4x2 • Chế độ lái tùy chọn',
        seats: '5 chỗ ngồi',
        fuel_consumption_l_100km: null,
      },
      {
        name: 'Territory Trend 1.5L AT',
        price: 739000000,
        engine: 'Xăng 1.5L EcoBoost',
        power: '160 PS @ 5.400–5.700 vòng/phút',
        torque: '248 Nm',
        transmission: 'Tự động 7 cấp',
        drivetrain: 'Dẫn động một cầu 4x2',
        seats: '5 chỗ ngồi',
        fuel_consumption_l_100km: null,
        screen: null,
      },
    ],
    specs: {
      engine: 'Xăng 1.5L EcoBoost',
      power: '160 PS @ 5.400–5.700 vòng/phút',
      torque: '248 Nm',
      transmission: 'Tự động 7 cấp',
      drivetrain: 'Dẫn động một cầu 4x2',
      seats: '5 chỗ ngồi',
      fuel_consumption_l_100km: null,
    },
    inventory: [
      createBranchStock(
        'ben-thanh',
        {
          'Territory Platinum 1.5L AT': 2,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Đỏ', 'Trắng', 'Đen', 'Xanh'],
      ),
      createBranchStock(
        'city-binh-trieu',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 1,
        },
        ['Trắng', 'Bạc', 'Đỏ'],
      ),
      createBranchStock(
        'saigon-cao-thang',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Xanh', 'Đen', 'Đỏ'],
      ),
      createBranchStock(
        'saigon-pho-quang',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Xanh', 'Đỏ'],
      ),
      createBranchStock(
        'saigon-nam-sg',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Bạc', 'Trắng'],
      ),
      createBranchStock(
        'western-an-lac',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 2,
        },
        ['Xanh', 'Đen'],
      ),
      createBranchStock(
        'gia-dinh',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 0,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 1,
        },
        ['Trắng', 'Đỏ'],
      ),
      createBranchStock(
        'phu-my',
        {
          'Territory Platinum 1.5L AT': 2,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 1,
        },
        ['Xanh', 'Trắng', 'Bạc'],
      ),
      createBranchStock(
        'ha-noi-ford',
        {
          'Territory Platinum 1.5L AT': 2,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 3,
          'Territory Trend 1.5L AT': 2,
        },
        ['Đỏ', 'Trắng', 'Đen', 'Xanh'],
      ),
      createBranchStock(
        'thang-long-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Bạc', 'Đỏ'],
      ),
      createBranchStock(
        'da-nang-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 1,
        },
        ['Trắng', 'Xanh', 'Đen'],
      ),
      createBranchStock(
        'hai-phong-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Bạc', 'Đen', 'Trắng'],
      ),
      createBranchStock(
        'can-tho-ford',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Đỏ'],
      ),
      createBranchStock(
        'binh-duong-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Đen', 'Xanh'],
      ),
      createBranchStock(
        'vung-tau-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Đỏ', 'Trắng', 'Bạc'],
      ),
      createBranchStock(
        'tan-thuan-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Đỏ', 'Trắng', 'Đen'],
      ),
      createBranchStock(
        'suoi-tien-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Xanh', 'Đen'],
      ),
      createBranchStock(
        'di-an-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 2,
        },
        ['Đen', 'Bạc', 'Đỏ'],
      ),
      createBranchStock(
        'city-ba-ria-2s',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 0,
          'Territory Titanium 1.5L AT': 0,
          'Territory Trend 1.5L AT': 0,
        },
        [],
      ),
      createBranchStock(
        'thanh-xuan-ford',
        {
          'Territory Platinum 1.5L AT': 2,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 1,
        },
        ['Đỏ', 'Trắng', 'Đen', 'Xanh'],
      ),
      createBranchStock(
        'long-bien-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Xanh', 'Đen'],
      ),
      createBranchStock(
        'thu-do-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Đen', 'Trắng', 'Bạc'],
      ),
      createBranchStock(
        'ha-thanh-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 2,
        },
        ['Đỏ', 'Trắng', 'Xanh'],
      ),
      createBranchStock(
        'an-do-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 2,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Trắng', 'Đen', 'Đỏ'],
      ),
      createBranchStock(
        'my-dinh-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 2,
          'Territory Trend 1.5L AT': 2,
        },
        ['Trắng', 'Xanh', 'Đen'],
      ),
      createBranchStock(
        'txf-ha-dong-1s',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Trắng', 'Đỏ'],
      ),
      createBranchStock(
        'htf-my-dinh-1s',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Đen', 'Bạc', 'Trắng'],
      ),
      createBranchStock(
        'thang-long-tay-mo-2s',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 0,
          'Territory Titanium 1.5L AT': 0,
          'Territory Trend 1.5L AT': 0,
        },
        [],
      ),
      createBranchStock(
        'hai-duong-ford',
        {
          'Territory Platinum 1.5L AT': 0,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Trắng', 'Bạc'],
      ),
      createBranchStock(
        'dana-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Đỏ', 'Trắng', 'Xanh'],
      ),
      createBranchStock(
        'hue-ford',
        {
          'Territory Platinum 1.5L AT': 1,
          'Territory Titanium X 1.5L AT': 1,
          'Territory Titanium 1.5L AT': 1,
          'Territory Trend 1.5L AT': 1,
        },
        ['Đỏ', 'Trắng', 'Đen'],
      ),
    ],
  },
  {
    id: 'transit',
    name: 'Transit Hoàn Toàn Mới',
    category: 'Xe Thương mại',
    price: 907000000,
    promo: 'Ưu đãi lãi suất doanh nghiệp 0% trong 6 tháng đầu cho lô xe vận tải.',
    image: '/images/cars/transit-white.png',
    shortDesc:
      'Xe thương mại 16-18 chỗ thế hệ mới với động cơ 2.3L Turbo Diesel và khoang hành khách rộng rãi.',
    description:
      'Transit Hoàn Toàn Mới là giải pháp vận chuyển hành khách hàng đầu tại Việt Nam với động cơ 2.3L Turbo Diesel bền bỉ, màn hình kép 12.3 inch, cửa trượt điện và chi phí vận hành tối ưu.',
    colors: [
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        priceDelta: 0,
        image: '/images/cars/transit-white.png',
      },
      {
        name: 'Vàng Cát',
        hex: '#9E9584',
        priceDelta: 0,
        image: '/images/cars/transit-sand.png',
      },
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        priceDelta: 0,
        image: '/images/cars/transit-silver.png',
      },
      {
        name: 'Nâu',
        hex: '#4A3F39',
        priceDelta: 0,
        image: '/images/cars/transit-brown.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        priceDelta: 0,
        image: '/images/cars/transit-black.png',
      },
    ],
    trims: [
      {
        name: 'Transit Premium+ 18 chỗ',
        price: 1091000000,
        engine: '2.3L Turbo Diesel',
        power: '171 PS @ 3.200 vòng/phút',
        torque: '425 Nm @ 1.400–2.400 vòng/phút',
        transmission: 'Số sàn 6 cấp',
        drivetrain: 'Dẫn động cầu sau (RWD)',
        seats: '18 chỗ ngồi',
        dimensions: '6703 × 2164 × 2775 mm',
      },
      {
        name: 'Transit Premium 16 chỗ',
        price: 999000000,
        engine: '2.3L Turbo Diesel',
        power: '171 PS @ 3.200 vòng/phút',
        torque: '425 Nm @ 1.400–2.400 vòng/phút',
        transmission: 'Số sàn 6 cấp',
        drivetrain: 'Dẫn động cầu sau (RWD)',
        seats: '16 chỗ ngồi',
        dimensions: '5998 × 2068 × 2775 mm',
      },
      {
        name: 'Transit Trend 16 chỗ',
        price: 907000000,
        engine: '2.3L Turbo Diesel',
        power: '171 PS @ 3.200 vòng/phút',
        torque: '425 Nm @ 1.400–2.400 vòng/phút',
        transmission: 'Số sàn 6 cấp',
        drivetrain: 'Dẫn động cầu sau (RWD)',
        seats: '16 chỗ ngồi',
        dimensions: '5998 × 2068 × 2775 mm',
      },
    ],
    specs: {
      engine: '2.3L Turbo Diesel',
      power: '171 PS @ 3.200 vòng/phút',
      torque: '425 Nm @ 1.400–2.400 vòng/phút',
      transmission: 'Số sàn 6 cấp',
      drivetrain: 'Dẫn động cầu sau (RWD)',
      seats: '16 - 18 chỗ ngồi',
      dimensions: '5998–6703 × 2068–2164 × 2775 mm',
    },
    inventory: [
      createBranchStock(
        'ben-thanh',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Vàng Cát', 'Bạc'],
      ),
      createBranchStock(
        'city-binh-trieu',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 2,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc', 'Nâu'],
      ),
      createBranchStock(
        'saigon-cao-thang',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Vàng Cát', 'Đen'],
      ),
      createBranchStock(
        'saigon-pho-quang',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Nâu', 'Đen'],
      ),
      createBranchStock(
        'saigon-nam-sg',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 0,
          'Transit Trend 16 chỗ': 1,
        },
        ['Bạc', 'Vàng Cát'],
      ),
      createBranchStock(
        'western-an-lac',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 2,
          'Transit Trend 16 chỗ': 3,
        },
        ['Trắng', 'Vàng Cát', 'Bạc', 'Nâu'],
      ),
      createBranchStock(
        'gia-dinh',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc'],
      ),
      createBranchStock(
        'phu-my',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Vàng Cát', 'Nâu', 'Bạc'],
      ),
      createBranchStock(
        'ha-noi-ford',
        {
          'Transit Premium+ 18 chỗ': 2,
          'Transit Premium 16 chỗ': 2,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Vàng Cát', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'thang-long-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc', 'Nâu'],
      ),
      createBranchStock(
        'da-nang-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Vàng Cát', 'Bạc'],
      ),
      createBranchStock(
        'hai-phong-ford',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'can-tho-ford',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Vàng Cát'],
      ),
      createBranchStock(
        'binh-duong-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc', 'Nâu', 'Đen'],
      ),
      createBranchStock(
        'vung-tau-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Vàng Cát', 'Bạc'],
      ),
      createBranchStock(
        'tan-thuan-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'suoi-tien-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Vàng Cát', 'Nâu'],
      ),
      createBranchStock(
        'di-an-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Bạc', 'Vàng Cát'],
      ),
      createBranchStock(
        'city-ba-ria-2s',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 0,
          'Transit Trend 16 chỗ': 0,
        },
        [],
      ),
      createBranchStock(
        'thanh-xuan-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 2,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'long-bien-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Vàng Cát', 'Nâu'],
      ),
      createBranchStock(
        'thu-do-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Bạc'],
      ),
      createBranchStock(
        'ha-thanh-ford',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Vàng Cát'],
      ),
      createBranchStock(
        'an-do-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Bạc', 'Đen'],
      ),
      createBranchStock(
        'my-dinh-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 2,
        },
        ['Trắng', 'Vàng Cát', 'Đen'],
      ),
      createBranchStock(
        'txf-ha-dong-1s',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Bạc'],
      ),
      createBranchStock(
        'htf-my-dinh-1s',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Nâu'],
      ),
      createBranchStock(
        'thang-long-tay-mo-2s',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 0,
          'Transit Trend 16 chỗ': 0,
        },
        [],
      ),
      createBranchStock(
        'hai-duong-ford',
        {
          'Transit Premium+ 18 chỗ': 0,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Bạc'],
      ),
      createBranchStock(
        'dana-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Vàng Cát', 'Nâu'],
      ),
      createBranchStock(
        'hue-ford',
        {
          'Transit Premium+ 18 chỗ': 1,
          'Transit Premium 16 chỗ': 1,
          'Transit Trend 16 chỗ': 1,
        },
        ['Trắng', 'Vàng Cát', 'Bạc'],
      ),
    ],
  },
  {
    id: 'ranger',
    name: 'Ford Ranger Mới',
    category: 'Xe Thương mại',
    price: 707000000,
    defaultYear: '2026',
    availableYears: ['2025', '2026'],
    yearPrices: {
      '2025': 669000000,
      '2026': 707000000,
    },
    promo: 'Hỗ trợ 50% lệ phí trước bạ và tặng nắp thùng cuộn chính hãng.',
    image: '/images/cars/ranger-orange.png',
    shortDesc:
      'Xe bán tải đa dụng thế hệ mới với 2 phiên bản Wildtrak & XLS cùng các tùy chọn động cơ dầu 2.0L / 3.0L.',
    description:
      'Ford Ranger thế hệ mới là mẫu bán tải hàng đầu Việt Nam với màn hình dọc 12 inch SYNC 4A, cụm đèn LED Matrix, Ford Co-Pilot360 và khả năng lội nước 800mm.',
    colors: [
      {
        name: 'Cam',
        hex: '#EA580C',
        priceDelta: 8000000,
        image: '/images/cars/ranger-orange.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        priceDelta: 0,
        image: '/images/cars/ranger-black.png',
      },
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        priceDelta: 0,
        image: '/images/cars/ranger-white.png',
      },
      {
        name: 'Xám',
        hex: '#64748B',
        priceDelta: 0,
        image: '/images/cars/ranger-grey.png',
      },
      {
        name: 'Bạc Ánh Kim',
        hex: '#CBD5E1',
        priceDelta: 0,
        image: '/images/cars/ranger-silver.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#FFFFFF',
        priceDelta: 0,
        image: '/images/cars/ranger-white.png',
      },
      {
        name: 'Ghi Ánh Thép',
        hex: '#6B7280',
        priceDelta: 0,
        image: '/images/cars/ranger-grey.png',
      },
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        priceDelta: 0,
        image: '/images/cars/ranger-silver.png',
      },
      {
        name: 'Đỏ',
        hex: '#DC2626',
        priceDelta: 8000000,
        image: '/images/cars/ranger-red.png',
      },
    ],
    trims: [
      {
        name: 'Ranger Wildtrak',
        price: 949000000,
        engine: 'Diesel 2.0L Single-Turbo',
        power: '170 PS',
        torque: '405 Nm',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu chủ động (4x4) • Ford Co-Pilot360',
        seats: '5 chỗ ngồi',
        availableColors: ['Trắng', 'Xám', 'Bạc Ánh Kim', 'Cam', 'Đen'],
        engineOptions: [
          {
            label: 'Dầu 2.0L 10AT 4x4',
            stockKey: 'Ranger Wildtrak 2.0L 4X4 AT',
            price: 949000000,
            engine: 'Diesel 2.0L Single-Turbo',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu chủ động (4x4) • Ford Co-Pilot360',
          },
          {
            label: 'Dầu 3.0L 10AT 4x4',
            stockKey: 'Ranger Wildtrak 3.0L 4X4 AT',
            price: 1093000000,
            engine: 'Diesel 3.0L V6',
            power: '250 PS',
            torque: '600 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu chủ động (4x4) • Ford Co-Pilot360',
          },
        ],
      },
      {
        name: 'Ranger XLS',
        price: 707000000,
        engine: 'Diesel 2.0L Single-Turbo',
        power: '170 PS',
        torque: '405 Nm',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '5 chỗ ngồi',
        availableColors: [
          'Đỏ',
          'Xám',
          'Trắng',
          'Bạc Ánh Kim',
          'Trắng Tuyết',
          'Ghi Ánh Thép',
          'Bạc',
          'Đen',
        ],
        engineOptions: [
          {
            label: 'Dầu 2.0L 10AT 4x2',
            stockKey: 'Ranger XLS 2.0L 4x2 AT',
            price: 707000000,
            engine: 'Diesel 2.0L Single-Turbo',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Cầu sau (4x2)',
          },
          {
            label: 'Dầu 2.0L 10AT 4x4',
            stockKey: 'Ranger XLS 2.0L 4x4 AT',
            price: 776000000,
            engine: 'Diesel 2.0L Single-Turbo',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu bán thời gian (4x4)',
          },
        ],
      },
    ],
    specs: {
      engine: 'Diesel 2.0L Single-Turbo / Diesel 3.0L V6',
      power: '170 - 250 PS',
      torque: '405 - 600 Nm',
      transmission: 'Tự động 10 cấp (10AT)',
      drivetrain: '4x2 / 4x4 • Ford Co-Pilot360',
      seats: '5 chỗ ngồi',
    },
    yearVariants: {
      '2026': {
        name: 'Ford Ranger Mới',
        price: 707000000,
        defaultColor: 'Cam',
        image: '/images/cars/ranger-orange.png',
        shortDesc:
          'Xe bán tải đa dụng thế hệ mới với 2 phiên bản Wildtrak & XLS, tùy chọn động cơ dầu 2.0L / 3.0L 10AT.',
        colors: [
          {
            name: 'Đen',
            hex: '#141414',
            priceDelta: 0,
            image: '/images/cars/ranger-black.png',
          },
          {
            name: 'Trắng',
            hex: '#FFFFFF',
            priceDelta: 0,
            image: '/images/cars/ranger-white.png',
          },
          {
            name: 'Xám',
            hex: '#64748B',
            priceDelta: 0,
            image: '/images/cars/ranger-grey.png',
          },
          {
            name: 'Bạc Ánh Kim',
            hex: '#CBD5E1',
            priceDelta: 0,
            image: '/images/cars/ranger-silver.png',
          },
          {
            name: 'Cam',
            hex: '#EA580C',
            priceDelta: 8000000,
            image: '/images/cars/ranger-orange.png',
          },
          {
            name: 'Trắng Tuyết',
            hex: '#FFFFFF',
            priceDelta: 0,
            image: '/images/cars/ranger-white.png',
          },
          {
            name: 'Ghi Ánh Thép',
            hex: '#6B7280',
            priceDelta: 0,
            image: '/images/cars/ranger-grey.png',
          },
          {
            name: 'Bạc',
            hex: '#CBD5E1',
            priceDelta: 0,
            image: '/images/cars/ranger-silver.png',
          },
          {
            name: 'Đỏ',
            hex: '#DC2626',
            priceDelta: 8000000,
            image: '/images/cars/ranger-red.png',
          },
        ],
        cardColors: [
          {
            name: 'Cam',
            hex: '#EA580C',
            priceDelta: 8000000,
            image: '/images/cars/ranger-orange.png',
          },
          {
            name: 'Đen',
            hex: '#141414',
            priceDelta: 0,
            image: '/images/cars/ranger-black.png',
          },
          {
            name: 'Trắng',
            hex: '#FFFFFF',
            priceDelta: 0,
            image: '/images/cars/ranger-white.png',
          },
          {
            name: 'Xám',
            hex: '#64748B',
            priceDelta: 0,
            image: '/images/cars/ranger-grey.png',
          },
          {
            name: 'Bạc Ánh Kim',
            hex: '#CBD5E1',
            priceDelta: 0,
            image: '/images/cars/ranger-silver.png',
          },
          {
            name: 'Đỏ',
            hex: '#DC2626',
            priceDelta: 8000000,
            image: '/images/cars/ranger-red.png',
          },
        ],
        specs: {
          engine: 'Diesel 2.0L Single-Turbo / Diesel 3.0L V6',
          power: '170 - 250 PS',
          torque: '405 - 600 Nm',
          transmission: 'Tự động 10 cấp (10AT)',
          drivetrain: '4x2 / 4x4 • Ford Co-Pilot360',
          seats: '5 chỗ ngồi',
        },
        trims: [
          {
            name: 'Ranger Wildtrak',
            price: 949000000,
            engine: 'Diesel 2.0L Single-Turbo',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu chủ động (4x4) • Ford Co-Pilot360',
            seats: '5 chỗ ngồi',
            availableColors: ['Trắng', 'Xám', 'Bạc Ánh Kim', 'Cam', 'Đen'],
            engineOptions: [
              {
                label: 'Dầu 2.0L 10AT 4x4',
                stockKey: 'Ranger Wildtrak 2.0L 4X4 AT',
                price: 949000000,
                engine: 'Diesel 2.0L Single-Turbo',
                power: '170 PS',
                torque: '405 Nm',
                transmission: 'Tự động 10 cấp (10AT)',
                drivetrain: 'Hai cầu chủ động (4x4) • Ford Co-Pilot360',
              },
              {
                label: 'Dầu 3.0L 10AT 4x4',
                stockKey: 'Ranger Wildtrak 3.0L 4X4 AT',
                price: 1093000000,
                engine: 'Diesel 3.0L V6',
                power: '250 PS',
                torque: '600 Nm',
                transmission: 'Tự động 10 cấp (10AT)',
                drivetrain: 'Hai cầu chủ động (4x4) • Ford Co-Pilot360',
              },
            ],
          },
          {
            name: 'Ranger XLS',
            price: 707000000,
            engine: 'Diesel 2.0L Single-Turbo',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Cầu sau (4x2)',
            seats: '5 chỗ ngồi',
            availableColors: [
              'Đỏ',
              'Xám',
              'Trắng',
              'Bạc Ánh Kim',
              'Trắng Tuyết',
              'Ghi Ánh Thép',
              'Bạc',
              'Đen',
            ],
            engineOptions: [
              {
                label: 'Dầu 2.0L 10AT 4x2',
                stockKey: 'Ranger XLS 2.0L 4x2 AT',
                price: 707000000,
                engine: 'Diesel 2.0L Single-Turbo',
                power: '170 PS',
                torque: '405 Nm',
                transmission: 'Tự động 10 cấp (10AT)',
                drivetrain: 'Cầu sau (4x2)',
              },
              {
                label: 'Dầu 2.0L 10AT 4x4',
                stockKey: 'Ranger XLS 2.0L 4x4 AT',
                price: 776000000,
                engine: 'Diesel 2.0L Single-Turbo',
                power: '170 PS',
                torque: '405 Nm',
                transmission: 'Tự động 10 cấp (10AT)',
                drivetrain: 'Hai cầu bán thời gian (4x4)',
              },
            ],
          },
        ],
      },
      '2025': {
        name: 'Ford Ranger',
        price: 669000000,
        defaultColor: 'Vàng Luxe',
        image: '/images/cars/ranger-yellow.png',
        shortDesc:
          'Bán tải đa dụng 2025 với 6 phiên bản Ranger Stormtrak, Wildtrak, Sport, XLS+, XLS, XL bền bỉ và tối ưu chi phí.',
        colors: [
          {
            name: 'Vàng Luxe',
            hex: '#CA8A04',
            priceDelta: 8000000,
            image: '/images/cars/ranger-yellow.png',
          },
          {
            name: 'Đỏ Cam',
            hex: '#EA580C',
            priceDelta: 8000000,
            image: '/images/cars/ranger-orange.png',
          },
          {
            name: 'Đen',
            hex: '#141414',
            priceDelta: 0,
            image: '/images/cars/ranger-black.png',
          },
          {
            name: 'Trắng',
            hex: '#FFFFFF',
            priceDelta: 0,
            image: '/images/cars/ranger-white.png',
          },
          {
            name: 'Xám Meteor',
            hex: '#52525B',
            priceDelta: 0,
            image: '/images/cars/ranger-grey.png',
          },
          {
            name: 'Bạc',
            hex: '#CBD5E1',
            priceDelta: 0,
            image: '/images/cars/ranger-silver.png',
          },
        ],
        specs: {
          engine: '2.0L Bi-Turbo / 2.0L Turbo Diesel i4 TDCi',
          power: '170 - 210 PS',
          torque: '405 - 500 Nm',
          transmission: 'Số sàn 6 cấp / Tự động 6 cấp / 10 cấp',
          drivetrain: '4x2 / 4x4 bán thời gian',
          seats: '5 chỗ ngồi',
        },
        trims: [
          {
            name: 'Ranger Stormtrak',
            price: 1039000000,
            engine: '2.0L Bi-Turbo Diesel i4 TDCi',
            power: '210 PS',
            torque: '500 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu chủ động (4x4)',
            seats: '5 chỗ ngồi',
            availableColors: ['Đen', 'Trắng', 'Xám Meteor', 'Bạc'],
          },
          {
            name: 'Ranger Wildtrak',
            price: 979000000,
            engine: '2.0L Bi-Turbo Diesel i4 TDCi',
            power: '210 PS',
            torque: '500 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu bán thời gian (4x4)',
            seats: '5 chỗ ngồi',
            availableColors: [
              'Vàng Luxe',
              'Đỏ Cam',
              'Đen',
              'Trắng',
              'Bạc',
              'Xám Meteor',
            ],
          },
          {
            name: 'Ranger Sport',
            price: 864000000,
            engine: '2.0L Turbo Diesel i4 TDCi',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 6 cấp (6AT)',
            drivetrain: 'Hai cầu bán thời gian (4x4)',
            seats: '5 chỗ ngồi',
            availableColors: ['Trắng', 'Xám Meteor', 'Bạc', 'Đen', 'Đỏ Cam'],
          },
          {
            name: 'Ranger XLS+',
            price: 776000000,
            engine: '2.0L Turbo Diesel i4 TDCi',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 6 cấp (6AT)',
            drivetrain: 'Hai cầu bán thời gian (4x4)',
            seats: '5 chỗ ngồi',
            availableColors: ['Trắng', 'Đen', 'Bạc', 'Xám Meteor', 'Đỏ Cam'],
          },
          {
            name: 'Ranger XLS',
            price: 707000000,
            engine: '2.0L Turbo Diesel i4 TDCi',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Tự động 6 cấp (6AT)',
            drivetrain: 'Cầu sau (4x2)',
            seats: '5 chỗ ngồi',
            availableColors: ['Đen', 'Trắng', 'Bạc', 'Xám Meteor', 'Đỏ Cam'],
          },
          {
            name: 'Ranger XL',
            price: 669000000,
            engine: '2.0L Turbo Diesel',
            power: '170 PS',
            torque: '405 Nm',
            transmission: 'Số sàn 6 cấp',
            drivetrain: 'Hai cầu bán thời gian (4x4)',
            seats: '5 chỗ ngồi',
            availableColors: ['Trắng', 'Đỏ Cam', 'Đen', 'Bạc', 'Xám Meteor'],
          },
        ],
      },
    },
    inventory: [
      createBranchStock(
        'ben-thanh',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Đen', 'Trắng', 'Xám', 'Đỏ'],
        {
          '2026': ['Cam', 'Đen', 'Trắng', 'Xám', 'Đỏ'],
          '2025': ['Vàng Luxe', 'Đen', 'Trắng', 'Xám Meteor', 'Đỏ Cam'],
        },
      ),
      createBranchStock(
        'city-binh-trieu',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Bạc Ánh Kim', 'Đen', 'Trắng Tuyết'],
        {
          '2026': ['Cam', 'Bạc Ánh Kim', 'Đen', 'Trắng Tuyết'],
          '2025': ['Vàng Luxe', 'Bạc', 'Đen', 'Trắng'],
        },
      ),
      createBranchStock(
        'saigon-cao-thang',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 1,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 0,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Trắng', 'Ghi Ánh Thép'],
        {
          '2026': ['Trắng', 'Ghi Ánh Thép'],
          '2025': ['Trắng', 'Xám Meteor', 'Bạc'],
        },
      ),
      createBranchStock(
        'saigon-pho-quang',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Trắng', 'Đen', 'Đỏ'],
        {
          '2026': ['Cam', 'Trắng', 'Đen', 'Đỏ'],
          '2025': ['Vàng Luxe', 'Trắng', 'Đen', 'Đỏ Cam'],
        },
      ),
      createBranchStock(
        'saigon-nam-sg',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 0,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 1,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 0,
          'Ranger Sport': 0,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Bạc', 'Ghi Ánh Thép'],
        {
          '2026': ['Bạc', 'Ghi Ánh Thép'],
          '2025': ['Bạc', 'Xám Meteor'],
        },
      ),
      createBranchStock(
        'western-an-lac',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Xám', 'Đen', 'Trắng Tuyết'],
        {
          '2026': ['Cam', 'Xám', 'Đen', 'Trắng Tuyết'],
          '2025': ['Đỏ Cam', 'Xám Meteor', 'Đen', 'Trắng'],
        },
      ),
      createBranchStock(
        'gia-dinh',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 1,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 0,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Trắng Tuyết', 'Đỏ'],
        {
          '2026': ['Trắng Tuyết', 'Đỏ'],
          '2025': ['Trắng', 'Đỏ Cam'],
        },
      ),
      createBranchStock(
        'phu-my',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 1,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Đen', 'Bạc Ánh Kim'],
        {
          '2026': ['Cam', 'Đen', 'Bạc Ánh Kim'],
          '2025': ['Vàng Luxe', 'Đen', 'Bạc'],
        },
      ),
      createBranchStock(
        'ha-noi-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 2,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 2,
          'Ranger XLS 2.0L 4x2 AT': 3,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 2,
          'Ranger XLS+': 1,
          'Ranger XLS': 2,
          'Ranger XL': 1,
        },
        ['Cam', 'Đen', 'Trắng', 'Đỏ', 'Xám'],
        {
          '2026': ['Cam', 'Đen', 'Trắng', 'Đỏ', 'Xám'],
          '2025': ['Vàng Luxe', 'Đen', 'Trắng', 'Đỏ Cam', 'Xám Meteor'],
        },
      ),
      createBranchStock(
        'thang-long-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 2,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Bạc Ánh Kim', 'Ghi Ánh Thép', 'Cam'],
        {
          '2026': ['Bạc Ánh Kim', 'Ghi Ánh Thép', 'Cam'],
          '2025': ['Bạc', 'Xám Meteor', 'Vàng Luxe'],
        },
      ),
      createBranchStock(
        'da-nang-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Xám', 'Trắng Tuyết', 'Đỏ'],
        {
          '2026': ['Xám', 'Trắng Tuyết', 'Đỏ'],
          '2025': ['Xám Meteor', 'Trắng', 'Bạc'],
        },
      ),
      createBranchStock(
        'hai-phong-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Bạc', 'Đen', 'Trắng'],
        {
          '2026': ['Bạc', 'Đen', 'Trắng'],
          '2025': ['Bạc', 'Đen', 'Trắng'],
        },
      ),
      createBranchStock(
        'can-tho-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 0,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Trắng', 'Cam', 'Bạc'],
        {
          '2026': ['Trắng', 'Cam', 'Bạc'],
          '2025': ['Trắng', 'Vàng Luxe', 'Bạc'],
        },
      ),
      createBranchStock(
        'binh-duong-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 2,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Đen', 'Xám', 'Đỏ', 'Cam'],
        {
          '2026': ['Đen', 'Xám', 'Đỏ', 'Cam'],
          '2025': ['Đen', 'Xám Meteor', 'Đỏ Cam', 'Vàng Luxe'],
        },
      ),
      createBranchStock(
        'vung-tau-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Trắng', 'Đen'],
        {
          '2026': ['Cam', 'Trắng', 'Đen'],
          '2025': ['Vàng Luxe', 'Trắng', 'Đen'],
        },
      ),
      createBranchStock(
        'tan-thuan-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 2,
          'Ranger XL': 1,
        },
        ['Cam', 'Xám', 'Đen', 'Đỏ'],
        {
          '2026': ['Cam', 'Xám', 'Đen', 'Đỏ'],
          '2025': ['Vàng Luxe', 'Xám Meteor', 'Đen', 'Đỏ Cam'],
        },
      ),
      createBranchStock(
        'suoi-tien-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 2,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 2,
          'Ranger XL': 1,
        },
        ['Trắng', 'Bạc Ánh Kim', 'Cam'],
        {
          '2026': ['Trắng', 'Bạc Ánh Kim', 'Cam'],
          '2025': ['Trắng', 'Bạc', 'Vàng Luxe'],
        },
      ),
      createBranchStock(
        'di-an-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Đen', 'Xám', 'Đỏ'],
        {
          '2026': ['Đen', 'Xám', 'Đỏ'],
          '2025': ['Đen', 'Xám Meteor', 'Đỏ Cam'],
        },
      ),
      createBranchStock(
        'city-ba-ria-2s',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 0,
          'Ranger XLS 2.0L 4x4 AT': 0,
          'Ranger XLS 2.0L 4x2 AT': 0,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 0,
          'Ranger Sport': 0,
          'Ranger XLS+': 0,
          'Ranger XLS': 0,
          'Ranger XL': 0,
        },
        [],
        {
          '2026': [],
          '2025': [],
        },
      ),
      createBranchStock(
        'thanh-xuan-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 2,
          'Ranger XL': 1,
        },
        ['Cam', 'Đen', 'Trắng', 'Xám'],
        {
          '2026': ['Cam', 'Đen', 'Trắng', 'Xám'],
          '2025': ['Vàng Luxe', 'Đen', 'Trắng', 'Xám Meteor'],
        },
      ),
      createBranchStock(
        'long-bien-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Trắng', 'Đỏ', 'Xám'],
        {
          '2026': ['Trắng', 'Đỏ', 'Xám'],
          '2025': ['Trắng', 'Đỏ Cam', 'Xám Meteor'],
        },
      ),
      createBranchStock(
        'thu-do-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Đen', 'Bạc', 'Trắng'],
        {
          '2026': ['Đen', 'Bạc', 'Trắng'],
          '2025': ['Đen', 'Bạc', 'Trắng'],
        },
      ),
      createBranchStock(
        'ha-thanh-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Xám', 'Bạc Ánh Kim'],
        {
          '2026': ['Cam', 'Xám', 'Bạc Ánh Kim'],
          '2025': ['Vàng Luxe', 'Xám Meteor', 'Bạc'],
        },
      ),
      createBranchStock(
        'an-do-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Đen', 'Trắng Tuyết', 'Đỏ'],
        {
          '2026': ['Đen', 'Trắng Tuyết', 'Đỏ'],
          '2025': ['Đen', 'Trắng', 'Đỏ Cam'],
        },
      ),
      createBranchStock(
        'my-dinh-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 2,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 2,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Xám', 'Đen'],
        {
          '2026': ['Cam', 'Xám', 'Đen'],
          '2025': ['Vàng Luxe', 'Xám Meteor', 'Đen'],
        },
      ),
      createBranchStock(
        'txf-ha-dong-1s',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 1,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Trắng', 'Đen'],
        {
          '2026': ['Trắng', 'Đen'],
          '2025': ['Trắng', 'Đen'],
        },
      ),
      createBranchStock(
        'htf-my-dinh-1s',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Trắng', 'Bạc Ánh Kim'],
        {
          '2026': ['Cam', 'Trắng', 'Bạc Ánh Kim'],
          '2025': ['Vàng Luxe', 'Trắng', 'Bạc'],
        },
      ),
      createBranchStock(
        'thang-long-tay-mo-2s',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 0,
          'Ranger XLS 2.0L 4x4 AT': 0,
          'Ranger XLS 2.0L 4x2 AT': 0,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 0,
          'Ranger Sport': 0,
          'Ranger XLS+': 0,
          'Ranger XLS': 0,
          'Ranger XL': 0,
        },
        [],
        {
          '2026': [],
          '2025': [],
        },
      ),
      createBranchStock(
        'hai-duong-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 0,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 1,
          'Ranger Stormtrak': 0,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 0,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Trắng', 'Bạc'],
        {
          '2026': ['Trắng', 'Bạc'],
          '2025': ['Trắng', 'Bạc'],
        },
      ),
      createBranchStock(
        'dana-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 0,
        },
        ['Cam', 'Trắng', 'Đen'],
        {
          '2026': ['Cam', 'Trắng', 'Đen'],
          '2025': ['Vàng Luxe', 'Trắng', 'Đen'],
        },
      ),
      createBranchStock(
        'hue-ford',
        {
          'Ranger Wildtrak 3.0L 4X4 AT': 1,
          'Ranger Wildtrak 2.0L 4X4 AT': 1,
          'Ranger XLS 2.0L 4x4 AT': 1,
          'Ranger XLS 2.0L 4x2 AT': 2,
          'Ranger Stormtrak': 1,
          'Ranger Wildtrak': 1,
          'Ranger Sport': 1,
          'Ranger XLS+': 1,
          'Ranger XLS': 1,
          'Ranger XL': 1,
        },
        ['Cam', 'Trắng', 'Xám', 'Đen'],
        {
          '2026': ['Cam', 'Trắng', 'Xám', 'Đen'],
          '2025': ['Vàng Luxe', 'Trắng', 'Xám Meteor', 'Đen'],
        },
      ),
    ],
  },
  {
    id: 'raptor',
    name: 'Ford Ranger Raptor Mới',
    category: 'Xe Thương mại',
    price: 1448000000,
    defaultYear: '2026',
    availableYears: ['2025', '2026'],
    yearPrices: {
      '2025': 1299000000,
      '2026': 1448000000,
    },
    promo: 'Tặng gói bảo dưỡng định kỳ 3 năm tại đại lý Ford toàn quốc.',
    image: '/images/cars/raptor-grey.png',
    shortDesc:
      'Bán tải hiệu năng cao Ford Performance với động cơ Xăng 3.0L V6 Twin-Turbo EcoBoost, giảm xóc FOX 2.5" và 7 chế độ lái.',
    description:
      'Ford Ranger Raptor mang DNA đua địa hình Baja với động cơ Xăng 3.0L V6 Twin-Turbo EcoBoost, giảm xóc FOX 2.5", khung gầm gia cường và 7 chế độ lái chuyên dụng.',
    colors: [
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        priceDelta: 0,
        image: '/images/cars/raptor-white.png',
      },
      {
        name: 'Xám',
        hex: '#6B7280',
        priceDelta: 8000000,
        image: '/images/cars/raptor-grey.png',
      },
      {
        name: 'Cam',
        hex: '#EA580C',
        priceDelta: 8000000,
        image: '/images/cars/raptor-orange.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        priceDelta: 0,
        image: '/images/cars/raptor-black.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1D4ED8',
        priceDelta: 0,
        image: '/images/cars/raptor-blue.png',
      },
    ],
    trims: [
      {
        name: 'Raptor 3.0L V6 4X4 AT',
        price: 1448000000,
        engine: 'Xăng 3.0L V6 Twin-Turbo EcoBoost',
        power: '397 PS (292 kW @ 5.650 vòng/phút)',
        torque: '583 Nm',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu toàn thời gian (4x4) • Giảm xóc FOX 2.5" • 7 chế độ lái',
        seats: '5 chỗ ngồi',
      },
    ],
    specs: {
      engine: 'Xăng 3.0L V6 Twin-Turbo EcoBoost',
      power: '397 PS (292 kW @ 5.650 vòng/phút)',
      torque: '583 Nm',
      transmission: 'Tự động 10 cấp (10AT)',
      drivetrain: 'Hai cầu toàn thời gian (4x4) • Giảm xóc FOX 2.5" • 7 chế độ lái',
      seats: '5 chỗ ngồi',
    },
    yearVariants: {
      '2026': {
        name: 'Ford Ranger Raptor Mới',
        price: 1448000000,
        defaultColor: 'Xám',
        image: '/images/cars/raptor-grey.png',
        shortDesc:
          'Siêu bán tải 2026 trang bị động cơ Xăng 3.0L V6 Twin-Turbo EcoBoost, giảm xóc FOX 2.5" và 7 chế độ lái.',
        description:
          'Ford Ranger Raptor mang DNA đua địa hình Baja với động cơ Xăng 3.0L V6 Twin-Turbo EcoBoost, giảm xóc FOX 2.5", khung gầm gia cường và 7 chế độ lái chuyên dụng.',
        colors: [
          {
            name: 'Trắng',
            hex: '#FFFFFF',
            priceDelta: 0,
            image: '/images/cars/raptor-white.png',
          },
          {
            name: 'Xám',
            hex: '#6B7280',
            priceDelta: 8000000,
            image: '/images/cars/raptor-grey.png',
          },
          {
            name: 'Cam',
            hex: '#EA580C',
            priceDelta: 8000000,
            image: '/images/cars/raptor-orange.png',
          },
          {
            name: 'Đen',
            hex: '#141414',
            priceDelta: 0,
            image: '/images/cars/raptor-black.png',
          },
          {
            name: 'Xanh Dương',
            hex: '#1D4ED8',
            priceDelta: 0,
            image: '/images/cars/raptor-blue.png',
          },
        ],
        specs: {
          engine: 'Xăng 3.0L V6 Twin-Turbo EcoBoost',
          power: '397 PS (292 kW @ 5.650 vòng/phút)',
          torque: '583 Nm',
          transmission: 'Tự động 10 cấp (10AT)',
          drivetrain: 'Hai cầu toàn thời gian (4x4) • Giảm xóc FOX 2.5" • 7 chế độ lái',
          seats: '5 chỗ ngồi',
        },
        trims: [
          {
            name: 'Raptor 3.0L V6 4X4 AT',
            price: 1448000000,
            engine: 'Xăng 3.0L V6 Twin-Turbo EcoBoost',
            power: '397 PS (292 kW @ 5.650 vòng/phút)',
            torque: '583 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu toàn thời gian (4x4) • Giảm xóc FOX 2.5" • 7 chế độ lái',
            seats: '5 chỗ ngồi',
          },
        ],
      },
      '2025': {
        name: 'Ford Ranger Raptor',
        price: 1299000000,
        defaultColor: 'Cam Code',
        image: '/images/cars/raptor-orange.png',
        shortDesc:
          'Bán tải hiệu năng cao 2025 trang bị động cơ Diesel 2.0L Bi-Turbo 10AT 4x4 và giảm xóc FOX 2.5".',
        description:
          'Ford Ranger Raptor 2025 sở hữu động cơ Diesel 2.0L Bi-Turbo mạnh mẽ kết hợp hộp số tự động 10 cấp, khung gầm gia cường và 7 chế độ lái địa hình chuyên dụng.',
        colors: [
          {
            name: 'Xám Conquer',
            hex: '#64748B',
            priceDelta: 8000000,
            image: '/images/cars/raptor-grey.png',
          },
          {
            name: 'Cam Code',
            hex: '#EA580C',
            priceDelta: 8000000,
            image: '/images/cars/raptor-orange.png',
          },
          {
            name: 'Đen',
            hex: '#141414',
            priceDelta: 0,
            image: '/images/cars/raptor-black.png',
          },
          {
            name: 'Trắng',
            hex: '#FFFFFF',
            priceDelta: 0,
            image: '/images/cars/raptor-white.png',
          },
          {
            name: 'Xanh Dương',
            hex: '#1D4ED8',
            priceDelta: 0,
            image: '/images/cars/raptor-blue.png',
          },
        ],
        specs: {
          engine: 'Diesel 2.0L Bi-Turbo',
          power: '210 PS',
          torque: '500 Nm',
          transmission: 'Tự động 10 cấp (10AT)',
          drivetrain: 'Hai cầu toàn thời gian (4x4)',
          seats: '5 chỗ ngồi',
        },
        trims: [
          {
            name: 'Raptor 2.0L Bi-Turbo 4X4 AT',
            price: 1299000000,
            engine: 'Diesel 2.0L Bi-Turbo',
            power: '210 PS',
            torque: '500 Nm',
            transmission: 'Tự động 10 cấp (10AT)',
            drivetrain: 'Hai cầu toàn thời gian (4x4)',
            seats: '5 chỗ ngồi',
          },
        ],
      },
    },
    inventory: [
      createBranchStock(
        'ben-thanh',
        { 'Raptor 3.0L V6 4X4 AT': 2, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'city-binh-trieu',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Đen', 'Cam'],
        {
          '2026': ['Đen', 'Cam'],
          '2025': ['Đen', 'Cam Code'],
        },
      ),
      createBranchStock(
        'saigon-cao-thang',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Trắng'],
        {
          '2026': ['Trắng'],
          '2025': ['Trắng'],
        },
      ),
      createBranchStock(
        'saigon-pho-quang',
        { 'Raptor 3.0L V6 4X4 AT': 2, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Trắng'],
        {
          '2026': ['Xám', 'Cam', 'Trắng'],
          '2025': ['Xám Conquer', 'Cam Code', 'Trắng'],
        },
      ),
      createBranchStock(
        'saigon-nam-sg',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 0 },
        [],
        {
          '2026': [],
          '2025': [],
        },
      ),
      createBranchStock(
        'western-an-lac',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Xanh Dương'],
        {
          '2026': ['Xám', 'Xanh Dương'],
          '2025': ['Xám Conquer', 'Xanh Dương'],
        },
      ),
      createBranchStock(
        'gia-dinh',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Cam'],
        {
          '2026': ['Cam'],
          '2025': ['Cam Code'],
        },
      ),
      createBranchStock(
        'phu-my',
        { 'Raptor 3.0L V6 4X4 AT': 2, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'ha-noi-ford',
        { 'Raptor 3.0L V6 4X4 AT': 2, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'thang-long-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Xanh Dương'],
        {
          '2026': ['Xám', 'Xanh Dương'],
          '2025': ['Xám Conquer', 'Xanh Dương'],
        },
      ),
      createBranchStock(
        'da-nang-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Cam', 'Xám'],
        {
          '2026': ['Cam', 'Xám'],
          '2025': ['Cam Code', 'Xám Conquer'],
        },
      ),
      createBranchStock(
        'hai-phong-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Đen', 'Trắng'],
        {
          '2026': ['Đen', 'Trắng'],
          '2025': ['Đen', 'Trắng'],
        },
      ),
      createBranchStock(
        'can-tho-ford',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Trắng'],
        {
          '2026': ['Trắng'],
          '2025': ['Trắng'],
        },
      ),
      createBranchStock(
        'binh-duong-ford',
        { 'Raptor 3.0L V6 4X4 AT': 2, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'vung-tau-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Trắng'],
        {
          '2026': ['Xám', 'Trắng'],
          '2025': ['Xám Conquer', 'Trắng'],
        },
      ),
      createBranchStock(
        'tan-thuan-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'suoi-tien-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Cam', 'Xanh Dương'],
        {
          '2026': ['Cam', 'Xanh Dương'],
          '2025': ['Cam Code', 'Xanh Dương'],
        },
      ),
      createBranchStock(
        'di-an-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Đen'],
        {
          '2026': ['Xám', 'Đen'],
          '2025': ['Xám Conquer', 'Đen'],
        },
      ),
      createBranchStock(
        'city-ba-ria-2s',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 0 },
        [],
        {
          '2026': [],
          '2025': [],
        },
      ),
      createBranchStock(
        'thanh-xuan-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'long-bien-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xanh Dương', 'Đen'],
        {
          '2026': ['Xanh Dương', 'Đen'],
          '2025': ['Xanh Dương', 'Đen'],
        },
      ),
      createBranchStock(
        'thu-do-ford',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Đen', 'Trắng'],
        {
          '2026': ['Đen', 'Trắng'],
          '2025': ['Đen', 'Trắng'],
        },
      ),
      createBranchStock(
        'ha-thanh-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Cam'],
        {
          '2026': ['Xám', 'Cam'],
          '2025': ['Xám Conquer', 'Cam Code'],
        },
      ),
      createBranchStock(
        'an-do-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Cam', 'Trắng'],
        {
          '2026': ['Cam', 'Trắng'],
          '2025': ['Cam Code', 'Trắng'],
        },
      ),
      createBranchStock(
        'my-dinh-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 2 },
        ['Xám', 'Cam', 'Đen'],
        {
          '2026': ['Xám', 'Cam', 'Đen'],
          '2025': ['Xám Conquer', 'Cam Code', 'Đen'],
        },
      ),
      createBranchStock(
        'txf-ha-dong-1s',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Đen', 'Trắng'],
        {
          '2026': ['Đen', 'Trắng'],
          '2025': ['Đen', 'Trắng'],
        },
      ),
      createBranchStock(
        'htf-my-dinh-1s',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Xanh Dương'],
        {
          '2026': ['Xám', 'Xanh Dương'],
          '2025': ['Xám Conquer', 'Xanh Dương'],
        },
      ),
      createBranchStock(
        'thang-long-tay-mo-2s',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 0 },
        [],
        {
          '2026': [],
          '2025': [],
        },
      ),
      createBranchStock(
        'hai-duong-ford',
        { 'Raptor 3.0L V6 4X4 AT': 0, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Trắng'],
        {
          '2026': ['Trắng'],
          '2025': ['Trắng'],
        },
      ),
      createBranchStock(
        'dana-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Cam'],
        {
          '2026': ['Xám', 'Cam'],
          '2025': ['Xám Conquer', 'Cam Code'],
        },
      ),
      createBranchStock(
        'hue-ford',
        { 'Raptor 3.0L V6 4X4 AT': 1, 'Raptor 2.0L Bi-Turbo 4X4 AT': 1 },
        ['Xám', 'Xanh Dương'],
        {
          '2026': ['Xám', 'Xanh Dương'],
          '2025': ['Xám Conquer', 'Xanh Dương'],
        },
      ),
    ],
  },
  {
    id: 'mach-e',
    name: 'Ford Mustang Mach-E',
    category: 'Xe Điện',
    price: 1699000000,
    promo: 'Tặng kèm bộ sạc tường chính hãng Ford Wallbox và gói sạc miễn phí 2 năm.',
    image: '/images/cars/mach-e-red.png',
    shortDesc:
      'SUV thuần điện hiệu năng cao mang biểu tượng Mustang với khả năng tăng tốc ấn tượng.',
    description:
      'Ford Mustang Mach-E mở ra kỷ nguyên xe điện thể thao tại Việt Nam với tầm vận hành lên tới 550 km/lần sạc, màn hình trung tâm 15.5 inch và hệ dẫn động AWD.',
    colors: [
      {
        name: 'Đỏ Thể Thao',
        hex: '#7A0019',
        image: '/images/cars/mach-e-red.png',
      },
      {
        name: 'Đen Huyền Bí',
        hex: '#141414',
        image: '/images/cars/mach-e-black.png',
      },
      {
        name: 'Trắng Ánh Sao',
        hex: '#F3F4F6',
        image: '/images/cars/mach-e-white.png',
      },
      {
        name: 'Xanh Mãnh Liệt',
        hex: '#4E6B38',
        image: '/images/cars/mach-e-green.png',
      },
    ],
    trims: [
      {
        name: 'Mustang Mach-E Premium AWD',
        price: 1699000000,
        engine: 'Động cơ điện kép (Dual Motor AWD)',
        power: '395 PS',
        torque: '627 Nm',
        range: null,
        motor_power_kw: null,
        battery_capacity_kwh: null,
        range_km: null,
        charging_time: null,
        transmission: 'Truyền động điện 1 cấp',
        drivetrain: 'Hai cầu toàn thời gian (AWD)',
        seats: null,
      },
    ],
    specs: {
      engine: 'Động cơ điện kép (Dual Motor AWD)',
      power: '395 PS',
      torque: '627 Nm',
      range: null,
      motor_power_kw: null,
      battery_capacity_kwh: null,
      range_km: null,
      charging_time: null,
      transmission: 'Truyền động điện 1 cấp',
      drivetrain: 'Hai cầu toàn thời gian (AWD)',
      seats: null,
    },
    inventory: [
      createBranchStock(
        'ben-thanh',
        { 'Mustang Mach-E Premium AWD': 3 },
        ['Đỏ Thể Thao', 'Đen Huyền Bí'],
      ),
      createBranchStock(
        'city-binh-trieu',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Trắng Ánh Sao'],
      ),
      createBranchStock(
        'saigon-cao-thang',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Đỏ Thể Thao', 'Xanh Mãnh Liệt'],
      ),
      createBranchStock(
        'saigon-pho-quang',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Xanh Mãnh Liệt'],
      ),
      createBranchStock('saigon-nam-sg', { 'Mustang Mach-E Premium AWD': 0 }, []),
      createBranchStock('western-an-lac', { 'Mustang Mach-E Premium AWD': 0 }, []),
      createBranchStock(
        'gia-dinh',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đỏ Thể Thao'],
      ),
      createBranchStock(
        'phu-my',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Trắng Ánh Sao', 'Xanh Mãnh Liệt'],
      ),
      createBranchStock(
        'ha-noi-ford',
        { 'Mustang Mach-E Premium AWD': 4 },
        ['Đỏ Thể Thao', 'Đen Huyền Bí', 'Trắng Ánh Sao'],
      ),
      createBranchStock(
        'thang-long-ford',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Xanh Mãnh Liệt', 'Trắng Ánh Sao'],
      ),
      createBranchStock(
        'da-nang-ford',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Đỏ Thể Thao', 'Xanh Mãnh Liệt'],
      ),
      createBranchStock(
        'hai-phong-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đen Huyền Bí'],
      ),
      createBranchStock('can-tho-ford', { 'Mustang Mach-E Premium AWD': 0 }, []),
      createBranchStock(
        'binh-duong-ford',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Đỏ Thể Thao', 'Trắng Ánh Sao'],
      ),
      createBranchStock(
        'vung-tau-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đỏ Thể Thao'],
      ),
      createBranchStock(
        'tan-thuan-ford',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Đỏ Thể Thao', 'Trắng Ánh Sao'],
      ),
      createBranchStock(
        'suoi-tien-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đen Huyền Bí'],
      ),
      createBranchStock(
        'di-an-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Xanh Mãnh Liệt'],
      ),
      createBranchStock(
        'city-ba-ria-2s',
        { 'Mustang Mach-E Premium AWD': 0 },
        [],
      ),
      createBranchStock(
        'thanh-xuan-ford',
        { 'Mustang Mach-E Premium AWD': 2 },
        ['Đỏ Thể Thao', 'Đen Huyền Bí'],
      ),
      createBranchStock(
        'long-bien-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Trắng Ánh Sao'],
      ),
      createBranchStock('thu-do-ford', { 'Mustang Mach-E Premium AWD': 0 }, []),
      createBranchStock(
        'ha-thanh-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Xanh Mãnh Liệt'],
      ),
      createBranchStock(
        'an-do-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đen Huyền Bí'],
      ),
      createBranchStock(
        'my-dinh-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Trắng Ánh Sao', 'Đỏ Thể Thao'],
      ),
      createBranchStock(
        'txf-ha-dong-1s',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đen Huyền Bí'],
      ),
      createBranchStock(
        'htf-my-dinh-1s',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Xanh Mãnh Liệt'],
      ),
      createBranchStock(
        'thang-long-tay-mo-2s',
        { 'Mustang Mach-E Premium AWD': 0 },
        [],
      ),
      createBranchStock('hai-duong-ford', { 'Mustang Mach-E Premium AWD': 0 }, []),
      createBranchStock(
        'dana-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Đỏ Thể Thao'],
      ),
      createBranchStock(
        'hue-ford',
        { 'Mustang Mach-E Premium AWD': 1 },
        ['Trắng Ánh Sao'],
      ),
    ],
  },
];

export const fordCars = RAW_FORD_CARS.map((car) => ({
  ...car,
  inventory: car.inventory
    .map((item) => {
      const branchMeta = BRANCH_BY_ID[item.branchId];
      const branchType =
        item.branch_type || item.type || branchMeta?.branch_type || '3S';
      return {
        ...item,
        branch_type: branchType,
        type: branchType,
        city: item.city || branchMeta?.city || 'TP. Hồ Chí Minh',
      };
    })
    .sort(
      (a, b) =>
        (BRANCH_ORDER[a.branchId] ?? 999) - (BRANCH_ORDER[b.branchId] ?? 999),
    ),
}));

export function formatBranchAddress(address = '') {
  const raw = String(address || '').trim();
  const splitToken = ' (Địa chỉ cũ:';
  const idx = raw.indexOf(splitToken);
  if (idx === -1) {
    return { primaryAddress: raw, legacyAddress: '' };
  }
  return {
    primaryAddress: raw.slice(0, idx).trim(),
    legacyAddress: raw.slice(idx + 1).trim(),
  };
}

function normalizeVietnameseSearch(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

export function matchesBranchSearch(branch, rawQuery = '') {
  const query = normalizeVietnameseSearch(rawQuery);
  if (!query) return true;
  const branchName = branch?.name || branch?.branch || '';
  const { primaryAddress, legacyAddress } = formatBranchAddress(
    branch?.address || '',
  );
  const haystack = normalizeVietnameseSearch(
    `${branchName} ${primaryAddress} ${legacyAddress} ${branch?.city || ''}`,
  );
  return haystack.includes(query);
}

export function getGoogleMapsUrl(branch) {
  const label = branch?.name || branch?.branch || '';
  const { primaryAddress } = formatBranchAddress(branch?.address || '');
  const query = encodeURIComponent(
    [label, primaryAddress].filter(Boolean).join(', '),
  );
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getBranchStockForTrim(branchItem, trimName) {
  if (!branchItem) return 0;
  if (trimName && branchItem.stockByTrim && typeof branchItem.stockByTrim[trimName] === 'number') {
    return branchItem.stockByTrim[trimName];
  }
  return branchItem.stock;
}

export function getColorOption(car, colorName, year = '') {
  const palette =
    (year && car?.yearVariants?.[year]?.colors) || car?.colors || [];
  if (!palette.length) {
    return {
      name: colorName || '',
      hex: COLOR_SWATCHES[colorName] || '#94a3b8',
      image: car?.image || '',
    };
  }
  const found = palette.find((c) => c.name === colorName);
  return found || palette[0];
}

export function getCarPriceForYear(car, year) {
  if (year && car.yearVariants?.[year]?.price) {
    return car.yearVariants[year].price;
  }
  if (year && car.yearPrices?.[year]) {
    return car.yearPrices[year];
  }
  return car.price;
}

export function getCarYearVariant(car, year) {
  if (!car) return null;
  const resolvedYear = year || car.defaultYear || '';
  const variant =
    resolvedYear && car.yearVariants?.[resolvedYear]
      ? car.yearVariants[resolvedYear]
      : null;

  const colors = variant?.colors || car.colors || [];
  const cardColors = variant?.cardColors || colors;

  return {
    year: resolvedYear,
    name: variant?.name || car.name,
    price: variant?.price ?? getCarPriceForYear(car, resolvedYear),
    defaultColor: variant?.defaultColor || cardColors[0]?.name || '',
    colors,
    cardColors,
    image: variant?.image || car.image,
    shortDesc: variant?.shortDesc || car.shortDesc,
    description: variant?.description || car.description,
    specs: variant?.specs || car.specs,
    trims: variant?.trims || car.trims || [],
  };
}

export function getTotalStock(
  car,
  branchId = 'all',
  trimName = '',
  city = 'Tất cả tỉnh/thành',
  year = '',
) {
  const yearTrimKeys =
    !trimName && year && car.yearVariants?.[year]?.trims
      ? car.yearVariants[year].trims.flatMap((trim) =>
          trim.engineOptions?.length
            ? trim.engineOptions.map((opt) => opt.stockKey || trim.name)
            : [trim.name],
        )
      : null;

  const computeEntryStock = (branchEntry) => {
    if (!branchEntry) return 0;
    if (yearTrimKeys) {
      return yearTrimKeys.reduce(
        (sum, key) => sum + getBranchStockForTrim(branchEntry, key),
        0,
      );
    }
    return getBranchStockForTrim(branchEntry, trimName);
  };

  if (branchId && branchId !== 'all') {
    const branchEntry = car.inventory.find((item) => item.branchId === branchId);
    return computeEntryStock(branchEntry);
  }
  const items =
    city && city !== 'Tất cả tỉnh/thành'
      ? car.inventory.filter((item) => item.city === city)
      : car.inventory;
  return items.reduce((sum, item) => sum + computeEntryStock(item), 0);
}

export function formatVND(price) {
  return `${new Intl.NumberFormat('en-US').format(price)} VNĐ`;
}

function escapeXml(value) {
  return String(value).replace(/[<>&'"]/g, (ch) => {
    switch (ch) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return ch;
    }
  });
}

export function getCarFallbackSvg(name, category) {
  const safeName = escapeXml(name || 'Ford Vietnam');
  const safeCategory = escapeXml(category || 'Ford');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#ffffff"/>
    <path d="M160 320 L220 235 Q250 205 310 205 L495 205 Q545 205 585 245 L645 265 Q665 275 665 305 L665 330 L615 330 A45 45 0 0 1 525 330 L285 330 A45 45 0 0 1 195 330 L160 330 Z" fill="#e2e8f0" stroke="#00095B" stroke-width="4"/>
    <circle cx="240" cy="330" r="36" fill="#00095B" stroke="#ffffff" stroke-width="5"/>
    <circle cx="570" cy="330" r="36" fill="#00095B" stroke="#ffffff" stroke-width="5"/>
    <text x="50%" y="95" text-anchor="middle" fill="#0068D7" font-family="system-ui, sans-serif" font-size="22" font-weight="700">${safeCategory}</text>
    <text x="50%" y="138" text-anchor="middle" fill="#00095B" font-family="system-ui, sans-serif" font-size="30" font-weight="800">${safeName}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function handleCarImageError(event, label, subLabel) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = getCarFallbackSvg(label, subLabel);
}
