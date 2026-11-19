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
  'Đỏ Cam': '#C2410C',
  Trắng: '#FFFFFF',
  Đỏ: '#991B1B',
  'Xanh Khói': '#475569',
  'Xanh Dương': '#1D4ED8',
  'Vàng Luxe': '#CA8A04',
  'Xám Conquer': '#64748B',
  'Cam Code': '#EA580C',
  'Ghi Xám': '#52525B',
};

export const DEALER_BRANCHES = [
  {
    id: 'all',
    name: 'Tất cả chi nhánh TP.HCM',
    address: 'Hệ thống 8 Showroom Ford chính hãng tại TP. Hồ Chí Minh',
    hotline: '1800 588 888',
  },
  {
    id: 'ben-thanh',
    name: 'Bến Thành Ford',
    address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
    hotline: '028 3815 8888',
  },
  {
    id: 'city-binh-trieu',
    name: 'City Ford Bình Triệu',
    address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
    hotline: '028 3726 9999',
  },
  {
    id: 'saigon-cao-thang',
    name: 'Sài Gòn Ford Cao Thắng',
    address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
    hotline: '028 3830 8888',
  },
  {
    id: 'saigon-pho-quang',
    name: 'Sài Gòn Ford Phổ Quang',
    address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
    hotline: '028 3844 8888',
  },
  {
    id: 'saigon-nam-sg',
    name: 'Sài Gòn Ford Nam Sài Gòn',
    address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
    hotline: '028 3851 8888',
  },
  {
    id: 'western-an-lac',
    name: 'Western Ford An Lạc',
    address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
    hotline: '028 3752 8888',
  },
  {
    id: 'gia-dinh',
    name: 'Gia Định Ford',
    address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
    hotline: '028 3716 8888',
  },
  {
    id: 'phu-my',
    name: 'Phú Mỹ Ford',
    address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
    hotline: '028 3742 8888',
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
    studioImage: '/images/cars/territory-slate.png',
    lifestyleImage: '/images/cars/banner-suv.png',
  },
  {
    id: 'everest',
    carId: 'everest',
    title: 'Ford Everest',
    subtitle: 'SUV 7 chỗ khung gầm rời mạnh mẽ, làm chủ mọi cung đường cùng gia đình.',
    slogan: 'CHINH PHỤC MỌI ĐỊA HÌNH',
    studioImage: '/images/cars/everest-grey.png',
    lifestyleImage: '/images/cars/banner-suv.png',
  },
  {
    id: 'ranger',
    carId: 'ranger',
    title: 'Ford Ranger 2026',
    subtitle: 'Bán tải biểu tượng thế hệ mới với các phiên bản XLS, Sport, Wildtrak, Stormtrak.',
    slogan: 'SỐNG CHẤT NHƯ RANGER',
    studioImage: '/images/cars/ranger-orange.png',
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
    image: '/images/cars/everest-grey.png',
    shortDesc:
      'SUV 7 chỗ khung gầm rời, động cơ Diesel 2.0L Single-Turbo / Bi-Turbo, hộp số 6AT / 10AT.',
    description:
      'Ford Everest thế hệ mới sở hữu khung gầm rời chắc chắn, lưới tản nhiệt chữ C đặc trưng, 6 chế độ kiểm soát địa hình và không gian 7 chỗ sang trọng.',
    colors: [
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        image: '/images/cars/everest-silver.png',
      },
      {
        name: 'Xám Meteor',
        hex: '#52525B',
        image: '/images/cars/everest-grey.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        image: '/images/cars/everest-black.png',
      },
      {
        name: 'Trắng Tuyết',
        hex: '#FFFFFF',
        image: '/images/cars/everest-white.png',
      },
      {
        name: 'Nâu Equinox',
        hex: '#4A3728',
        image: '/images/cars/everest-brown.png',
      },
      {
        name: 'Đỏ Cam',
        hex: '#C2410C',
        image: '/images/cars/everest-orange.png',
      },
    ],
    trims: [
      {
        name: 'Ambiente 4x2 AT',
        price: 1129000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '7 chỗ ngồi',
      },
      {
        name: 'Sport 4x2 AT',
        price: 1178000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '7 chỗ ngồi',
      },
      {
        name: 'Titanium 4x2 AT',
        price: 1299000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Cầu sau (4x2)',
        seats: '7 chỗ ngồi',
      },
      {
        name: 'Titanium+ 4x4 AT',
        price: 1468000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu chủ động (4WD)',
        seats: '7 chỗ ngồi',
      },
      {
        name: 'Platinum 4x4 AT',
        price: 1545000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu chủ động (4WD)',
        seats: '7 chỗ ngồi',
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
        stock: 6,
        stockByTrim: {
          'Ambiente 4x2 AT': 1,
          'Sport 4x2 AT': 2,
          'Titanium 4x2 AT': 1,
          'Titanium+ 4x4 AT': 1,
          'Platinum 4x4 AT': 1,
        },
        colors: ['Xám Meteor', 'Trắng Tuyết', 'Đen'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 5,
        stockByTrim: {
          'Ambiente 4x2 AT': 1,
          'Sport 4x2 AT': 1,
          'Titanium 4x2 AT': 2,
          'Titanium+ 4x4 AT': 1,
          'Platinum 4x4 AT': 0,
        },
        colors: ['Trắng Tuyết', 'Nâu Equinox', 'Bạc'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 4,
        stockByTrim: {
          'Ambiente 4x2 AT': 0,
          'Sport 4x2 AT': 1,
          'Titanium 4x2 AT': 1,
          'Titanium+ 4x4 AT': 1,
          'Platinum 4x4 AT': 1,
        },
        colors: ['Đen', 'Xám Meteor'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 6,
        stockByTrim: {
          'Ambiente 4x2 AT': 2,
          'Sport 4x2 AT': 1,
          'Titanium 4x2 AT': 1,
          'Titanium+ 4x4 AT': 2,
          'Platinum 4x4 AT': 0,
        },
        colors: ['Trắng Tuyết', 'Đen', 'Bạc'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Ambiente 4x2 AT': 1,
          'Sport 4x2 AT': 0,
          'Titanium 4x2 AT': 1,
          'Titanium+ 4x4 AT': 0,
          'Platinum 4x4 AT': 0,
        },
        colors: ['Nâu Equinox', 'Đỏ Cam'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 4,
        stockByTrim: {
          'Ambiente 4x2 AT': 1,
          'Sport 4x2 AT': 1,
          'Titanium 4x2 AT': 0,
          'Titanium+ 4x4 AT': 1,
          'Platinum 4x4 AT': 1,
        },
        colors: ['Xám Meteor', 'Trắng Tuyết'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 1,
        stockByTrim: {
          'Ambiente 4x2 AT': 1,
          'Sport 4x2 AT': 0,
          'Titanium 4x2 AT': 0,
          'Titanium+ 4x4 AT': 0,
          'Platinum 4x4 AT': 0,
        },
        colors: ['Trắng Tuyết'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 5,
        stockByTrim: {
          'Ambiente 4x2 AT': 1,
          'Sport 4x2 AT': 1,
          'Titanium 4x2 AT': 1,
          'Titanium+ 4x4 AT': 1,
          'Platinum 4x4 AT': 1,
        },
        colors: ['Trắng Tuyết', 'Xám Meteor', 'Đỏ Cam'],
      },
    ],
  },
  {
    id: 'territory',
    name: 'Ford Territory',
    category: 'Xe SUV',
    price: 739000000,
    promo: 'Hỗ trợ 100% lệ phí trước bạ và tặng 1 năm bảo hiểm vật chất.',
    image: '/images/cars/territory-white.png',
    shortDesc:
      'SUV 5 chỗ đô thị, động cơ xăng 1.5L EcoBoost, hộp số tự động 7 cấp ly hợp kép.',
    description:
      'Ford Territory mang thiết kế hiện đại, màn hình kép 12.3 inch, cửa sổ trời Panorama và công nghệ an toàn thông minh Ford Co-Pilot360.',
    colors: [
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        image: '/images/cars/territory-white.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        image: '/images/cars/territory-black.png',
      },
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        image: '/images/cars/territory-silver.png',
      },
      {
        name: 'Đỏ',
        hex: '#991B1B',
        image: '/images/cars/territory-red.png',
      },
      {
        name: 'Xanh Khói',
        hex: '#475569',
        image: '/images/cars/territory-slate.png',
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
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Titanium 1.5L AT',
        price: 829000000,
        engine: '1.5L EcoBoost Turbo Xăng',
        power: '160 mã lực @ 5.400 vòng/phút',
        transmission: 'Tự động 7 cấp ly hợp kép (7DCT)',
        drivetrain: 'Dẫn động cầu trước (FWD)',
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Titanium X 1.5L AT',
        price: 889000000,
        engine: '1.5L EcoBoost Turbo Xăng',
        power: '160 mã lực @ 5.400 vòng/phút',
        transmission: 'Tự động 7 cấp ly hợp kép (7DCT)',
        drivetrain: 'Dẫn động cầu trước (FWD)',
        seats: '5 chỗ ngồi',
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
        stockByTrim: {
          'Trend 1.5L AT': 2,
          'Titanium 1.5L AT': 2,
          'Titanium X 1.5L AT': 2,
        },
        colors: ['Trắng', 'Đen', 'Xanh Khói'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 4,
        stockByTrim: {
          'Trend 1.5L AT': 1,
          'Titanium 1.5L AT': 2,
          'Titanium X 1.5L AT': 1,
        },
        colors: ['Trắng', 'Bạc', 'Đỏ'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 3,
        stockByTrim: {
          'Trend 1.5L AT': 1,
          'Titanium 1.5L AT': 1,
          'Titanium X 1.5L AT': 1,
        },
        colors: ['Xanh Khói', 'Đen'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 5,
        stockByTrim: {
          'Trend 1.5L AT': 2,
          'Titanium 1.5L AT': 1,
          'Titanium X 1.5L AT': 2,
        },
        colors: ['Trắng', 'Xanh Khói', 'Đỏ'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Trend 1.5L AT': 1,
          'Titanium 1.5L AT': 1,
          'Titanium X 1.5L AT': 0,
        },
        colors: ['Bạc', 'Trắng'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 4,
        stockByTrim: {
          'Trend 1.5L AT': 2,
          'Titanium 1.5L AT': 1,
          'Titanium X 1.5L AT': 1,
        },
        colors: ['Xanh Khói', 'Đen'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 3,
        stockByTrim: {
          'Trend 1.5L AT': 1,
          'Titanium 1.5L AT': 2,
          'Titanium X 1.5L AT': 0,
        },
        colors: ['Trắng', 'Đỏ'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 5,
        stockByTrim: {
          'Trend 1.5L AT': 1,
          'Titanium 1.5L AT': 2,
          'Titanium X 1.5L AT': 2,
        },
        colors: ['Xanh Khói', 'Trắng', 'Bạc'],
      },
    ],
  },
  {
    id: 'transit',
    name: 'Transit Hoàn Toàn Mới',
    category: 'Xe Thương mại',
    price: 907000000,
    promo: 'Ưu đãi lãi suất doanh nghiệp 0% trong 6 tháng đầu cho lô xe vận tải.',
    image: '/images/cars/transit-silver.png',
    shortDesc:
      'Xe thương mại 16-18 chỗ thế hệ mới với khoang hành khách rộng rãi và màn hình kép 12.3 inch.',
    description:
      'Transit Hoàn Toàn Mới là giải pháp vận chuyển hành khách hàng đầu tại Việt Nam với động cơ 2.3L TDCi bền bỉ, cửa trượt điện và chi phí vận hành tối ưu.',
    colors: [
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        image: '/images/cars/transit-silver.png',
      },
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        image: '/images/cars/transit-white.png',
      },
      {
        name: 'Ghi Xám',
        hex: '#52525B',
        image: '/images/cars/transit-grey.png',
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
        seats: '16 chỗ ngồi',
      },
      {
        name: 'Premium 16 Chỗ',
        price: 999000000,
        engine: '2.3L Turbo Diesel TDCi',
        power: '171 mã lực @ 3.200 vòng/phút',
        transmission: 'Số sàn 6 cấp (6MT)',
        drivetrain: 'Dẫn động cầu sau (RWD)',
        seats: '16 chỗ ngồi',
      },
      {
        name: 'Premium+ 18 Chỗ',
        price: 1091000000,
        engine: '2.3L Turbo Diesel TDCi',
        power: '171 mã lực @ 3.200 vòng/phút',
        transmission: 'Số sàn 6 cấp (6MT)',
        drivetrain: 'Dẫn động cầu sau (RWD)',
        seats: '18 chỗ ngồi',
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
        stockByTrim: {
          'Trend 16 Chỗ': 2,
          'Premium 16 Chỗ': 1,
          'Premium+ 18 Chỗ': 0,
        },
        colors: ['Bạc', 'Trắng'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 5,
        stockByTrim: {
          'Trend 16 Chỗ': 2,
          'Premium 16 Chỗ': 2,
          'Premium+ 18 Chỗ': 1,
        },
        colors: ['Trắng', 'Ghi Xám', 'Bạc'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 0,
        stockByTrim: {
          'Trend 16 Chỗ': 0,
          'Premium 16 Chỗ': 0,
          'Premium+ 18 Chỗ': 0,
        },
        colors: [],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Trend 16 Chỗ': 1,
          'Premium 16 Chỗ': 1,
          'Premium+ 18 Chỗ': 0,
        },
        colors: ['Trắng', 'Ghi Xám'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Trend 16 Chỗ': 1,
          'Premium 16 Chỗ': 0,
          'Premium+ 18 Chỗ': 1,
        },
        colors: ['Bạc'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 6,
        stockByTrim: {
          'Trend 16 Chỗ': 3,
          'Premium 16 Chỗ': 2,
          'Premium+ 18 Chỗ': 1,
        },
        colors: ['Trắng', 'Bạc', 'Ghi Xám'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 4,
        stockByTrim: {
          'Trend 16 Chỗ': 2,
          'Premium 16 Chỗ': 1,
          'Premium+ 18 Chỗ': 1,
        },
        colors: ['Trắng', 'Bạc'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 3,
        stockByTrim: {
          'Trend 16 Chỗ': 1,
          'Premium 16 Chỗ': 1,
          'Premium+ 18 Chỗ': 1,
        },
        colors: ['Ghi Xám', 'Bạc'],
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
    image: '/images/cars/ranger-orange.png',
    shortDesc:
      'Xe bán tải đa dụng với các phiên bản XLS, Sport, Wildtrak, Stormtrak mạnh mẽ.',
    description:
      'Ford Ranger thế hệ mới là mẫu bán tải hàng đầu Việt Nam với màn hình dọc 12 inch SYNC 4A, cụm đèn LED Matrix và khả năng lội nước 800mm.',
    colors: [
      {
        name: 'Bạc',
        hex: '#CBD5E1',
        image: '/images/cars/ranger-silver.png',
      },
      {
        name: 'Xám Meteor',
        hex: '#52525B',
        image: '/images/cars/ranger-grey.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        image: '/images/cars/ranger-black.png',
      },
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        image: '/images/cars/ranger-white.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1D4ED8',
        image: '/images/cars/ranger-blue.png',
      },
      {
        name: 'Đỏ Cam',
        hex: '#C2410C',
        image: '/images/cars/ranger-orange.png',
      },
      {
        name: 'Vàng Luxe',
        hex: '#CA8A04',
        image: '/images/cars/ranger-yellow.png',
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
        seats: '5 chỗ ngồi',
      },
      {
        name: 'XLS 4x4 AT',
        price: 795000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Sport 4x4 AT',
        price: 882000000,
        engine: '2.0L Single-Turbo Diesel i4',
        power: '170 mã lực @ 3.500 vòng/phút',
        transmission: 'Tự động 6 cấp (6AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Wildtrak 4x4 AT',
        price: 998000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Stormtrak 4x4 AT',
        price: 1059000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp điện tử (10AT)',
        drivetrain: 'Hai cầu bán thời gian (4x4)',
        seats: '5 chỗ ngồi',
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
        stock: 6,
        stockByTrim: {
          'XLS 4x2 AT': 2,
          'XLS 4x4 AT': 1,
          'Sport 4x4 AT': 1,
          'Wildtrak 4x4 AT': 1,
          'Stormtrak 4x4 AT': 1,
        },
        colors: ['Đỏ Cam', 'Vàng Luxe', 'Bạc', 'Trắng'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 6,
        stockByTrim: {
          'XLS 4x2 AT': 2,
          'XLS 4x4 AT': 1,
          'Sport 4x4 AT': 1,
          'Wildtrak 4x4 AT': 2,
          'Stormtrak 4x4 AT': 0,
        },
        colors: ['Đỏ Cam', 'Đen', 'Xanh Dương'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 3,
        stockByTrim: {
          'XLS 4x2 AT': 1,
          'XLS 4x4 AT': 0,
          'Sport 4x4 AT': 1,
          'Wildtrak 4x4 AT': 1,
          'Stormtrak 4x4 AT': 0,
        },
        colors: ['Trắng', 'Xám Meteor'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 5,
        stockByTrim: {
          'XLS 4x2 AT': 1,
          'XLS 4x4 AT': 1,
          'Sport 4x4 AT': 1,
          'Wildtrak 4x4 AT': 1,
          'Stormtrak 4x4 AT': 1,
        },
        colors: ['Đỏ Cam', 'Vàng Luxe', 'Trắng', 'Đen'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 2,
        stockByTrim: {
          'XLS 4x2 AT': 1,
          'XLS 4x4 AT': 1,
          'Sport 4x4 AT': 0,
          'Wildtrak 4x4 AT': 0,
          'Stormtrak 4x4 AT': 0,
        },
        colors: ['Xanh Dương', 'Bạc'],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 5,
        stockByTrim: {
          'XLS 4x2 AT': 2,
          'XLS 4x4 AT': 1,
          'Sport 4x4 AT': 1,
          'Wildtrak 4x4 AT': 1,
          'Stormtrak 4x4 AT': 0,
        },
        colors: ['Đỏ Cam', 'Xám Meteor', 'Đen'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 3,
        stockByTrim: {
          'XLS 4x2 AT': 1,
          'XLS 4x4 AT': 0,
          'Sport 4x4 AT': 1,
          'Wildtrak 4x4 AT': 1,
          'Stormtrak 4x4 AT': 0,
        },
        colors: ['Trắng', 'Xanh Dương'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 4,
        stockByTrim: {
          'XLS 4x2 AT': 1,
          'XLS 4x4 AT': 1,
          'Sport 4x4 AT': 0,
          'Wildtrak 4x4 AT': 1,
          'Stormtrak 4x4 AT': 1,
        },
        colors: ['Đỏ Cam', 'Đen', 'Bạc'],
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
    image: '/images/cars/raptor-grey.png',
    shortDesc:
      'Bán tải hiệu năng cao Ford Performance trang bị giảm xóc FOX 2.5 inch và 7 chế độ lái.',
    description:
      'Ford Ranger Raptor Mới mang DNA đua địa hình Baja với hệ thống treo FOX Live Valve 2.5 inch, khung gầm gia cường và lưới tản nhiệt chữ FORD đặc trưng.',
    colors: [
      {
        name: 'Xám Conquer',
        hex: '#64748B',
        image: '/images/cars/raptor-grey.png',
      },
      {
        name: 'Cam Code',
        hex: '#EA580C',
        image: '/images/cars/raptor-orange.png',
      },
      {
        name: 'Đen',
        hex: '#141414',
        image: '/images/cars/raptor-black.png',
      },
      {
        name: 'Trắng',
        hex: '#FFFFFF',
        image: '/images/cars/raptor-white.png',
      },
      {
        name: 'Xanh Dương',
        hex: '#1E40AF',
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
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Raptor Xám Conquer Đặc Biệt',
        price: 1455000000,
        engine: '2.0L Bi-Turbo Diesel i4',
        power: '210 mã lực @ 3.750 vòng/phút',
        transmission: 'Tự động 10 cấp (10AT)',
        drivetrain: 'Hai cầu toàn thời gian (4WD)',
        seats: '5 chỗ ngồi',
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
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 1,
          'Raptor Xám Conquer Đặc Biệt': 1,
        },
        colors: ['Xám Conquer', 'Cam Code'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 1,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 1,
          'Raptor Xám Conquer Đặc Biệt': 0,
        },
        colors: ['Đen'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 0,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 0,
          'Raptor Xám Conquer Đặc Biệt': 0,
        },
        colors: [],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 1,
          'Raptor Xám Conquer Đặc Biệt': 1,
        },
        colors: ['Xám Conquer', 'Trắng'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 0,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 0,
          'Raptor Xám Conquer Đặc Biệt': 0,
        },
        colors: [],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 1,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 1,
          'Raptor Xám Conquer Đặc Biệt': 0,
        },
        colors: ['Xanh Dương'],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 1,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 1,
          'Raptor Xám Conquer Đặc Biệt': 0,
        },
        colors: ['Cam Code'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Raptor 2.0L Bi-Turbo 4WD': 1,
          'Raptor Xám Conquer Đặc Biệt': 1,
        },
        colors: ['Xám Conquer', 'Đen'],
      },
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
        name: 'Select Standard Range RWD',
        price: 1699000000,
        engine: 'Mô-tơ điện (72 kWh)',
        power: '266 mã lực • Mô-men xoắn 430 Nm',
        transmission: 'Hộp số 1 cấp truyền động trực tiếp',
        drivetrain: 'Dẫn động cầu sau (RWD)',
        seats: '5 chỗ ngồi',
      },
      {
        name: 'Premium Extended Range AWD',
        price: 1999000000,
        engine: 'Mô-tơ điện kép (91 kWh)',
        power: '346 mã lực • Mô-men xoắn 580 Nm',
        transmission: 'Hộp số 1 cấp truyền động trực tiếp',
        drivetrain: 'Dẫn động 4 bánh toàn thời gian (eAWD)',
        seats: '5 chỗ ngồi',
      },
      {
        name: 'GT Performance AWD',
        price: 2399000000,
        engine: 'Mô-tơ điện kép hiệu năng cao (91 kWh)',
        power: '480 mã lực • Mô-men xoắn 860 Nm',
        transmission: 'Hộp số 1 cấp truyền động trực tiếp',
        drivetrain: 'Dẫn động 4 bánh toàn thời gian (eAWD)',
        seats: '5 chỗ ngồi',
      },
    ],
    specs: {
      engine: 'Động cơ thuần điện (72 - 91 kWh)',
      power: '266 - 480 mã lực',
      transmission: 'Truyền động điện 1 cấp',
      drivetrain: 'RWD / eAWD toàn thời gian',
      seats: '5 chỗ ngồi',
    },
    inventory: [
      {
        branchId: 'ben-thanh',
        branch: 'Bến Thành Ford',
        address: '39 Chế Lan Viên, P. Tây Thạnh, Q. Tân Phú, TP.HCM',
        stock: 3,
        stockByTrim: {
          'Select Standard Range RWD': 1,
          'Premium Extended Range AWD': 1,
          'GT Performance AWD': 1,
        },
        colors: ['Đỏ Thể Thao', 'Đen Huyền Bí'],
      },
      {
        branchId: 'city-binh-trieu',
        branch: 'City Ford Bình Triệu',
        address: '218 Quốc Lộ 13, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Select Standard Range RWD': 1,
          'Premium Extended Range AWD': 1,
          'GT Performance AWD': 0,
        },
        colors: ['Trắng Ánh Sao'],
      },
      {
        branchId: 'saigon-cao-thang',
        branch: 'Sài Gòn Ford Cao Thắng',
        address: '61A Cao Thắng, Phường 3, Quận 3, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Select Standard Range RWD': 1,
          'Premium Extended Range AWD': 0,
          'GT Performance AWD': 1,
        },
        colors: ['Đỏ Thể Thao', 'Xanh Mãnh Liệt'],
      },
      {
        branchId: 'saigon-pho-quang',
        branch: 'Sài Gòn Ford Phổ Quang',
        address: '104 Phổ Quang, Phường 2, Q. Tân Bình, TP.HCM',
        stock: 1,
        stockByTrim: {
          'Select Standard Range RWD': 0,
          'Premium Extended Range AWD': 1,
          'GT Performance AWD': 0,
        },
        colors: ['Xanh Mãnh Liệt'],
      },
      {
        branchId: 'saigon-nam-sg',
        branch: 'Sài Gòn Ford Nam Sài Gòn',
        address: '161F Dạ Nam, Phường 3, Quận 8, TP.HCM',
        stock: 0,
        stockByTrim: {
          'Select Standard Range RWD': 0,
          'Premium Extended Range AWD': 0,
          'GT Performance AWD': 0,
        },
        colors: [],
      },
      {
        branchId: 'western-an-lac',
        branch: 'Western Ford An Lạc',
        address: '530 Kinh Dương Vương, P. An Lạc, Q. Bình Tân, TP.HCM',
        stock: 0,
        stockByTrim: {
          'Select Standard Range RWD': 0,
          'Premium Extended Range AWD': 0,
          'GT Performance AWD': 0,
        },
        colors: [],
      },
      {
        branchId: 'gia-dinh',
        branch: 'Gia Định Ford',
        address: '900 Quốc Lộ 1A, P. Thạnh Xuân, Quận 12, TP.HCM',
        stock: 1,
        stockByTrim: {
          'Select Standard Range RWD': 1,
          'Premium Extended Range AWD': 0,
          'GT Performance AWD': 0,
        },
        colors: ['Đỏ Thể Thao'],
      },
      {
        branchId: 'phu-my',
        branch: 'Phú Mỹ Ford',
        address: 'Lô B1, Đường C2, KCN Cát Lái 2, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP.HCM',
        stock: 2,
        stockByTrim: {
          'Select Standard Range RWD': 1,
          'Premium Extended Range AWD': 1,
          'GT Performance AWD': 0,
        },
        colors: ['Trắng Ánh Sao', 'Xanh Mãnh Liệt'],
      },
    ],
  },
];

export function getGoogleMapsUrl(branch) {
  const query = encodeURIComponent(`${branch.name}, ${branch.address}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getBranchStockForTrim(branchItem, trimName) {
  if (!branchItem) return 0;
  if (trimName && branchItem.stockByTrim && typeof branchItem.stockByTrim[trimName] === 'number') {
    return branchItem.stockByTrim[trimName];
  }
  return branchItem.stock;
}

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

export function getTotalStock(car, branchId = 'all', trimName = '') {
  if (branchId && branchId !== 'all') {
    const branchEntry = car.inventory.find((item) => item.branchId === branchId);
    return getBranchStockForTrim(branchEntry, trimName);
  }
  return car.inventory.reduce(
    (sum, item) => sum + getBranchStockForTrim(item, trimName),
    0,
  );
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
