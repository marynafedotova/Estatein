import FormContactPage from "./FormContactPage";
import React from 'react';

export default function ContactsForm() {
  
  return <section id="form" >
  <div className="container">
    <div className="star"><img src="public/images/star.png" alt="star icon" /></div>
    <h2>Let's Connect</h2>
    <div className="subtitle-block">
      <div className="subtitle">We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</div>
    </div>
<FormContactPage />
  </div>
</section>
 
}
