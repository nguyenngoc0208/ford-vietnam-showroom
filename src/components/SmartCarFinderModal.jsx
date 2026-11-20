import { useEffect, useMemo } from 'react';
import {
  COLOR_SWATCHES,
  DEALER_CITIES,
  FORD_BRANCHES,
  formatBranchAddress,
  formatVND,
  getBranchStockForTrim,
  getCarYearVariant,
  handleCarImageError,
} from '../data/fordCars';

const BUDGET_OPTIONS = [
  {
    id: 'under-800',
    label: 'Dưới 800 triệu',
    hint: 'Territory Trend, Ranger XL / XLS / XLS+',
    rangeLabel: '< 800 triệu',
  },
  {
    id: '800-1100',
    label: '800 triệu – 1,1 tỷ',
    hint: 'Territory Titanium X / Platinum, Ranger Sport / Wildtrak / Stormtrak, Transit',
    rangeLabel: '800 triệu – 1,1 tỷ',
  },
  {
    id: '1100-1500',
    label: '1,1 – 1,5 tỷ',
    hint: 'Everest Active / Sport / Platinum, Ranger Raptor 2025 / 2026',
    rangeLabel: '1,1 – 1,5 tỷ',
  },
  {
    id: 'over-1500',
    label: 'Trên 1,5 tỷ',
    hint: 'Everest Platinum+ 300 PS, Mustang Mach-E Premium AWD',
    rangeLabel: '> 1,5 tỷ',
  },
];

const PURPOSE_OPTIONS = [
  {
    id: 'city-family',
    label: 'Đi phố & Gia đình êm ái, rộng rãi',
    hint: 'Ưu tiên SUV gầm cao 5–7 chỗ: Ford Territory, Ford Everest',
  },
  {
    id: 'versatile-work',
    label: 'Đa dụng: Vừa đi gia đình vừa chở hàng / công việc',
    hint: 'Ưu tiên bán tải cân bằng: Ranger XLS, XLS+, Wildtrak',
  },
  {
    id: 'offroad-perf',
    label: 'Đam mê Off-road, địa hình nặng & hiệu năng cao',
    hint: 'Ưu tiên dẫn động 4x4, V6 / Bi-Turbo: Raptor, Wildtrak 3.0L V6, Everest 4x4',
  },
  {
    id: 'commercial-transport',
    label: 'Kinh doanh vận tải hành khách / Du lịch',
    hint: 'Ưu tiên Ford Transit Trend / Premium 16 chỗ / Premium+ 18 chỗ',
  },
  {
    id: 'ev-tech',
    label: 'Trải nghiệm xe điện thông minh, tăng tốc mạnh & không khí thải',
    hint: 'Ưu tiên Mustang Mach-E Premium AWD (~550 km WLTP)',
  },
];

const PREFERENCE_OPTIONS = [
  {
    id: 'latest-2026',
    label: 'Công nghệ & hộp số đời mới nhất (2026)',
    hint: 'Ưu tiên xe phiên bản 2026 nâng cấp trang bị & động cơ mới',
  },
  {
    id: 'value-2025',
    label: 'Tối ưu chi phí & săn ưu đãi xe VIN 2025',
    hint: 'Ưu tiên động cơ Bi-Turbo bền bỉ / mức giá khởi điểm mềm hơn',
  },
  {
    id: 'fuel-efficient',
    label: 'Tiết kiệm nhiên liệu vận hành hàng ngày',
    hint: 'Ưu tiên máy dầu 2.0L, xăng 1.5L EcoBoost hoặc thuần điện AWD',
  },
  {
    id: 'balanced',
    label: 'Linh hoạt — Gợi ý cho tôi phương án đáng tiền nhất',
    hint: 'Cân bằng giữa ngân sách, trang bị an toàn và sẵn kho gần bạn',
  },
];

const STEP_TITLES = [
  'Bước 1/4 — Ngân sách dự kiến của bạn?',
  'Bước 2/4 — Mục đích sử dụng chính?',
  'Bước 3/4 — Ưu tiên cấu hình & Năm đời xe?',
  'Bước 4/4 — Chọn khu vực nhận xe gần bạn?',
];

function extractAllConfigurations(cars, selectedCity) {
  const configs = [];

  for (const car of cars) {
    const years = car.availableYears?.length ? car.availableYears : [''];
    for (const year of years) {
      const variant = getCarYearVariant(car, year);
      const trims = variant.trims || [];

      trims.forEach((trim, trimIndex) => {
        const engineList = trim.engineOptions?.length ? trim.engineOptions : [null];
        engineList.forEach((engineOpt, engineIndex) => {
          const price = engineOpt ? engineOpt.price : trim.price;
          const stockKey = engineOpt?.stockKey || trim.name;
          const resolveSpec = (key) => {
            if (
              engineOpt &&
              Object.prototype.hasOwnProperty.call(engineOpt, key)
            ) {
              return engineOpt[key];
            }
            if (trim && Object.prototype.hasOwnProperty.call(trim, key)) {
              return trim[key];
            }
            return variant.specs?.[key];
          };
          const engine = resolveSpec('engine');
          const power = resolveSpec('power');
          const torque = resolveSpec('torque');
          const range = resolveSpec('range');
          const transmission = resolveSpec('transmission');
          const drivetrain = resolveSpec('drivetrain');
          const seats = resolveSpec('seats');

          const trimAllowedColors = trim.availableColors?.length
            ? trim.availableColors
            : variant.colors.map((c) => c.name);

          const matchingBranches = car.inventory
            .filter((branch) => {
              const cityMatch =
                selectedCity === 'Tất cả tỉnh/thành' || branch.city === selectedCity;
              return (
                (branch.branch_type || branch.type) !== '2S' &&
                cityMatch &&
                getBranchStockForTrim(branch, stockKey) > 0
              );
            })
            .map((branch) => {
              const rawYearColors =
                (year && branch.colorsByYear?.[year]) || branch.colors || [];
              const filteredColors = rawYearColors.filter((name) =>
                trimAllowedColors.includes(name),
              );
              return {
                ...branch,
                trimQty: getBranchStockForTrim(branch, stockKey),
                displayColors:
                  filteredColors.length > 0 ? filteredColors : trimAllowedColors.slice(0, 3),
              };
            });

          const totalCityStock = matchingBranches.reduce(
            (sum, b) => sum + b.trimQty,
            0,
          );

          configs.push({
            id: `${car.id}-${year || 'base'}-${trimIndex}-${engineIndex}`,
            car,
            carId: car.id,
            carName: variant.name,
            year,
            trimIndex,
            engineIndex,
            trimName: trim.name,
            engineLabel: engineOpt?.label || '',
            displayConfigName: engineOpt
              ? `${trim.name} (${engineOpt.label})`
              : trim.name,
            price,
            stockKey,
            engine,
            power,
            torque,
            range,
            transmission,
            drivetrain,
            seats: seats ?? 'Đang cập nhật',
            image: variant.image || car.image,
            defaultColor:
              (trim.availableColors && trim.availableColors[0]) ||
              variant.defaultColor ||
              car.colors?.[0]?.name ||
              '',
            promo: car.promo,
            matchingBranches,
            totalCityStock,
          });
        });
      });
    }
  }

  return configs;
}

function getBudgetScore(price, budgetId) {
  switch (budgetId) {
    case 'under-800':
      if (price <= 800000000) return 38;
      if (price <= 920000000) return 14;
      return -28;
    case '800-1100':
      if (price >= 800000000 && price <= 1100000000) return 38;
      if (price >= 720000000 && price < 800000000) return 18;
      if (price > 1100000000 && price <= 1250000000) return 10;
      return -24;
    case '1100-1500':
      if (price >= 1100000000 && price <= 1500000000) return 38;
      if (price >= 970000000 && price < 1100000000) return 18;
      return -20;
    case 'over-1500':
      if (price >= 1500000000) return 38;
      if (price >= 1300000000) return 18;
      return -26;
    default:
      return 0;
  }
}

function getPurposeScore(cfg, purposeId) {
  const is4x4OrAwd = /4x4|awd/i.test(cfg.drivetrain);
  const isDiesel = /diesel|dầu/i.test(cfg.engine);

  switch (purposeId) {
    case 'city-family':
      if (cfg.carId === 'everest' || cfg.carId === 'territory') return 42;
      if (cfg.carId === 'mach-e') return 18;
      if (cfg.carId === 'transit') return -32;
      return -8;
    case 'versatile-work':
      if (cfg.carId === 'ranger') {
        if (/XLS|Wildtrak/i.test(cfg.trimName)) return 44;
        return 38;
      }
      if (cfg.carId === 'raptor') return 14;
      if (cfg.carId === 'everest') return 12;
      if (cfg.carId === 'territory') return 8;
      return -20;
    case 'offroad-perf':
      if (cfg.carId === 'raptor') return 46;
      if (cfg.carId === 'ranger' && /3\.0L|Stormtrak/i.test(cfg.displayConfigName)) {
        return 42;
      }
      if (cfg.carId === 'everest' && is4x4OrAwd) return 38;
      if (is4x4OrAwd) return 30;
      return -24;
    case 'commercial-transport':
      if (cfg.carId === 'transit') return 58;
      if (cfg.carId === 'everest') return 6;
      return -26;
    case 'ev-tech':
      if (cfg.carId === 'mach-e') return 58;
      if (
        (cfg.carId === 'territory' && /Platinum|Titanium X/i.test(cfg.trimName)) ||
        (cfg.carId === 'everest' && /Platinum/i.test(cfg.trimName)) ||
        (cfg.carId === 'ranger' && /Wildtrak|Stormtrak/i.test(cfg.trimName))
      ) {
        return 18;
      }
      return -15;
    default:
      return isDiesel ? 5 : 0;
  }
}

function getPreferenceScore(cfg, preferenceId) {
  const isHighDisplacement = /3\.0|2\.3L EcoBoost/i.test(cfg.engine);
  switch (preferenceId) {
    case 'latest-2026':
      if (cfg.year === '2026') return 22;
      if (!cfg.year) return 14;
      return -8;
    case 'value-2025':
      if (cfg.year === '2025') return 24;
      if (cfg.price <= 900000000) return 8;
      return 0;
    case 'fuel-efficient':
      if (cfg.carId === 'mach-e') return 20;
      if (cfg.carId === 'territory') return 15;
      if (/4x2|RWD/i.test(cfg.drivetrain) && /Diesel|Turbo Diesel/i.test(cfg.engine)) {
        return 19;
      }
      if (isHighDisplacement) return -8;
      return 10;
    case 'balanced':
      if (/Titanium X|Platinum$|Sport|Wildtrak|Premium 16|Mach-E/i.test(cfg.trimName)) {
        return 12;
      }
      return 6;
    default:
      return 0;
  }
}

function buildReasons(cfg, answers) {
  const reasons = [];
  const budgetObj = BUDGET_OPTIONS.find((b) => b.id === answers.budget);

  if (getBudgetScore(cfg.price, answers.budget) >= 30) {
    reasons.push(
      `Giá niêm yết ${formatVND(cfg.price)} khớp sát ngân sách ${budgetObj?.rangeLabel || ''} (${cfg.promo})`,
    );
  } else {
    reasons.push(
      `Mức giá ${formatVND(cfg.price)} tối ưu cấu hình trang bị kèm ưu đãi: ${cfg.promo}`,
    );
  }

  const powerLine = [cfg.engine, cfg.power, cfg.torque, cfg.range]
    .filter(
      (item) =>
        item !== null &&
        item !== undefined &&
        item !== '' &&
        !(typeof item === 'number' && Number.isNaN(item)),
    )
    .join(' • ');
  const isLimitedSpecs = cfg.power === null || cfg.torque === null || cfg.range === null;
  reasons.push(
    `Vận hành: ${powerLine}${isLimitedSpecs ? ' (Một số thông số đang cập nhật)' : ''}`,
  );

  if (cfg.totalCityStock > 0) {
    const areaLabel =
      answers.city === 'Tất cả tỉnh/thành' ? 'toàn quốc' : `khu vực ${answers.city}`;
    reasons.push(
      `${cfg.drivetrain} (${cfg.transmission}) — Hiện còn ${cfg.totalCityStock} xe sẵn sàng giao ngay tại ${areaLabel}`,
    );
  } else {
    reasons.push(
      `${cfg.drivetrain} (${cfg.transmission}) — Hỗ trợ đặt suất giao xe sớm tại đại lý gần nhất`,
    );
  }

  return reasons;
}

function recommendConfigurations(cars, answers) {
  const candidates = extractAllConfigurations(cars, answers.city);

  const scored = candidates.map((cfg) => {
    const budgetScore = getBudgetScore(cfg.price, answers.budget);
    const purposeScore = getPurposeScore(cfg, answers.purpose);
    const prefScore = getPreferenceScore(cfg, answers.preference);
    const stockScore =
      cfg.totalCityStock > 0 ? 12 + Math.min(4, cfg.matchingBranches.length) : -8;
    const rawScore = budgetScore + purposeScore + prefScore + stockScore;
    return {
      ...cfg,
      rawScore,
    };
  });

  scored.sort((a, b) => {
    if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
    if (b.totalCityStock !== a.totalCityStock) {
      return b.totalCityStock - a.totalCityStock;
    }
    return a.price - b.price;
  });

  const best = scored[0];
  const selected = best ? [best] : [];

  // Pick 2 meaningful alternatives (diverse across model/year/drivetrain where helpful)
  for (const candidate of scored) {
    if (selected.length >= 3) break;
    if (selected.some((item) => item.id === candidate.id)) continue;

    const alreadySameModelCount = selected.filter(
      (item) => item.carId === candidate.carId && item.year === candidate.year,
    ).length;

    const singleModelFocus =
      answers.purpose === 'commercial-transport' ||
      (answers.purpose === 'ev-tech' && selected[0]?.carId === 'mach-e');

    if (!singleModelFocus && alreadySameModelCount >= 1 && scored.length > 6) {
      continue;
    }
    selected.push(candidate);
  }

  // Fallback fill if strict diversity skipped too many
  if (selected.length < 3) {
    for (const candidate of scored) {
      if (selected.length >= 3) break;
      if (!selected.some((item) => item.id === candidate.id)) {
        selected.push(candidate);
      }
    }
  }

  const topScore = selected[0]?.rawScore || 100;
  return selected.map((item, idx) => {
    const diff = Math.max(0, topScore - item.rawScore);
    const basePct = idx === 0 ? 98 : Math.max(78, Math.round(95 - diff * 0.45 - idx * 2));
    return {
      ...item,
      matchPercent: Math.min(99, basePct),
      reasons: buildReasons(item, answers),
    };
  });
}

const DEFAULT_FINDER_ANSWERS = {
  budget: '800-1100',
  purpose: 'versatile-work',
  preference: 'latest-2026',
  city: 'Tất cả tỉnh/thành',
};

export default function SmartCarFinderModal({
  isOpen,
  cars,
  finderState,
  onStepChange,
  onHistoryBack,
  onSelectRecommendation,
  onClose,
}) {
  const step = finderState?.step ?? 0;
  const showResults = Boolean(finderState?.showResults);
  const answers = finderState?.answers || DEFAULT_FINDER_ANSWERS;

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

  const recommendations = useMemo(() => {
    if (!isOpen || !showResults) return [];
    return recommendConfigurations(cars, answers);
  }, [isOpen, showResults, cars, answers]);

  if (!isOpen) return null;

  const canGoBackStep = showResults || step > 0;

  const handleRestart = () => {
    onStepChange({
      step: 0,
      showResults: false,
      answers,
    });
  };

  const handlePickOption = (field, value, autoAdvance = true) => {
    const nextAnswers = { ...answers, [field]: value };
    if (autoAdvance) {
      if (step < 3) {
        onStepChange({
          step: step + 1,
          showResults: false,
          answers: nextAnswers,
        });
      } else {
        onStepChange({
          step: 3,
          showResults: true,
          answers: nextAnswers,
        });
      }
    } else {
      onStepChange({
        step,
        showResults,
        answers: nextAnswers,
      });
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="finder-modal-title"
    >
      <div className="modal-content modal-content--shell finder-modal-content">
        {/* Sticky Top Navigation Bar (iOS One-Hand Friendly >=44px) */}
        <div className="modal-sticky-header">
          <div className="modal-sticky-header-left">
            {canGoBackStep ? (
              <button
                type="button"
                className="modal-header-nav-btn"
                onClick={onHistoryBack}
                aria-label="Quay lại bước trước"
              >
                ← Quay lại
              </button>
            ) : (
              <span className="modal-sticky-badge">TƯ VẤN CHỌN XE</span>
            )}
            <span className="modal-sticky-step-label">
              {showResults ? 'Kết quả đề xuất' : `Bước ${step + 1}/4`}
            </span>
          </div>

          <button
            type="button"
            className="modal-close modal-close--pill"
            onClick={onClose}
            aria-label="Đóng tư vấn chọn xe"
          >
            ✕ Đóng
          </button>
        </div>

        <div className="modal-scroll-body">
          <div className="finder-modal-header">
            <p className="catalog-eyebrow">SMART CAR &amp; TRIM FINDER</p>
            <h2 id="finder-modal-title" className="modal-title">
              {showResults
                ? 'Cấu Hình Ford Đề Xuất Dành Riêng Cho Bạn'
                : 'Tư Vấn Chọn Xe & Phiên Bản Ford Phù Hợp'}
            </h2>
            {!showResults && (
              <div
                className="finder-progress-wrap"
                aria-label={`Tiến độ bước ${step + 1} trên 4`}
              >
                <div className="finder-progress-steps">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`finder-step-dot ${idx === step ? 'is-current' : ''} ${
                        idx < step ? 'is-done' : ''
                      }`}
                      onClick={() =>
                        onStepChange({
                          step: idx,
                          showResults: false,
                          answers,
                        })
                      }
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
                <div className="finder-progress-bar">
                  <div
                    className="finder-progress-fill"
                    style={{ width: `${((step + 1) / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {!showResults ? (
            <div className="finder-step-body">
              <h3 className="finder-step-question">{STEP_TITLES[step]}</h3>

              {step === 0 && (
                <div className="finder-options-grid">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`finder-option-card ${answers.budget === opt.id ? 'is-selected' : ''}`}
                      onClick={() => handlePickOption('budget', opt.id, true)}
                    >
                      <strong>{opt.label}</strong>
                      <span>{opt.hint}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="finder-options-grid finder-options-grid--single">
                  {PURPOSE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`finder-option-card ${answers.purpose === opt.id ? 'is-selected' : ''}`}
                      onClick={() => handlePickOption('purpose', opt.id, true)}
                    >
                      <strong>{opt.label}</strong>
                      <span>{opt.hint}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="finder-options-grid">
                  {PREFERENCE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`finder-option-card ${answers.preference === opt.id ? 'is-selected' : ''}`}
                      onClick={() => handlePickOption('preference', opt.id, true)}
                    >
                      <strong>{opt.label}</strong>
                      <span>{opt.hint}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="finder-options-grid">
                  {DEALER_CITIES.map((cityName) => {
                    const displayCity =
                      cityName === 'Tất cả tỉnh/thành'
                        ? `Toàn quốc (${FORD_BRANCHES.length} showroom)`
                        : cityName;
                    return (
                      <button
                        key={cityName}
                        type="button"
                        className={`finder-option-card ${answers.city === cityName ? 'is-selected' : ''}`}
                        onClick={() =>
                          onStepChange({
                            step: 3,
                            showResults: true,
                            answers: { ...answers, city: cityName },
                          })
                        }
                      >
                        <strong>{displayCity}</strong>
                        <span>
                          {cityName === 'Tất cả tỉnh/thành'
                            ? 'Tìm showroom có xe sẵn trên toàn bộ 6 Thành phố trực thuộc TW'
                            : `Lọc ưu tiên showroom Ford còn xe sẵn tại ${cityName}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="finder-results-body">
              <div className="finder-criteria-summary">
                <span>
                  Ngân sách:{' '}
                  <strong>
                    {BUDGET_OPTIONS.find((b) => b.id === answers.budget)?.label}
                  </strong>
                </span>
                <span>
                  Nhu cầu:{' '}
                  <strong>
                    {PURPOSE_OPTIONS.find((p) => p.id === answers.purpose)?.label}
                  </strong>
                </span>
                <span>
                  Khu vực:{' '}
                  <strong>
                    {answers.city === 'Tất cả tỉnh/thành' ? 'Toàn quốc' : answers.city}
                  </strong>
                </span>
              </div>

              <div className="finder-results-list">
                {recommendations.map((rec, index) => {
                  const isTopPick = index === 0;
                  const branchesPreview = rec.matchingBranches.slice(0, 3);
                  return (
                    <article
                      key={rec.id}
                      className={`finder-result-card ${isTopPick ? 'is-top-pick' : ''}`}
                    >
                      <div className="finder-result-top-badges">
                        <span
                          className={`finder-rank-badge ${isTopPick ? 'is-primary' : 'is-alt'}`}
                        >
                          {isTopPick
                            ? '★ TOP 1 — LỰA CHỌN TỐI ƯU NHẤT'
                            : `LỰA CHỌN THAY THẾ #${index}`}
                        </span>
                        <span className="finder-match-badge">
                          Phù hợp {rec.matchPercent}%
                        </span>
                      </div>

                      <div className="finder-result-main">
                        <div className="finder-result-media">
                          <img
                            src={rec.image}
                            alt={`${rec.carName} - ${rec.displayConfigName}`}
                            onError={(event) =>
                              handleCarImageError(event, rec.carName, rec.car.category)
                            }
                          />
                        </div>

                        <div className="finder-result-info">
                          <h3 className="finder-result-title">
                            {rec.carName}
                            {rec.year ? ` (${rec.year})` : ''} — {rec.displayConfigName}
                          </h3>
                          <p className="finder-result-price">
                            Giá niêm yết: <strong>{formatVND(rec.price)}</strong>
                          </p>

                          <div className="finder-reasons-box">
                            <span className="finder-reasons-label">
                              Vì sao cấu hình này hợp với bạn:
                            </span>
                            <ul className="finder-reasons-list">
                              {rec.reasons.map((reason) => (
                                <li key={reason}>{reason}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="finder-stock-box">
                            <div className="finder-stock-header">
                              <span className="finder-stock-title">
                                Tình trạng sẵn kho tại{' '}
                                {answers.city === 'Tất cả tỉnh/thành'
                                  ? 'Toàn quốc'
                                  : answers.city}
                                :
                              </span>
                              <span
                                className={`branch-status ${
                                  rec.totalCityStock > 0 ? 'is-in' : 'is-out'
                                }`}
                              >
                                {rec.totalCityStock > 0
                                  ? `Còn ${rec.totalCityStock} xe sẵn giao`
                                  : 'Đặt hàng trước'}
                              </span>
                            </div>

                            {branchesPreview.length > 0 && (
                              <div className="finder-branches-preview">
                                {branchesPreview.map((branch) => {
                                  const { primaryAddress, legacyAddress } =
                                    formatBranchAddress(branch.address);
                                  return (
                                    <div
                                      key={branch.branchId}
                                      className="finder-branch-mini"
                                    >
                                      <div className="finder-branch-mini-top">
                                        <strong>
                                          {branch.branch} ({branch.trimQty} chiếc)
                                        </strong>
                                        <div className="finder-branch-colors">
                                          {branch.displayColors.slice(0, 4).map((cName) => (
                                            <span key={cName} className="color-chip">
                                              <span
                                                className="color-dot"
                                                style={{
                                                  backgroundColor:
                                                    COLOR_SWATCHES[cName] || '#94a3b8',
                                                }}
                                              />
                                              {cName}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                      <span className="branch-address-primary">
                                        {primaryAddress}
                                      </span>
                                      {legacyAddress && (
                                        <span className="branch-address-legacy">
                                          {legacyAddress}
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>

                          <div className="finder-result-actions">
                            <button
                              type="button"
                              className="pill-btn pill-btn--navy"
                              onClick={() =>
                                onSelectRecommendation({
                                  car: rec.car,
                                  year: rec.year,
                                  trimIndex: rec.trimIndex,
                                  engineIndex: rec.engineIndex,
                                  color: rec.defaultColor,
                                  city: answers.city,
                                })
                              }
                            >
                              Chọn cấu hình &amp; Đặt giữ xe →
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Bottom Action Bar (iOS Safe Area & Thumb Zone) */}
        <div className="modal-sticky-footer finder-sticky-footer">
          {!showResults ? (
            <>
              <button
                type="button"
                className="pill-btn pill-btn--outline-navy finder-footer-btn"
                disabled={step === 0}
                onClick={onHistoryBack}
              >
                ← Bước trước
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  className="pill-btn pill-btn--navy finder-footer-btn"
                  onClick={() =>
                    onStepChange({
                      step: step + 1,
                      showResults: false,
                      answers,
                    })
                  }
                >
                  Tiếp tục →
                </button>
              ) : (
                <button
                  type="button"
                  className="pill-btn pill-btn--navy finder-footer-btn"
                  onClick={() =>
                    onStepChange({
                      step: 3,
                      showResults: true,
                      answers,
                    })
                  }
                >
                  Xem kết quả đề xuất →
                </button>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                className="pill-btn pill-btn--outline-navy finder-footer-btn"
                onClick={onHistoryBack}
              >
                ← Bước trước
              </button>
              <button
                type="button"
                className="pill-btn pill-btn--outline-navy finder-footer-btn"
                onClick={handleRestart}
              >
                ↺ Làm lại trắc nghiệm
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
