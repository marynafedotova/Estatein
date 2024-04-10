
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    referralSource: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { firstName, lastName, email, phone, inquiryType, referralSource, message } = formData;
    

    if (firstName.trim().length < 1 || !/^[a-zA-Z]+$/.test(firstName.trim())) {
      toast.error('Please enter a valid first name.');
      return; 
    }
    if (lastName.trim().length < 1 || !/^[a-zA-Z]+$/.test(lastName.trim())) {
      toast.error('Please enter a valid last name.');
      return;
    }
    if (phone.trim().length < 10) { 
      toast.error('Please enter a valid phone number.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    const messageText = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Inquiry Type: ${inquiryType}
      Referral Source: ${referralSource}
      Message: ${message}
    `;

    try {
      const CHAT_ID = '-1002005768837'; 
      const BOT_TOKEN = '6752195686:AAEk2PgvXP44n-Tv5IJcvCZCkkHOrzeH7pQ'; 
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(messageText)}`;

      const response = await fetch(url, { method: 'POST' });
      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          inquiryType: '',
          referralSource: '',
          message: ''
        });
        toast.success('Your message has been sent successfully!');
      } else {
        toast.error('There was an error while sending your message. Please try again later.');
      }
    } catch (error) {
      toast.error('There was an error while sending your message. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} id='my-form'>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          required
        />
      </div>
      <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <InputMask
            mask="+99(999)-99-99-999"
            maskChar=" "
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </div>
      <div className="form-group">
        <label htmlFor="inquiryType">Inquiry Type</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Inquiry Type</option>
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="referralSource">How Did You Hear About Us?</label>
        <input
          type="text"
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          placeholder="Enter Referral Source"
        />
      </div>
      <div className='form-message'>
        <div className="form-group submit">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message here.."
            required
          />
            <button id='submit-form' type="submit">Submit</button>
          </div>

      </div>

    </form>
    </>
  );
};

export default ContactForm;
