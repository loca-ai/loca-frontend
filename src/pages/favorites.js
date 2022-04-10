import React from 'react'
import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import {tryGetRecentTrips} from '../middleware/monuments';
import {setRecognizedMonument} from '../store/monuments'
import {Link} from 'react-router-dom';

class Favorites extends React.Component {
    state = {trips: []}

    componentDidMount() {
        return this.init();
    }

    init = async () => {
        let trips = await this.props.tryGetRecentTrips(this.props.user.get("id"))
        this.setState({trips: trips})
    };

    render() {
        return(
            <div>
                <Navbar></Navbar>
                <div style={{padding: '0px 20px'}}>
                    <h2>Your recent trips</h2>
                    <br />
                    {this.state.trips.map((t, i) => (
                        <div key={i}>
                            <h3 style={{padding: '0px 20px'}}>{t.city}</h3>
                            <br />
                            {t.monuments.map((m, mi) => (
                                <div key={mi} onClick={() => this.props.setRecognizedMonument(m)}>
                                    <Link to={"/learn"} style={{padding: '10px 20px', color: '#F75940'}}>{m.name}</Link>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.get("user")
});

const mapDispatchToProps = dispatch => ({
    tryGetRecentTrips: (id) => dispatch(tryGetRecentTrips(id)),
    setRecognizedMonument: (monument) => dispatch(setRecognizedMonument(monument))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);