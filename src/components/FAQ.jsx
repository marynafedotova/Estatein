import FAQSlider from "./FAQSlider";

export default function FAQ() {
  return <section id="questions">
    <div className="container">
      <div className="star"><img src="public/images/star.png" alt="star icon" /></div>
      <h2>Frequently Asked Questions</h2>
      <div className="subtitle-block">
        <div className="subtitle">Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</div>
      </div>
      <FAQSlider />
    </div>
  </section>
}