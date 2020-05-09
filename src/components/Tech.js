/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../assets/styles/components/Tech.css';
import js from '../assets/static/javascript1.png';
import css from '../assets/static/css.png';
import node from '../assets/static/nodejs.png';
import react from '../assets/static/react.png';
import ts from '../assets/static/typescript.png';
import mongo from '../assets/static/mongo.png';
import smile from '../assets/static/smile3.png';

function Tech () {
  return(
<section className="main">
    <h2 className="row">Tech Stack</h2>
    <div className="experiencia">
      <div className="datos">
        <p className="section-info">Estos son los lenguajes y framework favoritos, y los que uso mas en mis proyectos.</p>
       <div className="one-half-resp">
       <br/>
       <div className="skill">
          <div className="skill-holder">
            <div className="skill-image">
              <img src={react}/>
              </div>
              <br/>
          <div className="skill-text">
            <span>React.js</span>
              </div>
                </div>
                 </div>
             <br/>
              <div className="skill">
                <div className="skill-holder">
                  <div className="skill-image">
                  <img src={css}></img>
                  </div>
                  <div className="skill-text">
                    <span>Css3</span>
                  </div>
                </div>
              </div>
              <br/>
              <div className="skill">
                <div className="skill-holder">
                  <div className="skill-image">
                  <img src={mongo}></img>
                  </div>
                  <div className="skill-text">
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
       </div>
        <br/>
        <div className="one-half-resp">
        <div className="skill">
          <div className="skill-holder">
            <div className="skill-image">
            <img src={js}></img>
            </div>
            <div className="skill-text">
              <span>Javascritp</span>
            </div>
          </div>
        </div>
       <br/>
        <div className="skill">
          <div className="skill-holder">
            <div className="skill-image">
            <img src={ts}></img>
            </div>
            <div className="skill-text">
              <span>Typescript</span>
            </div>
          </div>
        </div>
        <br/>
        <div className="skill">
          <div className="skill-holder">
            <div className="skill-image">
            <img src={node}/>
            </div>
            <div className="skill-text">
              <span>Node.js</span>
            </div>
          </div>
        </div>
        
        </div>
        
      </div>
    </div>
  </section>
 ) }

 export default Tech;