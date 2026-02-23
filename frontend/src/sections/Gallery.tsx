import { useState, useCallback } from 'react';

 const beforeAfterImages = [
  { before: 'before1.jpeg', after: 'after1.jpeg' },
  { before: 'before2.jpeg', after: 'after2.jpeg' },
  { before: 'before3.jpeg', after: 'after3.jpeg' },
  { before: 'beforeAfter/before4.jpeg', after: 'beforeAfter/after4.jpeg' },
  { before: 'beforeAfter/before5.jpeg', after: 'beforeAfter/after5.jpeg' },
];

type ViewMode = 'beforeAfter' | 'how';

export default function Gallery() {
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('beforeAfter');
  const [flowing, setFlowing] = useState(false);

  const flowTransition = useCallback((update: () => void) => {
    if (flowing) return;
    setFlowing(true);
    setTimeout(() => {
      update();
      setTimeout(() => setFlowing(false), 50);
    }, 400);
  }, [flowing]);

  const handlePrev = () => {
    if (viewMode !== 'beforeAfter') return;
    flowTransition(() => {
      setBeforeAfterIndex((prev) => (prev === 0 ? beforeAfterImages.length - 1 : prev - 1));
    });
  };

  const handleNext = () => {
    if (viewMode !== 'beforeAfter') return;
    flowTransition(() => {
      setBeforeAfterIndex((prev) => (prev === beforeAfterImages.length - 1 ? 0 : prev + 1));
    });
  };

  const getVisibleImages = () => {
    const images = beforeAfterImages.map((img, i) => ({ id: i, ...img }));
    const total = images.length;
    const prevIdx = (beforeAfterIndex - 1 + total) % total;
    const nextIdx = (beforeAfterIndex + 1) % total;

    return {
      prev: images[prevIdx],
      current: images[beforeAfterIndex],
      next: images[nextIdx],
    };
  };

  const visibleImages = getVisibleImages();

  return (
    <section id="our-work" className="our-work">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">GALLERY</span>
          <h2 className="section-title">Our Work</h2>
          <p className="section-description">See the difference our professional cleaning services make.</p>
        </div>

        <div className="gallery-slider">
          <div className="slider-toggle-buttons">
            <button
              className={`toggle-btn before-after-btn ${viewMode === 'beforeAfter' ? 'active' : ''}`}
              onClick={() => setViewMode('beforeAfter')}
            >
              Before/After
            </button>
            <button
              className={`toggle-btn how-btn ${viewMode === 'how' ? 'active' : ''}`}
              onClick={() => setViewMode('how')}
            >
              How
            </button>
          </div>

          <div className={`carousel-container ${flowing ? 'flowing' : ''}`}>
            {viewMode === 'beforeAfter' ? (
              <>
                <div className="carousel-slide carousel-slide-prev">
                  <div className="before-after-pair">
                    <div className="pair-image">
                      <img src={`${import.meta.env.BASE_URL}imgs/${(visibleImages.prev as any).before}`} alt="Before" />
                      <span className="image-label">Before</span>
                    </div>
                    <div className="pair-image">
                      <img src={`${import.meta.env.BASE_URL}imgs/${(visibleImages.prev as any).after}`} alt="After" />
                      <span className="image-label after-label">After</span>
                    </div>
                  </div>
                </div>
                <div className="carousel-slide carousel-slide-center">
                  <div className="before-after-pair">
                    <div className="pair-image">
                      <img src={`${import.meta.env.BASE_URL}imgs/${(visibleImages.current as any).before}`} alt="Before" />
                      <span className="image-label">Before</span>
                    </div>
                    <div className="pair-image">
                      <img src={`${import.meta.env.BASE_URL}imgs/${(visibleImages.current as any).after}`} alt="After" />
                      <span className="image-label after-label">After</span>
                    </div>
                  </div>
                </div>
                <div className="carousel-slide carousel-slide-next">
                  <div className="before-after-pair">
                    <div className="pair-image">
                      <img src={`${import.meta.env.BASE_URL}imgs/${(visibleImages.next as any).before}`} alt="Before" />
                      <span className="image-label">Before</span>
                    </div>
                    <div className="pair-image">
                      <img src={`${import.meta.env.BASE_URL}imgs/${(visibleImages.next as any).after}`} alt="After" />
                      <span className="image-label after-label">After</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="how-video-container">
                <video
                  src={`${import.meta.env.BASE_URL}imgs/video/IMG_6306.MOV`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="how-video"
                />
              </div>
            )}
          </div>

          {viewMode === 'beforeAfter' && <div className="carousel-arrows">
            <button className="carousel-arrow" onClick={handlePrev} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button className="carousel-arrow" onClick={handleNext} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>}
        </div>
      </div>
    </section>
  );
}
