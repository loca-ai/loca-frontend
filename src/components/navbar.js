import React from 'react';
import {CameraFilled, SearchOutlined, StarFilled} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export const NavIcon = styled.div`
    background-color: #F75940;
    border-radius: 50%;
    width: 10%;
    height: 35px;
    color: white;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Navbar() {
    let history = useNavigate();
  return (
    <div style={{padding: '10px', display: 'flex', width: 'calc(100% - 20px)', justifyContent: 'space-between'}}>
        <NavIcon style={{borderRadius: '30px', width: '30%'}} onClick={() => {return history('/explore')}}>
            <CameraFilled />&nbsp;Explore
        </NavIcon>
        <NavIcon onClick={() => {return history('/browse')}}>
            <SearchOutlined />
        </NavIcon>
        <NavIcon onClick={() => {return history('/favorites')}}>
            <StarFilled />
        </NavIcon>
        <NavIcon style={{backgroundColor: '#000'}} 
            onClick={() => {return history('/profile')}}
        >
            M
        </NavIcon>
    </div>
  );
}

export default Navbar;