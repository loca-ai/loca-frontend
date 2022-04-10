import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar';

class Profile extends React.Component {
    state = {};

    componentDidMount() {
        return this.init();
    }

    init = async () => {
        
    };

    render() {
        return(
            <div>
                <Navbar></Navbar>
                <div style={{padding: '0px 20px'}}>
                    <h2>Profile</h2>
                    <br />
                    <h3 style={{padding: '0px 20px'}}>{this.props.user.get("name")}</h3>
                    <br />
                    <h4 style={{padding: '0px 20px'}}>{this.props.user.get("email")}</h4>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.get("user")
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);