// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import  '../assets/styles/components/Footer.css';
import Auth from '../Auth';
import {
  useFirebaseApp
}from 'reactfire';
import { useUser } from 'reactfire';

function Footer (){
  const user =useUser();
  const firebase = useFirebaseApp();
  console.log(firebase);
return(
  <div className="footer">
  { user && <p>Usuario: {user.email}</p> }
    <Auth />
   </div>

)};


export default Footer;