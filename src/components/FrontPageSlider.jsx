import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award } from 'lucide-react';

const MEDIA_SLIDES = [
  {
    id: 1,
    type: 'video',
    src: './gallery_video.mp4',
    fallbackSrc: './gallery_video.mov',
    tagline: 'HEAVY PIPELINE & INFRASTRUCTURE',
    titleWhite: 'Spiral Pipe',
    titleBlue: 'Welding',
    description: 'High-performance SAW flux for continuous spiral pipe manufacturing with deep penetration and high deposition rates.',
    accent: '#2563EB',
  },
  {
    id: 2,
    type: 'video',
    src: './home_page_image/media3.mp4',
    fallbackSrc: './home_page_image/IMG_6005.MOV',
    tagline: 'ISO 9001:2015 & BHEL APPROVED',
    titleWhite: 'Agglomerated SAW',
    titleBlue: 'Flux Manufacturer',
    description: "India's premier manufacturer of high-grade AUTOWELD agglomerated submerged arc welding fluxes since 2010.",
    accent: '#06B6D4',
  },
  {
    id: 3,
    type: 'video',
    src: './home_page_image/media4.mp4',
    fallbackSrc: './home_page_image/ScreenRecording_09-06-2026 22-56-59_1.mov',
    tagline: 'HIGH PRESSURE BOILER FABRICATION',
    titleWhite: 'Pressure Vessel &',
    titleBlue: 'Boiler Welding',
    description: 'ASME Sec II C compliant flux formulations engineered for crack-free, high-temperature structural integrity.',
    accent: '#10B981',
  },
  {
    id: 35,
    type: 'video',
    src: './home_page_image/media5.mp4',
    fallbackSrc: './home_page_image/ScreenRecording_09-06-2026 23-06-01_1.mov',
    tagline: 'HIGH STRENGTH STRUCTURAL JOINTS',
    titleWhite: 'Butt Joint',
    titleBlue: 'Welding',
    description: 'Smooth bead appearance and effortless slag detachment across thick structural steel butt welds.',
    accent: '#EC4899',
  },
  {
    id: 4,
    type: 'image',
    src: './home_page_image/IMG_9568.jpg',
    tagline: 'STRONGER STRUCTURES | BETTER TOMORROW',
    titleWhite: 'PEB Structural',
    titleBlue: 'Welding',
    description: 'High-quality welding solutions for Pre-Engineered Buildings with precision, strength and reliability.',
    accent: '#F59E0B',
  },
  {
    id: 60,
    type: 'image',
    src: './home_page_image/IMG_1888.jpg.jpeg',
    tagline: 'AUTOMATED CYLINDER MANUFACTURING',
    titleWhite: 'LPG Cylinder',
    titleBlue: 'Welding',
    description: 'Precision high-speed longitudinal and circumferential seam welding for gas pressure cylinders.',
    accent: '#6366F1',
  },
  {
    id: 5,
    type: 'image',
    src: './home_page_image/IMG_4250.JPG (2).jpeg',
    tagline: 'WATER INFRASTRUCTURE PROJECTS',
    titleWhite: 'Irrigation Pipe',
    titleBlue: 'Welding',
    description: 'Defect-free double submerged arc welding consumables for large diameter water supply pipelines.',
    accent: '#059669',
  },
  {
    id: 6,
    type: 'video',
    src: './home_page_image/media2.mp4',
    fallbackSrc: './home_page_image/IMG_1916.MOV',
    tagline: 'RENEWABLE ENERGY & WIND POWER',
    titleWhite: 'Windmill Tower',
    titleBlue: 'Welding',
    description: 'AUTOWELD Gr-4 flux formulation for sub-zero impact toughness down to -40°C on heavy wind towers.',
    accent: '#D97706',
  },
  {
    id: 7,
    type: 'image',
    src: './home_page_image/IMG_9744.JPG (1).jpeg',
    tagline: 'OFFSHORE & INDUSTRIAL PIPELINES',
    titleWhite: 'Offline Spiral Pipe',
    titleBlue: 'Welding',
    description: 'Dedicated multi-pass SAW flux for heavy wall thickness offline spiral pipe joint welding.',
    accent: '#3B82F6',
  },
  {
    id: 8,
    type: 'video',
    src: './home_page_image/media1.mp4',
    fallbackSrc: './home_page_image/IMG_1909 (2).mov',
    tagline: 'STRICT QUALITY CONTROL & QA',
    titleWhite: 'In-House All-Weld',
    titleBlue: 'Coupon Test',
    description: 'Rigorous 100% batch testing for tensile strength, yield, elongation, and radiographic purity.',
    accent: '#8B5CF6',
  },
];

export default function FrontPageSlider({ onOpenRfq }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const videoRefs = useRef([]);

  // Auto-advance every 5 seconds (5000ms) continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MEDIA_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Ensure current active video plays when slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MEDIA_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MEDIA_SLIDES.length) % MEDIA_SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e) => {
    if (e.targetTouches && e.targetTouches[0]) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.targetTouches && e.targetTouches[0]) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      goToNext(); // Swipe Left -> Next Slide
    } else if (distance < -minSwipeDistance) {
      goToPrev(); // Swipe Right -> Prev Slide
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      className="frontpage-slider-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="slider-media-container">
        {MEDIA_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`slider-slide ${isActive ? 'slide-active' : 'slide-inactive'}`}
            >
              {/* Reference Header Content on Right Side */}
              <div className="slide-content-right">
                <div className="slide-tag-row">
                  <span className="slide-blue-triangle" />
                  <span className="slide-tag-text">{slide.tagline}</span>
                </div>
                <h2 className="slide-hero-title">
                  <span className="title-white">{slide.titleWhite}</span>
                  <span className="title-blue">{slide.titleBlue}</span>
                </h2>
                <p className="slide-description-text">{slide.description}</p>
              </div>

              {slide.type === 'video' ? (
                <>
                  {slide.fit === 'contain' && (
                    <video
                      className="slider-media-bg-blur"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={slide.src} type="video/mp4" />
                      {slide.fallbackSrc && <source src={slide.fallbackSrc} type="video/quicktime" />}
                    </video>
                  )}
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    className="slider-media-el"
                    style={{ objectFit: slide.fit || 'cover' }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={slide.src} type="video/mp4" />
                    {slide.fallbackSrc && <source src={slide.fallbackSrc} type="video/quicktime" />}
                  </video>
                </>
              ) : (
                <>
                  {slide.fit === 'contain' && (
                    <img
                      src={slide.src}
                      alt=""
                      className="slider-media-bg-blur"
                    />
                  )}
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="slider-media-el"
                    style={{ objectFit: slide.fit || 'cover' }}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrow Controls */}
      <button
        className="slider-arrow slider-arrow-left"
        onClick={goToPrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="slider-arrow slider-arrow-right"
        onClick={goToNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Indicators / Points ONLY */}
      <div className="slider-pagination-wrap">
        <div className="slider-dots">
          {MEDIA_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              className={`slider-dot ${idx === currentIndex ? 'dot-active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div className="dot-progress-bg">
                {idx === currentIndex && (
                  <div key={currentIndex} className="dot-progress-fill" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
