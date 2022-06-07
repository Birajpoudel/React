import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const name="Biraj"
const link = "https://facebook.com"
const currenttime= new Date().toLocaleDateString();
const currentdate= new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/201/300";
const img3="https://picsum.photos/202/300";
const img4="https://picsum.photos/203/300";
const img5="https://picsum.photos/204/300";
const img6="https://picsum.photos/205/300";
const heading1 ={
  color:"#fa9191",
  textTransform:"capitalize",
  textAlign:"center"
}

ReactDOM.render(
  <>
  <h1 style={heading1} >My name is {name}</h1>
  <p className='heading'>Current time is ={currenttime}</p>
  <p className='heading'>Current date is ={currentdate}</p>
  <img src={img1} alt="randomImages"/>
  <img src={img2} alt="randomImages"/>
  <img src={img3} alt="randomImages"/>
  <img src={img4} alt="randomImages"/>
  <img src={img5} alt="randomImages"/>
  <a href={link}   rel="noreferrer" target="_blank">  <img src={img6} alt="randomImages"/>
  </a>
  </>,
  document.getElementById("root")
);