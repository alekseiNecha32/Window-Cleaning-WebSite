export default function Gallery() {
  return (
    <section id="our-work" className="our-work">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">OUR WORK</span>
          <h2 className="section-title">Before & After Gallery</h2>
          <p className="section-description">See the difference our professional cleaning services make.</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="before-after-slider">
              <div className="before-image">
                <img src={`${import.meta.env.BASE_URL}imgs/before1.jpeg`} alt="Before cleaning" />
                <span className="image-label">Before</span>
              </div>
              <div className="after-image">
                <img src={`${import.meta.env.BASE_URL}imgs/after1.jpeg`} alt="After cleaning" />
                <span className="image-label">After</span>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="before-after-slider">
              <div className="before-image">
                <img src={`${import.meta.env.BASE_URL}imgs/before2.jpeg`} alt="Before cleaning" />
                <span className="image-label">Before</span>
              </div>
              <div className="after-image">
                <img src={`${import.meta.env.BASE_URL}imgs/after2.jpeg`} alt="After cleaning" />
                <span className="image-label">After</span>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="before-after-slider">
              <div className="before-image">
                <img src={`${import.meta.env.BASE_URL}imgs/before3.jpeg`} alt="Before cleaning" />
                <span className="image-label">Before</span>
              </div>
              <div className="after-image">
                <img src={`${import.meta.env.BASE_URL}imgs/after3.jpeg`} alt="After cleaning" />
                <span className="image-label">After</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
