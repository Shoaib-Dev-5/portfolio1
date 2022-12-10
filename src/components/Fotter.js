import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
export const Fotter = () => {
  return (
    <div className='footer mb-0'>
      <div className='social'>
      <a href='https://github.com/Shoaib-Dev-5' target="_blank"><i class="bi bi-github"></i></a>
      <a href='https://instagram.com/saim_sarkar55?igshid=YmMyMTA2M2Y=' target="_blank"><i class="bi bi-instagram"></i></a>
      <a href='https://www.linkedin.com/in/shoaib-asghar-815355234' target="_blank"> <i class="bi bi-linkedin"></i></a>
      <a href='https://www.facebook.com/mubsher.rauf' target="_blank">      <i class="bi bi-facebook"></i></a>
      <a href='mailto:sasdk7242@gmail.com' target="_blank">  <i class="bi bi-envelope-fill"></i>    </a>      
      </div>
      <p><code>&lt;/&gt;</code> with <i class="bi bi-suit-heart-fill"></i> by 
      <span className='name'>Shoaib Asghar</span>
            using  <span className='react'>React</span>
      </p>
    </div>
  )
}
