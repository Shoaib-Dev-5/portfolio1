import React from 'react'
import resume from '../images/resume.jpeg';
import home_img from '../images/img1.jpg';
import './css/Home.css';
import { TypeWriter } from './TypeWriter';
import {SiMaterialui} from 'react-icons/si'
export const Home = () => {
  
  return (
    <div>
      <section className='home'>
        <div className="container mt-5">
          <div className="row">
          <div className="col-md-6 left order-md-last mb-5">
           <img src={home_img} alt="Home image" className='img-fluid rounded-1'/>
            <div className="icon">
            <i className="fa-brands fa-react h-i"></i>
            <SiMaterialui className="fa-brands fa-bootstrap  h-i" />
            <i className="fa-brands fa-js h-i"></i>
            </div>
            </div>
            <div className="col-md-6 right mt-auto mb-3">
              <h3>Hi, I'm <span>SHOAIB ASGHAR</span> <br /> and I am <span className='type'>{<TypeWriter/>}</span></h3>
              <p className='mb-2'>A passionate Web developer having a sepecial 
                interest in Frontend technologies and experience of  building web applications
                 with javaScript/React/Bootstrap and some other cool libraries and frameworks.
              </p>
              <a href={resume} download className='btn common-btn w-25 me-3'>Resumme</a>
              <a href="mailto:sasdk7242@gmail.com" className='btn common-btn w-25'>Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
