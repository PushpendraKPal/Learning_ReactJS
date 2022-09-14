import React from 'react'
import logo from '../logo.svg'
import navStyles from '../style/navbar.module.css';

const Navbar = () => {
  return (
    <div className={navStyles.container}>
        <div className={navStyles.logoContainer}>
            <img className={navStyles.logo} src={logo} alt="Logo" />
            <span className={navStyles.brand}>ReactFacts</span>
        </div>
        <div>
            <span className={navStyles.course}>React Course-Project 1</span>
        </div>
    </div>
  )
}

export default Navbar