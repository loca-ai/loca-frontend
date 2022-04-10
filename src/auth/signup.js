import React from 'react';
import { connect } from 'react-redux';
import { TextInput } from '../components/inputs';
import {NavIcon} from '../components/navbar';
import {Link, Navigate} from 'react-router-dom';

class CreateAccount extends React.Component {
    state = {email: "", password: "", password2: "", validLogin: true, name: "", error: null, success: false};

    componentDidMount() {
        return this.init();
    }

    init = async () => {
        
    };

    handleChangeEmail = async e => {
        await this.setState({
            'email': e.target.value,
            'validLogin': e.target.value !== '',
        });
    };

    handleChangePassword = async e => {
        await this.setState({
            'password': e.target.value,
            'validLogin': e.target.value !== '',
        });
    };

    handleChangePassword2 = async e => {
        await this.setState({
            'password2': e.target.value,
            'validLogin': e.target.value !== '',
        });
    };

    handleChangeName = async e => {
        await this.setState({
            'name': e.target.value,
            'validLogin': e.target.value !== '',
        });
    }

    handleCreate = async () => {
        if (this.state.validLogin && this.state.password === this.state.password2) {
            console.log("success")
            this.setState({'success': true})
            //await this.props.tryCreateUser(this.state.name, this.state.password)
            //return this.props.history.push('/login')

        } else if (this.state.password !== this.state.password2){
            this.setState({"error": "Passwords must match"})
        } else {
            this.setState({"error": "Something went wrong. Try again."})
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
                    <TextInput
                        id={"name"}
                        onChange={this.handleChangeName}
                        placeholder={"Full name"}
                        value={this.state.name}
                        type={"text"}
                    />
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
                    <TextInput
                        id={"password2"}
                        onChange={this.handleChangePassword2}
                        placeholder={"Confirm Password"}
                        value={this.state.password2}
                        type={"password"}
                    />
                    <br />
                    {this.state.error !== null && <p>{this.state.error}</p>}
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <NavIcon style={{backgroundColor: '#F75940', width: '30%', borderRadius: '30px'}}
                        onClick={this.handleCreate}
                    >
                        Signup
                    </NavIcon>
                    </div>
                    <br />
                </div>   
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px', color: '#F75940'}}>
                    <div>
                        Have an account?
                    </div>
                    <Link to='/login' style={{color: '#F75940'}}>Login</Link>
                </div> 
                {this.state.success && <Navigate to='/login' replace={true} />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    //tryCreateUser: (name, password) => dispatch(tryCreateUser(name, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);