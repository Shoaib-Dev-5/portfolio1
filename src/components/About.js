import React from 'react'
import about_img from '../images/about.png';
import './css/About.css';

export const About = () => {
  return (
    <div>
      <section className='about'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-last right">
              <img src={about_img} alt="" className='img-fluid w-75 mt-5'/>
            </div>
            <div className="col-md-6 order-md-first left mt-auto mb-3">
              <div className=" text">
                 <h2 className='mb-5'>Know Who I'M</h2>
                <p>Hi Everyone, I am <span className='name'>Shoaib Asghar</span> from Punjab, Pakistan.</p>
                <p>I am a computer Science Student Who Just Graduated from Khwaja Freed University of Engineering and information technology,Rahim Yar Khan.I am a highly skilled frontend developer who loves to take on the challenges and then solve them.</p>
                <p>Apart from coding some other activities that i love to do!</p>
                  <li><i class="fa-solid fa-arrow-right"></i> Playing Video Games</li>
                  <li><i class="fa-solid fa-arrow-right"></i> travling</li>
                </div>  
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
