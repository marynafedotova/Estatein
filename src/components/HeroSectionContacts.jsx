

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
          <a href="https://www.google.com/maps/place/American+Swedish+Institute/@44.9571746,-93.2712332,16.5z/data=!3m1!5s0x52b332ace2d540ef:0xbb811745e24043b0!4m15!1m8!3m7!1s0x52b333909377bbbd:0x939fc9842f7aee07!2z0JzRltC90L3QtdCw0L_QvtC70ZbRgSwg0JzRltC90L3QtdGB0L7RgtCwLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!3b1!8m2!3d44.977753!4d-93.2650108!16zL20vMGZwendm!3m5!1s0x52b332acf1a78641:0x4a0b0333b07e8100!8m2!3d44.9545975!4d-93.2658596!16zL20vMDcxOWdu?entry=ttu">
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
