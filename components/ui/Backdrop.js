import React from 'react';

import ReactDOM from 'react-dom';
import Head from 'next/head'

import './Backdrop.module.css';


const Backdrop = props => {
 <Head><div id='backdrop-hook'></div></Head>
 return ReactDOM.createPortal(
 
   <div className="backdrop" onClick={props.onClick}></div>,
  
  document.getElementById('backdrop-hook')
  );

}
;

export default Backdrop;
