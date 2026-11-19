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
    name: 'Tất cả chi nhánh TP.HCM',
    address: 'Hệ thống 8 Showroom Ford chính hãng tại TP. Hồ Chí Minh',
  },
  {
    id: 'ben-thanh',
    name: 'Bến Thành Ford',
    address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
  },
  {
    id: 'city-binh-trieu',
    name: 'City Ford Bình Triệu',
    address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
  },
  {
    id: 'saigon-cao-thang',
    name: 'Sài Gòn Ford Cao Thắng',
    address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
  },
  {
    id: 'saigon-pho-quang',
    name: 'Sài Gòn Ford Phổ Quang',
    address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
  },
  {
    id: 'saigon-nam-sg',
    name: 'Sài Gòn Ford Nam Sài Gòn',
    address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
  },
  {
    id: 'western-an-lac',
    name: 'Western Ford An Lạc',
    address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
  },
  {
    id: 'gia-dinh',
    name: 'Gia Định Ford',
    address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
  },
  {
    id: 'phu-my',
    name: 'Phú Mỹ Ford',
    address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
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
    colors: [
      {
        name: 'Xám Meteor',
        hex: '#4b5563',
        image: '/images/cars/everest-grey.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#f8fafc',
        image: '/images/cars/everest-white.png',
      },
      {
        name: 'Đen Tuyền',
        hex: '#111827',
        image: '/images/cars/everest-black.png',
      },
      {
        name: 'Nâu Ánh Kim',
        hex: '#78350f',
        image: '/images/cars/everest-brown.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1d4ed8',
        image: '/images/cars/everest-blue.png',
      },
    ],
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
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 4,
        colors: ['Xám Meteor', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 3,
        colors: ['Trắng Tuyết', 'Nâu Ánh Kim', 'Xanh Dương'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 2,
        colors: ['Đen Tuyền', 'Xám Meteor'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 5,
        colors: ['Trắng Tuyết', 'Đen Tuyền', 'Xanh Dương'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 1,
        colors: ['Nâu Ánh Kim'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 3,
        colors: ['Xám Meteor', 'Trắng Tuyết'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 4,
        colors: ['Trắng Tuyết', 'Xám Meteor', 'Đen Tuyền'],
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
    colors: [
      {
        name: 'Xanh Xám',
        hex: '#536d86',
        image: '/images/cars/territory-slate.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#f8fafc',
        image: '/images/cars/territory-white.png',
      },
      {
        name: 'Đen Tuyền',
        hex: '#111827',
        image: '/images/cars/territory-black.png',
      },
      {
        name: 'Bạc Ánh Kim',
        hex: '#cbd5e1',
        image: '/images/cars/territory-silver.png',
      },
      {
        name: 'Đỏ Mận',
        hex: '#881337',
        image: '/images/cars/territory-red.png',
      },
    ],
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
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 6,
        colors: ['Xanh Xám', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 4,
        colors: ['Trắng Tuyết', 'Bạc Ánh Kim', 'Đỏ Mận'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 3,
        colors: ['Xanh Xám', 'Đen Tuyền'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 5,
        colors: ['Trắng Tuyết', 'Xanh Xám', 'Đỏ Mận'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        colors: ['Bạc Ánh Kim', 'Trắng Tuyết'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 4,
        colors: ['Xanh Xám', 'Đen Tuyền'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 3,
        colors: ['Trắng Tuyết', 'Đỏ Mận'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 5,
        colors: ['Xanh Xám', 'Trắng Tuyết', 'Bạc Ánh Kim'],
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
    colors: [
      {
        name: 'Bạc Ánh Kim',
        hex: '#cbd5e1',
        image: '/images/cars/transit-silver.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#f8fafc',
        image: '/images/cars/transit-white.png',
      },
      {
        name: 'Xám Meteor',
        hex: '#4b5563',
        image: '/images/cars/transit-grey.png',
      },
      {
        name: 'Đen Tuyền',
        hex: '#111827',
        image: '/images/cars/transit-black.png',
      },
    ],
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
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 3,
        colors: ['Bạc Ánh Kim', 'Trắng Tuyết'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 5,
        colors: ['Trắng Tuyết', 'Xám Meteor', 'Bạc Ánh Kim'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 2,
        colors: ['Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        colors: ['Bạc Ánh Kim'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 6,
        colors: ['Trắng Tuyết', 'Bạc Ánh Kim', 'Xám Meteor'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 4,
        colors: ['Trắng Tuyết', 'Bạc Ánh Kim'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 3,
        colors: ['Xám Meteor', 'Đen Tuyền'],
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
    colors: [
      {
        name: 'Cam Sedona',
        hex: '#c2410c',
        image: '/images/cars/ranger-orange.png',
      },
      {
        name: 'Vàng Luxe',
        hex: '#d97706',
        image: '/images/cars/ranger-yellow.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#f8fafc',
        image: '/images/cars/ranger-white.png',
      },
      {
        name: 'Đen Tuyền',
        hex: '#111827',
        image: '/images/cars/ranger-black.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1d4ed8',
        image: '/images/cars/ranger-blue.png',
      },
    ],
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
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 5,
        colors: ['Cam Sedona', 'Vàng Luxe', 'Trắng Tuyết'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 6,
        colors: ['Cam Sedona', 'Đen Tuyền', 'Xanh Dương'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 3,
        colors: ['Trắng Tuyết', 'Vàng Luxe'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 4,
        colors: ['Cam Sedona', 'Trắng Tuyết', 'Đen Tuyền'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        colors: ['Xanh Dương', 'Trắng Tuyết'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 5,
        colors: ['Cam Sedona', 'Vàng Luxe', 'Đen Tuyền'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 3,
        colors: ['Trắng Tuyết', 'Xanh Dương'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 4,
        colors: ['Cam Sedona', 'Đen Tuyền'],
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
    colors: [
      {
        name: 'Xám Xi Măng',
        hex: '#6b7280',
        image: '/images/cars/raptor-grey.png',
      },
      {
        name: 'Cam Sedona',
        hex: '#c2410c',
        image: '/images/cars/raptor-orange.png',
      },
      {
        name: 'Đen Tuyền',
        hex: '#111827',
        image: '/images/cars/raptor-black.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#f8fafc',
        image: '/images/cars/raptor-white.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1d4ed8',
        image: '/images/cars/raptor-blue.png',
      },
    ],
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
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 2,
        colors: ['Xám Xi Măng', 'Cam Sedona'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 1,
        colors: ['Đen Tuyền'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 2,
        colors: ['Xám Xi Măng', 'Trắng Tuyết'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 1,
        colors: ['Xanh Dương'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 1,
        colors: ['Cam Sedona'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 2,
        colors: ['Xám Xi Măng', 'Đen Tuyền'],
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
    colors: [
      {
        name: 'Đỏ Mận',
        hex: '#881337',
        image: '/images/cars/mach-e-red.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1d4ed8',
        image: '/images/cars/mach-e-blue.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#f8fafc',
        image: '/images/cars/mach-e-white.png',
      },
      {
        name: 'Đen Tuyền',
        hex: '#111827',
        image: '/images/cars/mach-e-black.png',
      },
      {
        name: 'Xám Xi Măng',
        hex: '#6b7280',
        image: '/images/cars/mach-e-grey.png',
      },
    ],
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
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 2,
        colors: ['Đỏ Mận', 'Đen Tuyền'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 1,
        colors: ['Trắng Tuyết'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 2,
        colors: ['Đỏ Mận', 'Xanh Dương'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 1,
        colors: ['Xám Xi Măng'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 0,
        colors: [],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 1,
        colors: ['Đỏ Mận'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 2,
        colors: ['Trắng Tuyết', 'Xanh Dương'],
      },
    ],
  },
];

export function getColorOption(car, colorName) {
  if (!car?.colors?.length) {
    return {
      name: colorName || '',
      hex: COLOR_SWATCHES[colorName] || '#94a3b8',
      image: car?.image || '',
    };
  }
  const found = car.colors.find((c) => c.name === colorName);
  return found || car.colors[0];
}

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
