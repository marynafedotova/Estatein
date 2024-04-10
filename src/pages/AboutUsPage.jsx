import React from 'react';
import Journey from '../components/Journey.jsx'
import Values from '../components/Values';
import Achievements from '../components/Achiviements.jsx';
import Navigating from '../components/Navigating';
import Team from '../components/Team';
import ValuedClients from '../components/ValuedClients';
import {ToastContainer } from 'react-toastify';


export default function AboutUsPage() {
  return (<>
     <Journey /> 
     <Values />
     <Achievements />
     <Navigating />
     <Team />
     <ValuedClients />
     <ToastContainer />
</>
  );
}
