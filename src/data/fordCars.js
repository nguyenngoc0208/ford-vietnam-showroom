export const COLOR_SWATCHES = {
  'Trắng Tuyết': '#f8fafc',
  'Đen Tuyền': '#111827',
  'Xám Meteor': '#4b5563',
  'Xám Xi Măng': '#6b7280',
  'Bạc Ánh Kim': '#cbd5e1',
  'Cam Sedona': '#c2410c',
  'Vàng Luxe': '#d97706',
  'Xanh Xám': '#536d86',
  'Xanh Dương': '#1d4ed8',
  'Đỏ Mận': '#881337',
  'Nâu Ánh Kim': '#78350f',
};

export const DEALER_BRANCHES = [
  {
    id: 'all',
    name: 'Tất cả chi nhánh',
    address: 'Hệ thống đại lý Ford ủy quyền toàn quốc',
    hotline: '1800 588 888',
  },
  {
    id: 'ben-thanh',
    name: 'Ford Bến Thành',
    address: '831 Trường Chinh, P. Tây Thạnh & Q.1, TP.HCM',
    hotline: '028 3815 8888',
  },
  {
    id: 'thu-duc',
    name: 'Ford Thủ Đức',
    address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức',
    hotline: '028 3726 9999',
  },
  {
    id: 'thang-long',
    name: 'Ford Thăng Long',
    address: '105 Láng Hạ, Q. Đống Đa, TP. Hà Nội',
    hotline: '024 3562 1999',
  },
  {
    id: 'da-nang',
    name: 'Ford Đà Nẵng',
    address: '286 Điện Biên Phủ, Q. Thanh Khê, TP. Đà Nẵng',
    hotline: '0236 364 6666',
  },
];

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
    studioImage: '/images/cars/territory.png',
    lifestyleImage: '/images/cars/banner-suv.png',
  },
  {
    id: 'everest',
    carId: 'everest',
    title: 'Ford Everest',
    subtitle: 'SUV 7 chỗ khung gầm rời mạnh mẽ, làm chủ mọi cung đường cùng gia đình.',
    slogan: 'CHINH PHỤC MỌI ĐỊA HÌNH',
    studioImage: '/images/cars/everest.png',
    lifestyleImage: '/images/cars/banner-suv.png',
  },
  {
    id: 'ranger',
    carId: 'ranger',
    title: 'Ford Ranger 2026',
    subtitle: 'Bán tải biểu tượng thế hệ mới với các phiên bản XLS, Sport, Wildtrak, Stormtrak.',
    slogan: 'SỐNG CHẤT NHƯ RANGER',
    studioImage: '/images/cars/ranger.png',
    lifestyleImage: '/images/cars/banner-commercial.png',
  },
];

export const fordCars = [
  {
    id: 'everest',
    name: 'Ford Everest',
    category: 'Xe SUV',
    price: 1129000000,
    promo: 'Ưu đãi gói bảo dưỡng & phụ kiện chính hãng trị giá 30 triệu đồng.',
    image: '/images/cars/everest.png',
    shortDesc:
      'SUV 7 chỗ khung gầm rời, động cơ Diesel 2.0L Single-Turbo / Bi-Turbo, hộp số 6AT / 10AT.',
    description:
      'Ford Everest thế hệ mới sở hữu khung gầm rời chắc chắn, lưới tản nhiệt chữ C đặc trưng, 6 chế độ kiểm soát địa hình và không gian 7 chỗ sang trọng.',
    colors: ['Xám Meteor', 'Trắng Tuyết', 'Đen Tuyền', 'Nâu Ánh Kim', 'Xanh Dương'],
    trims: [
      {
        name: 'Ambient 4x2 AT',
        price: 1129000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Cầu sau (4x2)',
      },
      {
        name: 'Sport 4x2 AT',
        price: 1178000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Cầu sau (4x2)',
      },
      {
        name: 'Titanium+ 4x4 AT',
        price: 1468000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu chủ động (4WD)',
      },
      {
        name: 'Platinum 4x4 AT',
        price: 1545000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu chủ động (4WD)',
      },
    ],
    specs: {
      engine: '2.0L Single-Turbo / Bi-Turbo Diesel',
      power: '170 - 210 mã lực',
      transmission: 'Tự động 6 cấp / 10 cấp',
      drivetrain: '4x2 / 4WD toàn thời gian',
      seats: '7 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Ford Bến Thành',
        address: '831 Trường Chinh & Q.1, TP.HCM',
        stock: 4,
        colors: ['Xám Meteor', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'thu-duc',
        branch: 'Ford Thủ Đức',
        address: '218 Quốc Lộ 13, TP. Thủ Đức',
        stock: 2,
        colors: ['Trắng Tuyết', 'Nâu Ánh Kim'],
      },
      {
        branchId: 'thang-long',
        branch: 'Ford Thăng Long',
        address: '105 Láng Hạ, Q. Đống Đa, Hà Nội',
        stock: 5,
        colors: ['Đen Tuyền', 'Trắng Tuyết', 'Xanh Dương'],
      },
      {
        branchId: 'da-nang',
        branch: 'Ford Đà Nẵng',
        address: '286 Điện Biên Phủ, Thanh Khê, Đà Nẵng',
        stock: 1,
        colors: ['Xám Meteor'],
      },
    ],
  },
  {
    id: 'territory',
    name: 'Ford Territory',
    category: 'Xe SUV',
    price: 739000000,
    promo: 'Hỗ trợ 100% lệ phí trước bạ và tặng 1 năm bảo hiểm vật chất.',
    image: '/images/cars/territory.png',
    shortDesc:
      'SUV 5 chỗ đô thị, động cơ xăng 1.5L EcoBoost, hộp số tự động 7 cấp ly hợp kép.',
    description:
      'Ford Territory mang thiết kế hiện đại, màn hình kép 12.3 inch, cửa sổ trời Panorama và công nghệ an toàn thông minh Ford Co-Pilot360.',
    colors: ['Xanh Xám', 'Trắng Tuyết', 'Đen Tuyền', 'Bạc Ánh Kim'],
    trims: [
      {
        name: 'Trend 1.5L AT',
        price: 739000000,
        engine: '1.5L EcoBoost Turbo Xăng',
        power: '160 mã lực @ 5.400 vòng/phút',
        transmission: 'Tự động 7 cấp ly hợp kép (7DCT)',
        drivetrain: 'Dẫn động cầu trước (FWD)',
      },
      {
        name: 'Titanium 1.5L AT',
        price: 829000000,
        engine: '1.5L EcoBoost Turbo Xăng',
        power: '160 mã lực @ 5.400 vòng/phút',
        transmission: 'Tự động 7 cấp ly hợp kép (7DCT)',
        drivetrain: 'Dẫn động cầu trước (FWD)',
      },
      {
        name: 'Titanium X 1.5L AT',
        price: 889000000,
        engine: '1.5L EcoBoost Turbo Xăng',
        power: '160 mã lực @ 5.400 vòng/phút',
        transmission: 'Tự động 7 cấp ly hợp kép (7DCT)',
        drivetrain: 'Dẫn động cầu trước (FWD)',
      },
    ],
    specs: {
      engine: '1.5L EcoBoost Turbo Xăng',
      power: '160 mã lực @ 5.400 vòng/phút',
      transmission: 'Tự động 7 cấp ly hợp kép (7DCT)',
      drivetrain: 'Dẫn động cầu trước (FWD)',
      seats: '5 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Ford Bến Thành',
        address: '831 Trường Chinh & Q.1, TP.HCM',
        stock: 6,
        colors: ['Xanh Xám', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'thu-duc',
        branch: 'Ford Thủ Đức',
        address: '218 Quốc Lộ 13, TP. Thủ Đức',
        stock: 3,
        colors: ['Trắng Tuyết', 'Bạc Ánh Kim'],
      },
      {
        branchId: 'thang-long',
        branch: 'Ford Thăng Long',
        address: '105 Láng Hạ, Q. Đống Đa, Hà Nội',
        stock: 7,
        colors: ['Xanh Xám', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'da-nang',
        branch: 'Ford Đà Nẵng',
        address: '286 Điện Biên Phủ, Thanh Khê, Đà Nẵng',
        stock: 2,
        colors: ['Xanh Xám', 'Trắng Tuyết'],
      },
    ],
  },
  {
    id: 'transit',
    name: 'Transit Hoàn Toàn Mới',
    category: 'Xe Thương mại',
    price: 907000000,
    promo: 'Ưu đãi lãi suất doanh nghiệp 0% trong 6 tháng đầu cho lô xe vận tải.',
    image: '/images/cars/transit.png',
    shortDesc:
      'Xe thương mại 16-18 chỗ thế hệ mới với khoang hành khách rộng rãi và màn hình kép 12.3 inch.',
    description:
      'Transit Hoàn Toàn Mới là giải pháp vận chuyển hành khách hàng đầu tại Việt Nam với động cơ 2.3L TDCi bền bỉ, cửa trượt điện và chi phí vận hành tối ưu.',
    colors: ['Bạc Ánh Kim', 'Trắng Tuyết', 'Xám Meteor', 'Đen Tuyền'],
    trims: [
      {
        name: 'Trend 16 Chỗ',
        price: 907000000,
        engine: '2.3L Turbo Diesel TDCi',
        power: '171 mã lực @ 3.200 vòng/phút',
        transmission: 'Số sàn 6 cấp (6MT)',
        drivetrain: 'Dẫn động cầu sau (RWD)',
      },
      {
        name: 'Premium 16 Chỗ',
        price: 999000000,
        engine: '2.3L Turbo Diesel TDCi',
        power: '171 mã lực @ 3.200 vòng/phút',
        transmission: 'Số sàn 6 cấp (6MT)',
        drivetrain: 'Dẫn động cầu sau (RWD)',
      },
      {
        name: 'Premium+ 18 Chỗ',
        price: 1091000000,
        engine: '2.3L Turbo Diesel TDCi',
        power: '171 mã lực @ 3.200 vòng/phút',
        transmission: 'Số sàn 6 cấp (6MT)',
        drivetrain: 'Dẫn động cầu sau (RWD)',
      },
    ],
    specs: {
      engine: '2.3L Turbo Diesel TDCi',
      power: '171 mã lực @ 3.200 vòng/phút',
      transmission: 'Số sàn 6 cấp (6MT)',
      drivetrain: 'Dẫn động cầu sau (RWD)',
      seats: '16 - 18 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Ford Bến Thành',
        address: '831 Trường Chinh & Q.1, TP.HCM',
        stock: 4,
        colors: ['Bạc Ánh Kim', 'Trắng Tuyết'],
      },
      {
        branchId: 'thu-duc',
        branch: 'Ford Thủ Đức',
        address: '218 Quốc Lộ 13, TP. Thủ Đức',
        stock: 5,
        colors: ['Trắng Tuyết', 'Xám Meteor'],
      },
      {
        branchId: 'thang-long',
        branch: 'Ford Thăng Long',
        address: '105 Láng Hạ, Q. Đống Đa, Hà Nội',
        stock: 6,
        colors: ['Bạc Ánh Kim', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'da-nang',
        branch: 'Ford Đà Nẵng',
        address: '286 Điện Biên Phủ, Thanh Khê, Đà Nẵng',
        stock: 3,
        colors: ['Bạc Ánh Kim', 'Trắng Tuyết'],
      },
    ],
  },
  {
    id: 'ranger',
    name: 'Ford Ranger',
    category: 'Xe Thương mại',
    price: 726000000,
    defaultYear: '2026',
    availableYears: ['2025', '2026'],
    yearPrices: {
      '2025': 707000000,
      '2026': 726000000,
    },
    promo: 'Hỗ trợ 50% lệ phí trước bạ và tặng nắp thùng cuộn chính hãng.',
    image: '/images/cars/ranger.png',
    shortDesc:
      'Xe bán tải đa dụng với các phiên bản XLS, Sport, Wildtrak, Stormtrak mạnh mẽ.',
    description:
      'Ford Ranger thế hệ mới là mẫu bán tải hàng đầu Việt Nam với màn hình dọc 12 inch SYNC 4A, cụm đèn LED Matrix và khả năng lội nước 800mm.',
    colors: ['Cam Sedona', 'Vàng Luxe', 'Trắng Tuyết', 'Đen Tuyền', 'Xám Meteor'],
    trims: [
      {
        name: 'XLS 4x2 AT',
        price: 726000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Cầu sau (4x2)',
      },
      {
        name: 'Sport 4x4 AT',
        price: 882000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
      },
      {
        name: 'Wildtrak 4x4 AT',
        price: 998000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
      },
      {
        name: 'Stormtrak 4x4 AT',
        price: 1059000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
      },
    ],
    specs: {
      engine: '2.0L Single-Turbo / Bi-Turbo Diesel',
      power: '170 - 210 mã lực',
      transmission: 'Tự động 6 cấp / 10 cấp',
      drivetrain: '4x2 / 4x4 bán thời gian',
      seats: '5 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Ford Bến Thành',
        address: '831 Trường Chinh & Q.1, TP.HCM',
        stock: 5,
        colors: ['Cam Sedona', 'Vàng Luxe', 'Trắng Tuyết'],
      },
      {
        branchId: 'thu-duc',
        branch: 'Ford Thủ Đức',
        address: '218 Quốc Lộ 13, TP. Thủ Đức',
        stock: 4,
        colors: ['Cam Sedona', 'Xám Meteor', 'Trắng Tuyết'],
      },
      {
        branchId: 'thang-long',
        branch: 'Ford Thăng Long',
        address: '105 Láng Hạ, Q. Đống Đa, Hà Nội',
        stock: 6,
        colors: ['Cam Sedona', 'Đen Tuyền', 'Vàng Luxe'],
      },
      {
        branchId: 'da-nang',
        branch: 'Ford Đà Nẵng',
        address: '286 Điện Biên Phủ, Thanh Khê, Đà Nẵng',
        stock: 3,
        colors: ['Trắng Tuyết', 'Xám Meteor'],
      },
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
    image: '/images/cars/raptor.png',
    shortDesc:
      'Bán tải hiệu năng cao Ford Performance trang bị giảm xóc FOX 2.5 inch và 7 chế độ lái.',
    description:
      'Ford Ranger Raptor Mới mang DNA đua địa hình Baja với hệ thống treo FOX Live Valve 2.5 inch, khung gầm gia cường và lưới tản nhiệt chữ FORD đặc trưng.',
    colors: ['Xám Xi Măng', 'Cam Sedona', 'Đen Tuyền', 'Trắng Tuyết'],
    trims: [
      {
        name: 'Raptor 2.0L Bi-Turbo 4WD',
        price: 1448000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu toàn thời gian (4WD)',
      },
      {
        name: 'Raptor Xám Xi Măng Đặc Biệt',
        price: 1455000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu toàn thời gian (4WD)',
      },
    ],
    specs: {
      engine: '2.0L Bi-Turbo Diesel i4',
      power: '210 mã lực @ 3.750 vòng/phút',
      transmission: 'Tự động 10 cấp (10AT)',
      drivetrain: 'Hai cầu toàn thời gian (4WD)',
      seats: '5 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Ford Bến Thành',
        address: '831 Trường Chinh & Q.1, TP.HCM',
        stock: 1,
        colors: ['Xám Xi Măng'],
      },
      {
        branchId: 'thu-duc',
        branch: 'Ford Thủ Đức',
        address: '218 Quốc Lộ 13, TP. Thủ Đức',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'thang-long',
        branch: 'Ford Thăng Long',
        address: '105 Láng Hạ, Q. Đống Đa, Hà Nội',
        stock: 2,
        colors: ['Xám Xi Măng', 'Cam Sedona'],
      },
      {
        branchId: 'da-nang',
        branch: 'Ford Đà Nẵng',
        address: '286 Điện Biên Phủ, Thanh Khê, Đà Nẵng',
        stock: 1,
        colors: ['Đen Tuyền'],
      },
    ],
  },
  {
    id: 'mach-e',
    name: 'Ford Mustang Mach-E',
    category: 'Xe Điện',
    price: 1699000000,
    promo: 'Tặng kèm bộ sạc tường chính hãng Ford Wallbox và gói sạc miễn phí 2 năm.',
    image: '/images/cars/mach-e.png',
    shortDesc:
      'SUV thuần điện hiệu năng cao mang biểu tượng Mustang với khả năng tăng tốc ấn tượng.',
    description:
      'Ford Mustang Mach-E mở ra kỷ nguyên xe điện thể thao tại Việt Nam với tầm vận hành lên tới 550 km/lần sạc, màn hình trung tâm 15.5 inch và hệ dẫn động AWD.',
    colors: ['Đỏ Mận', 'Trắng Tuyết', 'Đen Tuyền', 'Xanh Dương'],
    trims: [
      {
        name: 'Select / Standard Range RWD',
        price: 1699000000,
        engine: 'Mô-tơ điện (72 kWh)',
        power: '266 mã lực • Mô-men xoắn 430 Nm',
        transmission: 'Hộp số 1 cấp truyền động trực tiếp',
        drivetrain: 'Dẫn động cầu sau (RWD)',
      },
      {
        name: 'Premium Extended Range AWD',
        price: 1999000000,
        engine: 'Mô-tơ điện kép (91 kWh)',
        power: '346 mã lực • Mô-men xoắn 580 Nm',
        transmission: 'Hộp số 1 cấp truyền động trực tiếp',
        drivetrain: 'Dẫn động 4 bánh toàn thời gian (eAWD)',
      },
    ],
    specs: {
      engine: 'Động cơ thuần điện (72 - 91 kWh)',
      power: '266 - 346 mã lực',
      transmission: 'Truyền động điện 1 cấp',
      drivetrain: 'RWD / eAWD toàn thời gian',
      seats: '5 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Ford Bến Thành',
        address: '831 Trường Chinh & Q.1, TP.HCM',
        stock: 2,
        colors: ['Đỏ Mận', 'Đen Tuyền'],
      },
      {
        branchId: 'thu-duc',
        branch: 'Ford Thủ Đức',
        address: '218 Quốc Lộ 13, TP. Thủ Đức',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'thang-long',
        branch: 'Ford Thăng Long',
        address: '105 Láng Hạ, Q. Đống Đa, Hà Nội',
        stock: 2,
        colors: ['Đỏ Mận', 'Trắng Tuyết'],
      },
      {
        branchId: 'da-nang',
        branch: 'Ford Đà Nẵng',
        address: '286 Điện Biên Phủ, Thanh Khê, Đà Nẵng',
        stock: 0,
        colors: [],
      },
    ],
  },
];

export function getCarPriceForYear(car, year) {
  if (year && car.yearPrices?.[year]) {
    return car.yearPrices[year];
  }
  return car.price;
}

export function getTotalStock(car, branchId = 'all') {
  if (branchId && branchId !== 'all') {
    const branchEntry = car.inventory.find((item) => item.branchId === branchId);
    return branchEntry ? branchEntry.stock : 0;
  }
  return car.inventory.reduce((sum, item) => sum + item.stock, 0);
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
    <rect width="800" height="500" fill="#f7f7f7"/>
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
