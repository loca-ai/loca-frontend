import React from 'react';
import { connect } from 'react-redux';
import Navbar, {NavIcon} from '../components/navbar';
import {SearchInput} from '../components/inputs'
import {devLocations, devMonuments} from '../static/dev'

const backgroundColorPicker = (n) => {
    if (n % 3 === 0) {
        return "#dddfe1"
    } else if ((n - 1) % 3 === 0) {
        return "#F75940"
    } else {
        return "#000"
    }
}

class Browse extends React.Component {
    state = {nearbyMonuments: [], latitude: 0, longitude: 0};

    componentDidMount() {
        return this.init();
    }

    init = async () => {
        let lat;
        let long;
        await navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude
            long = position.coords.longitude
        });
        this.setState({latitude: lat, longitude: long})
        return this.setState({"nearbyMonuments": devMonuments})
    };


    render() {
        return(
            <div>
                <Navbar></Navbar>
                <h2 style={{padding: '0px 20px'}}>Near me</h2>
                <div style={{padding: '5px 20px'}}>
                    <SearchInput
                        searchOptions={devLocations}
                        id={'search-items'}
                        value={""}
                        placeholder={"Search..."}
                        onSelect={() => {}}
                    />
                </div>
                {this.state.nearbyMonuments.map((m, i) => {
                    const bcolor = backgroundColorPicker(i)
                    const button = backgroundColorPicker(i + 1)
                    let fontcolor = "#000";
                    if (bcolor === "#000") {
                        fontcolor = "#fff"
                    }

                    return(
                        <div key={i}>
                            <div style={{display: 'flex', backgroundColor: bcolor, padding: '20px', color: fontcolor}}>
                                <img src={m.img} alt={m.name} width={'30%'}/>
                                &nbsp;&nbsp;
                                <div>
                                    <h4>{m.name}</h4>
                                    <p>{m.desc}</p>
                                    <br />
                                    
                                </div>
                                <NavIcon style={{backgroundColor: button, width: '30%', borderRadius: '30px', alignSelf: "flex-end"}}
                                    onClick={async () => {}}
                                >
                                    View
                                </NavIcon>
                            </div>
                            <br />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);