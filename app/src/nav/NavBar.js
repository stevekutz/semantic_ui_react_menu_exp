import React, {useState} from 'react';
import  {Button, Container, Label, Menu, Segment} from 'semantic-ui-react';
import {
    BannerDiv,
} from '../styledComp/StyledComp';


function NavBar() {
    const [fixed, setFixedMenu] = useState(true);
    

  return (
    <div className="App" style = {{ 
            border: '1px solid deeppink',
            backgroundColor: 'seagreen'
        }}>
        <Segment
            style = {{border: '4px solid darkblue'}}
            
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
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
            <Container style = {{border: '1px solid black', width: '50%'}}>
                <Menu.Item as='a' active>
                Home
                </Menu.Item>
                <Menu.Item as='a'>About</Menu.Item>
                <Menu.Item as='a'>Active Players</Menu.Item>
                <Menu.Item as='a'>All Players</Menu.Item>
                <Menu.Item position='right'>
                <Button as='a' inverted={!fixed}>
                    Log in
                </Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                </Button>
                </Menu.Item>
            </Container>
        </Menu>
    </Segment>
    </div>
  );
}

export default NavBar;