export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#" className="logo">
            <img src={`${import.meta.env.BASE_URL}imgs/logo.png`} alt="Shine Bros" className="logo-img" />
          </a>
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#our-work">Our Work</a>
            <a href="#about">About</a>
            <a href="#quote">Get Quote</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Shine Bros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
