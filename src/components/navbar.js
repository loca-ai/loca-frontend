import React from 'react';
import {CameraFilled, SearchOutlined, StarFilled} from '@ant-design/icons'
import { connect } from 'react-redux';
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
    font-size: 20px;
`;

export const PageFit = styled.div`
    @media screen and (min-width: 860px) {
        margin: 10px 20%;
    }
`;

const Navbar = ({user}) => {
    let history = useNavigate();
    return (
        <div style={{padding: '10px', paddingBottom: '20px', display: 'flex', width: 'calc(100% - 20px)', justifyContent: 'space-between'}}>
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
                {user.get("name").substring(0, 1).toUpperCase()}
            </NavIcon>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.get("user")
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);