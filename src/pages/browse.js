import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Navbar, {NavIcon} from '../components/navbar';
import { useNavigate } from "react-router-dom";
// import {SearchInput} from '../components/inputs'
// import {devLocations} from '../static/dev'
import {tryGetNearbyMonuments} from '../middleware/monuments';
import {setRecognizedMonument} from '../store/monuments';
import {EnvironmentFilled} from '@ant-design/icons';

const backgroundColorPicker = (n) => {
    if (n % 3 === 0) {
        return "#dddfe1"
    } else if ((n - 1) % 3 === 0) {
        return "#F75940"
    } else {
        return "#000"
    }
}

const Browse = ({tryGetNearbyMonuments, setRecognizedMonument}) => {
    const [location, setLocation] = useState(null);
    const [nearbyMonuments, setNearbyMonuments] = useState([]);
    let history = useNavigate();

    useEffect(() => {

        async function getNearby() {
            const m = await tryGetNearbyMonuments(location)
            setNearbyMonuments(m)
        }

        navigator.geolocation.getCurrentPosition(function(position) {
            setLocation(position)
        });
        getNearby()

    }, []);

    return(
        <div>
            <Navbar></Navbar>
            <h2 style={{padding: '0px 20px'}}>Near me</h2>
            <br />
            {/* <div style={{padding: '5px 20px'}}>
                <SearchInput
                    searchOptions={devLocations}
                    id={'search-items'}
                    value={""}
                    placeholder={"Search..."}
                    onSelect={() => {}}
                />
            </div> */}
            {nearbyMonuments.map((m, i) => {
                const bcolor = backgroundColorPicker(i)
                const button = backgroundColorPicker(i + 1)
                let fontcolor = "#000";
                if (bcolor === "#000") {
                    fontcolor = "#fff"
                }

                return(
                    <div key={i}>
                        <div style={{display: 'flex', backgroundColor: bcolor, padding: '15px', color: fontcolor, justifyContent: 'space-between'}}>
                            <img src={m.img} alt={m.name} width={'30%'}/>
                            &nbsp;&nbsp;
                            <div>
                                <h4>{m.name}</h4>
                                <br />
                                <p><EnvironmentFilled />&nbsp;{m.location}</p>
                                <br />
                                
                            </div>
                            <NavIcon style={{backgroundColor: button, width: '30%', borderRadius: '30px', alignSelf: "flex-end"}}
                                onClick={() => {setRecognizedMonument(m);history('/learn')}}
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

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    setRecognizedMonument: (monument) => dispatch(setRecognizedMonument(monument)),
    tryGetNearbyMonuments: (geolocation) => dispatch(tryGetNearbyMonuments(geolocation))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);