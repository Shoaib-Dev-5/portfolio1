import React from "react";
import "./css/Contect.css";
import contect_img from "../images/contect.jpg";
import { useState } from "react";

export const Contect = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[massage,setMassage]=useState('');

  return (
    <section className="contect container">
      <div className="row">
        <div className="col-sm-6 my-auto">
          <form  action="https://formspree.io/f/xrgdnrzb" method="POST">
            <h2 className="text-center">Get In Touch</h2>
            <input type="text" name="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" required name="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
           <textarea  className="mb-2" name="text-area" cols="30" rows="5" placeholder="Type Massage Here" value={massage} onChange={(e)=>setMassage(e.target.value)} />
            <div class="btn-box">
              <button class="common-btn" type="submit">Send</button>
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          <img src={contect_img} className="img-fluid my-5" alt="" />
        </div>
      </div>
    </section>
  );
};
