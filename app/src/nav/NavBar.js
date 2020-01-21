import React, {useState} from 'react';
import  {Button, Container, Label, Menu, Segment, Dropdown} from 'semantic-ui-react';
import {
    BannerDiv,
    NavDiv
} from '../styledComp/StyledComp';


function NavBar() {
    const [fixed, setFixedMenu] = useState(true);
    

  return (
    <div className="App" style = {{ 
            border: '1px solid deeppink',
            width: '90%'
        }}>
        <Segment
            //style = {{border: '4px solid darkblue'}}
            
            //textAlign='center'
            //style={{ minHeight: 700, padding: '1em 0em' }}
            //vertical
        > 
        
        <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
            position = 'right'
        >
            <BannerDiv> Djungle Maze</BannerDiv>
            <NavDiv>
                <Button style = {{backgroundColor: '#00b377'}}>
                    Log in
                </Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em', marginRight: '5.5em' }}>
                    Sign Up
                </Button>
                
                <Dropdown text = 'Player Info' button>    
                    <Dropdown.Menu>
                    <Menu.Item as='a' active>
                    Home
                    </Menu.Item>
                    <Menu.Item as='a'>Active Players</Menu.Item>
                    <Menu.Item as='a'>All Players</Menu.Item>
                    <Menu.Item position='right'>
                    </Menu.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button style = {{backgroundColor: '#ffcc00'}}>
                    About
                </Button>

            </NavDiv>
        </Menu>
            
    </Segment>
    </div>
  );
}

export default NavBar;

// #ffcc00
// #66b3ff