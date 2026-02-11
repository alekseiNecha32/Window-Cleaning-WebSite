export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <span className="section-badge">WHO WE ARE</span>
          <h2 className="section-title">About Shine Bros</h2>
          <p>Shine Bros is dedicated to delivering exceptional window washing and pressure washing services. With experience in the industry, we take pride in our attention to detail and commitment to customer satisfaction.</p>
        </div>
        <div className="about-members">
          <div className="about-member">
            <div className="about-member-image">
              <img src={`${import.meta.env.BASE_URL}imgs/member1.jpeg`} alt="Member 1" className="about-img" />
            </div>
            <h3 className="about-member-name">Michael</h3>
            <p className="about-member-role">Co-Owner</p>
            <p className="about-member-desc">Sophomore at Sycamore High School and a proud co-owner of Shine Bros, where he helps leads the window cleaning division. He believes in hard work, diligence, and reliability—values applied to each and every job. 

</p>
          </div>
          <div className="about-member">
            <div className="about-member-image">
              <img src={`${import.meta.env.BASE_URL}imgs/member2.jpeg`} alt="Member 2" className="about-img" />
            </div>
            <h3 className="about-member-name">Danny Bonn</h3>
            <p className="about-member-role">Co-Owner</p>
            <p className="about-member-desc">Sophomore at Sycamore High School and co-owner of Shine Bros, where he helps lead the window cleaning division. He’s an active person who values hard work, his faith, and family. Danny is passionate about growing the business and takes pride in doing every job the right way, no shortcuts, just shine.

</p>
          </div>
        </div>
        <div className="about-features">
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Eco-Friendly Products</span>
          </div>
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
