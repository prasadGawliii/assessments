import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Consultant from './Components/Consultant/Consultant';
import { ParallaxProvider } from 'react-scroll-parallax';
import Clients from './Components/clients/Clients';
import Footer from './Components/footer/Footer';
import howl_logo from './Components/Assets/howl logo copy.png'
import React, { useState, useEffect } from 'react';

function App() {

  const [loaded, setLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setContentLoaded(true); 
    }, 2000); 

   
    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    
    if (contentLoaded) {
      const timeout = setTimeout(() => {
        setLoaded(true);
      }, 1); 
      return () => clearTimeout(timeout); 
    }
  }, [contentLoaded]);




  return (
    <div className="App ">

<div className='howl-logo'>


{!loaded && <img src={howl_logo} alt="Logo" className="logo" />}
</div>
      

{ contentLoaded  && ( 

<div>

<ParallaxProvider>
  <Homepage />
  <Consultant />
  <Clients />

  <Footer />
</ParallaxProvider>
</div>
)}
      


    </div>
  );
}

export default App;
