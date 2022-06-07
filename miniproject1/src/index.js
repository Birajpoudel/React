import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'
let curDate= new Date(2022,6,3,20).getHours();
let greetings= ' ';
let cssStyle={};
if(curDate >=1 && curDate < 12){
  greetings='Good Morning'
  cssStyle.color='green';
}else if (curDate >=12 && curDate < 19){
  greetings='Good Afternoon'
  cssStyle.color='orange';
}else{
  greetings='Good Night'
  cssStyle.color='blue';
}


ReactDOM.render(
<>
<div>
  <h1>Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
</div>
</>,
document.getElementById('root')
);
