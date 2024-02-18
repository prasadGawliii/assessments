import React from 'react';
import client_heading from '../Assets/HeadingText.png'
import client_image from '../Assets/clientImage.png'
import C from '../Assets/C.png'
import D from '../Assets/D.png'
import E from '../Assets/E.png'
import F from '../Assets/F.png'
import G from '../Assets/G.png'
import H from '../Assets/H.png'
import I from '../Assets/I.png'
import J from '../Assets/J.png'
import K from '../Assets/K.png'
import L from '../Assets/L.png'
import './Clients.css'
import { Parallax } from 'react-scroll-parallax';



const Clients = () => {

  return (

<Parallax translateX={['-80', '90']} >

<div className='client-container'>

<div className='heading'>
<img src={client_heading} alt=""/>

</div>


<div className='client-images'>

<div className='client-images1'>
<img src={client_image} alt=""/>
<img src={client_image} alt=""/>
<img src={C} alt=""/>
<img src={D} alt=""/>
<img src={E} alt=""/>
<img src={F} alt=""/>
<img src={F} alt=""/>

</div>


<div className='client-images2'>

<img src={G} alt=""/>
<img src={G} alt=""/>
<img src={H} alt=""/>
<img src={I} alt=""/>
<img src={J} alt=""/>
<img src={K} alt=""/>
<img src={L} alt=""/>

</div>

</div>

    </div>

    </Parallax>


  );
}

export default Clients;
