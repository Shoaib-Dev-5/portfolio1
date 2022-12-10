import React from "react";
import { Link } from "react-router-dom";
import "./css/Projects.css";
import project from "../images/project.png";

export const Projects = () => {
  return (
    <div>
      <section className="projects">
        <div className="container">
          <div className="row mt-3">
            <h2>Projects</h2>
            <div className="col-md-6">
              <img src={project} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="w-100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Youtube Clon</h5>
                    <p class="card-text">
                      In This Project, I create Youtube Clon Fully Responsive
                      With The help of Material UI , React js , Rapid API and
                      mony other pakages.
                    </p>
                    <a href="https://github.com/Shoaib-Dev-5/youtube-clon.git" target="_blank" class="btn w-100 me-2">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Google Search Clon</h5>
                    <p class="card-text">
                      In This Project, I Create Google search Web App With the
                      help of Reactjs And Google API.
                    </p>
                    <a href="https://github.com/Shoaib-Dev-5/google-clon.git" target="_blank" class="btn w-100 me-2">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">ToDo APP</h5>
                    <p class="card-text">
                      In This Project, I create ToDo-Web App with the help of
                      Reactjs & Bootstrap5 and mony other pakages.
                    </p>
                    <a href="https://github.com/Shoaib-Dev-5/Todo.git" target="_blank" class="btn w-100 me-2">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">social Media App</h5>
                    <p class="card-text">
                      In This Project, I create Full Stack MERN Web App with
                      React js, Rest API,Nodejs,Expreejs,MongoDb and mony other
                      pakages.
                    </p>
                    <a href="https://github.com/Shoaib-Dev-5/social-media.git" target="_blank" class="btn w-100 me-2">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
