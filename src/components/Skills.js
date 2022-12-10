import React from "react";
import jquery from "../images/jquery.png";
import redux from "../images/redux.png";
import mui from "../images/mui.png";
import framer from "../images/framer.png";
import formik from "../images/formik.png";
import react from "../images/atom.png";
import api from "../images/api.png";
import css from "../images/css-3.png";
import html from "../images/html-5.png";
import js from "../images/js.png";
import skill from "../images/skill.png";
import mongodb from "../images/mongodb.png";
import nodejs from "../images/nodejs.png";
import figma from "../images/figma.png";

import "./css/Skills.css";


export const Skills = () => {
  return (
    <div>
      <section className="skill">
        <div className="contaner">
          <div className="row">
            <h2 className="text-center mt-3">SKills</h2>
            <div className="col-md-6">
              <img src={skill} alt="" className="img-fluid" />
            </div>
            <div className="skill-icon col-md-6">
              <div className="col-12 mt-3">
              <img
                  src={react}
                  alt=""
                  className="fa-brands sk-img"
                  title="react"
                />
                <img
                  src={mui}
                  alt="jquery"
                  className="fa-brands sk-img"
                  title="Material UI"
                />
                <img
                  src={framer}
                  alt=""
                  className="fa-brands sk-img"
                  title="Framer Motion"
                />
               
              </div>
              <div className="col-12">
              <img
                  src={nodejs}
                  alt=""
                  className="fa-brands sk-img"
                  title="Nodeja"
                />
              <img
                  src={mongodb}
                  alt=""
                  className="fa-brands sk-img"
                  title="MongoDb"
                />
              <img
                  src={js}
                  alt=""
                  className="fa-brands sk-img"
                  title="Javascript"
                />
              </div>
              <div className="col-12">
              <img
                  src={figma}
                  alt=""
                  className="fa-brands sk-img"
                  title="Figma"
                />
              <img
                  src={html}
                  alt=""
                  className="fa-brands sk-img"
                  title="Html5"
                />
              <img
                  src={css}
                  alt=""
                  className="fa-brands sk-img"
                  title="CSS"
                />
              </div>
              <div className="col-12">
                <i class="fa-brands fa-bootstrap" title="Bootstrap" style={{color:'blue'}}></i>
                <img
                  src={formik}
                  alt=""
                  className="fa-brands sk-img"
                  title="Formik"
                />
                <img
                  src={api}
                  alt=""
                  className="fa-brands sk-img"
                  title="Rest API"
                />
              </div>
              <div className="col-12">
              <img
                  src={redux}
                  alt=""
                  className="fa-brands sk-img"
                  title="Redux"
                />
                <img
                  src={jquery}
                  alt=""
                  className="fa-brands sk-img"
                  title="Jquery"
                />
                <i class="fa-brands fa-github" title="GitHub"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
