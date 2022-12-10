import React from 'react'
import './css/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
  <div class="container">
    <Link class="logo" to="/">Saim</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <NavLink class="nav-link " to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/skills">Skills</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/projects">Projects</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link me-3" to="/contect">Contect</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
