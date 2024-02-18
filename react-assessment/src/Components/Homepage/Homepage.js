import React from 'react';
import './Home.css'
import howl_logo from '../Assets/howl logo copy.png'
import rectangle from '../Assets/Rectangle 130.png'
import rectangle_130_copy from '../Assets/Rectangle 130 copy.png'
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import { Parallax } from 'react-scroll-parallax';
function Homepage() {




    return (

        <Parallax translateY={[-60, 60]} style={{ height: "100vh" }}>

            <div className='Header'>

                <div className='Header-container'>

                    <img src={howl_logo} alt="" />

                </div>


                <div className='options-container'>

                    <img src={rectangle} alt="" />
                    <img src={rectangle_130_copy} alt="" />

                </div>

            </div>



            <div className='body'>

                <div className='body-start-text'>

                    <span>We exist because we want to help you navigate </span>
                    <span>and harness the potential of this ever-changing</span>
                    <span style={{ marginLeft: "-110px" }}>digital landscape</span>

                </div>


                <div className='body-label'>

                    <div className='body-label-your'> <span>Your</span> </div>
                    <div className='body-label-growth'> <span>Growth</span> </div>
                    <div className='body-label-partners'> <span>Partners</span> </div>

                </div>

                <div className='body-label-images'>

                    <div className='body-label-image1'> <img src={image1} alt="" /> </div>
                    <div className='body-label-image2'> <img src={image2} alt="" /> </div>
                </div>

                <div className='body-label-bottom'>

                    <span>It's not a game of guesses , it's a game of numbers where growth is the</span>
                    <span style={{ marginLeft: "-12px" }}>ultimate goal. We leverage cuttin-edge technology and data-driven</span>
                    <span style={{ marginLeft: "-47px" }}>insights to help you answer questions that unlock growth</span>

                </div>














            </div>

        </Parallax>
    );
}

export default Homepage;
