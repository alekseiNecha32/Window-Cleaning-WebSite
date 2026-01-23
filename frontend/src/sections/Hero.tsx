import QuoteForm from '../components/QuoteForm';

interface HeroProps {
  onFormSuccess: () => void;
}

export default function Hero({ onFormSuccess }: HeroProps) {
  return (
    <section className="hero-combined" id="quote">
      <div className="hero-image-side">
        <img src={`${import.meta.env.BASE_URL}imgs/us.jpg`} alt="Shine Bros Team" />
      </div>
      <div className="hero-content-side">
        <div className="hero-text-section">
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 3L5.5 5L7 5.5L5.5 6L5 8L4.5 6L3 5.5L4.5 5L5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>PROFESSIONAL CLEANING SERVICES</span>
          </div>
          <h1 className="hero-landing-title">Shine <span>Bros</span></h1>
          <p className="hero-location">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px', marginRight: '6px', verticalAlign: 'middle'}}>
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Blue Ash/Montgomery
          </p>
          <p className="hero-landing-description">Crystal clear windows and pristine surfaces. We bring the shine to your home and business.</p>
          <div className="hero-landing-buttons">
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
        <QuoteForm onSuccess={onFormSuccess} />
      </div>
    </section>
  );
}
