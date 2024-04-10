import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const isValidEmail = (email) => {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError(true);
      toast.error('Incorrect email format, please');
      return;
    }

    if (email.trim() === '') {
      setError(true);
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
        setError(false); 
        toast.success('Your message successfully sent.');
      } else {
        toast.error('Some error occurred.');
      }
    } catch (error) {
      toast.error('Error occurred while sending message.');
    }
  } 

  return (
    <>
      <ToastContainer autoClose={3000} closeOnClick />
      <form onSubmit={handleSubmit} noValidate className={error ? 'error' : ''}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'error' : ''}
        />
        <button type="submit" className='form-submit'>
          <img src="./images/massege-icon.png" alt="icon submit" />
        </button>
      </form>
    </>
  );
}
