import React, { useState } from 'react'
import { data } from './Data'
import {  Link, NavLink } from 'react-router-dom'

export const Menu = () => {
    const[click,setClick]=useState(false);
    

    const clickHandler=()=>{
      setClick(!click);
    }
    const menuList=data.map(({title,url},index)=>{
        return(
            <li key={index}>
                <NavLink exact activeClassName="active" to={url}>{title}</NavLink>
                
            </li>
        )
        
    })
  return (
   <nav>
    <div className="logo">
        <h3><Link to='/'>Saim</Link></h3>
    </div>
    <div className="menu-icon">
    <i  className={click ? 'bi bi-x' :'bi bi-list'} onClick={clickHandler}></i>
    </div>
    <ul className={click ? "menu-list":"menu-list close"}>{menuList}</ul>
   </nav>
  )
}
