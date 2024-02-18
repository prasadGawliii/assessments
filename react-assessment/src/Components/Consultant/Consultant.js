import React from 'react';
import './Consult.css'
import strat_consult from '../Assets/strat.png'
import { Parallax } from 'react-scroll-parallax';

const Consultant = () => {
  return (

    <Parallax translateY={['-20', '20']}>
    <div className='consult-conainer'>
      <img src={strat_consult} alt=""/>
    </div>
    </Parallax>
    
  );
}

export default Consultant;
