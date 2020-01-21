import React, {useState} from 'react';
import NavBar from './nav/NavBar';


function App() {
    const [fixed, setFixedMenu] = useState(false);


  return (
    <div>
        <NavBar/>

    </div>
  );
}

export default App;
