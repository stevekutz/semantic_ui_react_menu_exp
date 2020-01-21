import React, {useState} from 'react';
import NavBar from './nav/NavBar';
import jungle from './background_jungle_01.png';

import {
    MainDiv
} from './styledComp/StyledComp';


function App() {
    const [fixed, setFixedMenu] = useState(false);


  return (
    <div style = {{width: "80%", margin: '10px auto'}}>
        <NavBar/>

    </div>
  );
}

export default App;
