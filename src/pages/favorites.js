import React from 'react'
import { connect } from 'react-redux';
import Navbar, {PageFit} from '../components/navbar';
import {tryGetRecentTrips} from '../middleware/monuments';
import {setRecognizedMonument} from '../store/monuments'
import {Link} from 'react-router-dom';
import { StarOutlined } from '@ant-design/icons';

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
            <PageFit>
                <Navbar></Navbar>
                <div style={{padding: '0px 20px'}}>
                    <h2>Your recent trips</h2>
                    <br />
                    {this.state.trips.map((t, i) => (
                        <>
                            <div key={i} style={{backgroundColor: '#F3F4F5', padding: '15px', borderRadius: '20px'}}>
                                <h3>{t.city}</h3>
                                <br />
                                {t.monuments.map((m, mi) => (
                                    <div key={mi} onClick={() => this.props.setRecognizedMonument(m)}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', color: '#F75940', alignItems: 'center'}}>
                                            <><Link to={"/learn"} style={{padding: '10px 0px', color: '#F75940'}}>{m.name}</Link></>
                                            <StarOutlined />
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                            <br />
                        </>
                    ))}
                </div>
            </PageFit>
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