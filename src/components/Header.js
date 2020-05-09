/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import  '../assets/styles/components/Header.css';
import Avatar from './avatar';
import Redes from './Redes';
import Market from './Market';
import Tech from './Tech';




function Header (){
return(
    <div className="blog">
    <div className="home">
      <div className="content-left">
        <div className="content-left-wrapper">
          <header>
            <div className="toggle-holder hide-only-on-desktop">
              <div id="toggle">
                <div className="menu-line">

                </div>
              </div>
              <div className="top-pagination hide-on-mobile">
                <ul className="main-menu sm sm-clean">
                  <li>
                    <a href="/" className="active--exact active"> Home</a>
                  </li>
                  <li>
                    <a href="/" className="active--exact active"> Sobre mi</a>
                  </li>
                  <li>
                    <a href="/" className="active--exact active"> MKT</a>
                  </li>
                  <li>
                    <a href="/" className="active--exact active"> Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="content-right">
        <div className="content-right-wrapper">
          <div id="home" className="section full-width-section">
            <div className="section-wrapper block">
              <div className="home-left-part">
                <p className="site-des">Bienvenido mi Nombre es:</p>
                <h1 className="entry-title">Milton Catalan</h1>
                <p className="entry-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur ullam doloribus harum hic voluptatibus voluptates, accusamus error? Sequi fugit ipsum est? Praesentium dolorem blanditiis omnis dolorum labore sequi odit.
                </p>
                <Avatar/>
               <Redes/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Market/>
    <Tech />
  </div>
)
};

export default Header;