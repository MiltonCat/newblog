/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import 'firebase/auth';
import {useFirebaseApp,useUser } from 'reactfire';


export default (props)=> {
  const [email, setEmail ] = useState('');
  const [passowrd, setPassword ] = useState('');
  const firebase = useFirebaseApp();

  const user= useUser();
  const submit = async ()=>{
   await firebase.auth().createUserWithEmailAndPassword(email,passowrd);
  }
  const logout = async ()=> {
   await firebase.auth().signOut();
  }
  return(
  <div className="footer">
    {!user &&
    <div>
      <div className="contact-wrapper">
        <div className="contact-form">
          <h3>Enviame un mensaje</h3>
          <form action="">
            <p>
            <label htmlFor="email">Correo Electronico</label>
              <input type="email" id="email"  onChange={ (ev)=> setEmail(ev.target.value) }  />
            </p>
            <p>
            <label htmlFor="password">Constraseña</label>
            <input id="password" id="password" onChange={ (ev)=> setPassword(ev.target.value) } />
            </p>
            
          <p className="block">
          <label>Message</label>
            <textarea name="message" row="3"></textarea>
          </p>
            <p className="block">
            <button onClick={submit}> Enviar !!</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Donde estoy !!</h4>
          <ul>
            <li><i className="fas fa-map-marker"></i> San Martin de los andes</li>
            <li><i className="fas fa-phone"></i> +54-2944-301470</li>
            <li><a href="mailto:catalanmilton@gmail.com">
              <i className="fas fa-paper-plane"></i>  Escribime!!</a></li>
          </ul>
          <p>Ponete en contacto si tenes algun proyecto que quieras hacer o por alguna consulta de programacion, y me pondre en contacto con vos !!</p>
        </div>
      </div>
    </div>
    }
    {
      user &&<button onClick={logout}>Cerrar Sesion</button>
    }
  </div>
  )};