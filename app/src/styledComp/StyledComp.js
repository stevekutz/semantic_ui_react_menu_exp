import React from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`  
    
    width: 50%;
    display: flex;
    font-size: 50px;
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const NavDiv = styled.div`
    
    width: 50%;
    display: flex;
    font-size: 20px;
    justify-content: flex-end;
    align-items: center;

`;

const MainDiv = styled.div`
    backgroundImage: "url(https://dribbble.com/shots/3661988-Jungle)";
    backgroundPosition: 'center';
    backgroundSize: 'cover';
    backgroundRepeat: 'no-repeat';
    width: '90%';
    margin: "5px auto";
    position: "absolute";
    zIndex : "-1";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


`;




export {
    BannerDiv,
    NavDiv,
    MainDiv

};