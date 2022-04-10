import React from 'react';
import { connect } from 'react-redux';
import Navbar, {NavIcon} from '../components/navbar';
import {Navigate} from 'react-router-dom';
import {setStoreReset} from '../store/user';

class Profile extends React.Component {
    state = {logout: false};

    logout = async () => {
        await this.props.setStoreReset()
        this.setState({logout: true})
    }

    render() {
        return(
            <div>
                <Navbar></Navbar>
                <div style={{padding: '0px 20px'}}>
                    <h2>About You</h2>
                    <br />
                    <div style={{backgroundColor: '#F3F4F5', padding: '15px', borderRadius: '20px'}}>
                        <h3 style={{padding: '0px 20px'}}>{this.props.user.get("name")}</h3>
                        <br />
                        <h4 style={{padding: '0px 20px'}}>{this.props.user.get("email")}</h4>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <NavIcon style={{backgroundColor: '#000', width: '30%', borderRadius: '30px'}}
                        onClick={this.logout}
                    >
                        Logout
                    </NavIcon>
                    {this.state.logout && <Navigate to='/login' replace={true} />}
                </div>
                <br />
                <div style={{padding: '0px 20px'}}>
                    <h2>About Us</h2>
                    <br />
                    <div style={{backgroundColor: '#F3F4F5', padding: '15px', borderRadius: '20px'}}>
                        <h4 style={{padding: '0px 20px'}}>{"Learn more about public art and monuments through your lense"}</h4>
                        <br />
                        <h4 style={{padding: '0px 20px'}}>{"Created for YHack 2022 by Diana Kulmizev, Gwendolyn Payne, Joshua Qin, and Nicholas Miklaucic"}</h4>
                    </div>
                    <br />
                    <div style={{textAlign: 'center'}}>
                        <img src="https://res.cloudinary.com/dou0q4ekk/image/upload/v1649569057/loca_uoddxs.svg" width='30%'/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.get("user")
});

const mapDispatchToProps = dispatch => ({
    setStoreReset: () => dispatch(setStoreReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);