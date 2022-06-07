

import { useState } from 'react';
import './index.css';

const App = () => {
const [diceNumber, setDiceNumber ] = useState(4)
  return (
    <div>
      <center>
      <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
      <br/>
      <button className='button'>Roll</button>
      </center>
      
      
    </div>
  );
}

export default App;
