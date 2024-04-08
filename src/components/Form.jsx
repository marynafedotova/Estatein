import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const isValidEmail = (email) => {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError(true);
      console.log('Invalid email format');
      toast.error('Incorrect email format, please');
      return;
    }

    if (email.trim() === '') {
      setError(true);
      console.log('Email is empty');
      toast.error('Enter your email, please');
      return;
    }
    setError(false);

    const CHAT_ID = '-1002005768837';
    const BOT_TOKEN = '6752195686:AAEk2PgvXP44n-Tv5IJcvCZCkkHOrzeH7pQ';
    const message = `<b>Email: </b>${email}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;

    try {
      const resp = await fetch(url, { method: 'post' });
      if (resp.ok) {
        setEmail('');
        console.log('Message sent successfully');
        toast.success('Your message successfully sent.');
      } else {
        console.log('Some error occurred while sending message');
        toast.error('Some error occurred.');
      }
    } catch (error) {
      console.error('Error occurred while sending message:', error);
      toast.error('Error occurred while sending message.');
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} noValidate className={error ? 'error' : ''}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'error' : ''}
        />
        <button type="submit" className='form-submit'><img src="public/images/massege-icon.png" alt="icon submit" /></button>
      </form>
    </>
  );
}
