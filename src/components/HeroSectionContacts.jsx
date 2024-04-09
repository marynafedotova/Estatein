

export default function HeroSectionContacts() {
  return (
    <section id="hero-contacts">
      <div className="container">
      <h1>Get in Touch with Estatein</h1>
      <div className="hero-sub">
        Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.
      </div>
      </div>
      <div id="link-contacts">
        <ul>
          <li>
            <a href="mailto:info@estatein.com">
              <div className="link-item">
                <img src="./images/Icon-email.png" alt="icon email" />
                <span className="link-text">info@estatein.com</span>
              </div>
            </a>
          </li>
          <li>
            <a href="tel:+380672244853">
              <div className="link-item">
                <img src="./images/Icon-telephon.png" alt="icon phone" />
                <span className="link-text">+3(80)67-22-44-853</span>
              </div>
            </a>
          </li>
          <li>
          <a href="https://maps.google.com/">
            <div className="link-item">
              <img src="./images/Icon-location.png" alt="icon building" />
                <span className="link-text">Main Headquarters</span>
            </div>
            </a>
          </li>
          <li>
            <div className="link-item">
              <img src="./images/Icon-mediapng.png" alt="icon media" />
              <div className="link-text">
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://www.linkedin.com/">LinkedIn</a>
                <a href="https://www.facebook.com/">Facebook</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
