import React, {useState} from 'react';
import NavBar from './nav/NavBar';

import styled from 'styled-components';

const BannerDiv = styled.div`
    
    border: '1px solid blue',
    width: '30%',
    display: 'flex',
    fontSize: '40px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
`;


function App() {
    const [fixed, setFixedMenu] = useState(false);


  return (
    <div className="App">
        <NavBar/>
        <BannerDiv> SEWOMTHING</BannerDiv>


    </div>
  );
}

export default App;
