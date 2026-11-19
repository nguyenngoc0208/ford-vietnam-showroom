import { useState } from 'react';
import { HERO_SLIDES, handleCarImageError } from '../data/fordCars';

export default function SplitHero({ onExploreCar, onCheckInventory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="top"
      className="split-hero"
      aria-label="Giới thiệu dòng xe Ford nổi bật"
    >
      {/* Bên trái: Ghép ảnh xe & trải nghiệm thực tế */}
      <div className="hero-left">
        <div className="hero-media-stack">
          <div className="hero-media-pane hero-media-pane--top">
            <img
              src={currentSlide.studioImage}
              alt={`${currentSlide.title} - Studio`}
              onError={(event) =>
                handleCarImageError(event, currentSlide.title, 'Ford Studio')
              }
            />
          </div>
          <div className="hero-media-pane hero-media-pane--bottom">
            <img
              src={currentSlide.lifestyleImage}
              alt={`${currentSlide.title} - Trải nghiệm thực tế`}
              onError={(event) =>
                handleCarImageError(
                  event,
                  currentSlide.title,
                  'Trải nghiệm thực tế',
                )
              }
            />
          </div>
        </div>

        <div className="hero-top-scrim" aria-hidden="true" />
        <div className="hero-bottom-scrim" aria-hidden="true" />

        <button
          type="button"
          className="hero-arrow-btn hero-arrow-btn--left"
          onClick={handlePrev}
          aria-label="Slide trước"
        >
          &#8249;
        </button>

        <div className="hero-left-content">
          <span className="hero-eyebrow">READY SET FORD</span>
          <h1 className="hero-model-title">{currentSlide.title}</h1>
          <p className="hero-model-sub">{currentSlide.subtitle}</p>
          <div className="hero-cta-group">
            <button
              type="button"
              className="pill-btn pill-btn--white"
              onClick={() => onExploreCar(currentSlide.carId)}
            >
              Khám phá ngay
            </button>
            <button
              type="button"
              className="pill-btn pill-btn--outline-white"
              onClick={() => onCheckInventory(currentSlide.carId)}
            >
              Báo giá &amp; Tồn kho
            </button>
          </div>
        </div>
      </div>

      {/* Bên phải: Mảng xanh #0068D7 + Khẩu hiệu cỡ lớn */}
      <div className="hero-right">
        <div className="hero-slogan-wrap">
          <p className="hero-slogan">{currentSlide.slogan}</p>
          <button
            type="button"
            className="hero-arrow-btn hero-arrow-btn--right"
            onClick={handleNext}
            aria-label="Slide tiếp theo"
          >
            &#8250;
          </button>
        </div>

        <div className="hero-slide-dots" aria-label="Chọn slide nổi bật">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
