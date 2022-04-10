import React from 'react';
import { connect } from 'react-redux';
import { TextInput } from '../components/inputs';
import {NavIcon} from '../components/navbar';
import {Link, Navigate} from 'react-router-dom';
import {tryLoginUser} from '../middleware/user';

class Login extends React.Component {
    state = {email: "", password: "", error: null, loginSuccess: false};

    componentDidMount() {
        return this.init();
    }

    init = async () => {
        
    };

    handleChangeEmail = async e => {
        await this.setState({
            'email': e.target.value,
        });
    };

    handleChangePassword = async e => {
        await this.setState({
            'password': e.target.value,
        });
    };

    handleLogin = async () => {
        if (this.state.password !== "" && this.state.email !== "") {
            const loginSuccess =  await this.props.tryLoginUser(this.state.email, this.state.password)
            if (loginSuccess === false) {
                this.setState({'error': "Incorrect email or password"})
            } else {
                this.setState({'loginSuccess': true})
            }
        } else {
            this.setState({'error': "Incorrect email or password"})
        }
    }

    render() {
        return(
            <>
                <br />
                <h1 style={{textAlign: 'center', color: "#F75940", margin: '20px', fontSize: '50px'}}>LOCA</h1>
                <div style={{textAlign: 'center'}}>
                    <img src="https://res.cloudinary.com/dou0q4ekk/image/upload/v1649569057/loca_uoddxs.svg" width='30%'/>
                </div>
                <br />
                <div style={{width: '80%', margin: 'auto'}}>
                    {this.state.error !== null && <p>{this.state.error}</p>}
                    <TextInput
                        id={"email"}
                        onChange={this.handleChangeEmail}
                        placeholder={"Email"}
                        value={this.state.email}
                        type={"text"}
                    />
                    <TextInput
                        id={"password"}
                        onChange={this.handleChangePassword}
                        placeholder={"Password"}
                        value={this.state.password}
                        type={"password"}
                    />
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <NavIcon style={{backgroundColor: '#F75940', width: '30%', borderRadius: '30px'}}
                        onClick={this.handleLogin}
                    >
                        Login
                    </NavIcon>
                    </div>
                    <br />
                </div>   
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px', color: '#F75940'}}>
                    <div>
                        Need an account?
                    </div>
                    <Link to='/signup' style={{color: '#F75940'}}>Signup</Link>
                </div> 
                {this.state.loginSuccess && <Navigate to='/' replace={true} />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.get("user")
});

const mapDispatchToProps = dispatch => ({
    tryLoginUser: (email, password) => dispatch(tryLoginUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);