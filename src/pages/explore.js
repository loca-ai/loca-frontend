import { CameraFilled, ReloadOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import Navbar, {NavIcon} from '../components/navbar';
import {Camera} from "react-camera-pro";
import { useNavigate } from "react-router-dom";
import {setRecognizedMonument} from '../store/monuments';
import {tryRecognizeMonument} from '../middleware/monuments'

const Explore = ({ tryRecognizeMonument, setRecognizedMonument }) => {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);
    const camera = useRef(null);
    let history = useNavigate();

    const cameras = camera.current ? camera.current.getNumberOfCameras() : 0

    const captureImage = async () => {
        await setImage(camera.current.takePhoto())
    }

    useEffect(() => {
        async function recognize() {
            // send api data here
            const monument = await tryRecognizeMonument(image, location)
            if (monument !== null) {
                setRecognizedMonument(monument)
                history("/learn")
            } else {

            }
        }

        if (image !== "" && image !== undefined && image !== null) {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLocation(position)
            });
            recognize()
        }
    }, [image, history, tryRecognizeMonument, setRecognizedMonument]);

    return(
        <div>
            <Navbar></Navbar>
            <div style={{padding: '0px 20px'}}>
                <h2>Explore your surroundings</h2>
            </div>
            <div style={{borderRadius: '20px', margin: '10px'}}>
                <Camera ref={camera} aspectRatio={3.5/4} facingMode={cameras > 1 ? "environment" : "user"}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {cameras > 1 &&
                    <NavIcon style={{backgroundColor: '#000', width: '30%', borderRadius: '30px'}}
                        onClick={async () => {camera.current.switchCamera()}}
                    >
                        <ReloadOutlined/>&nbsp;Flip
                    </NavIcon>
                }
                <NavIcon style={{backgroundColor: '#000', width: '30%', borderRadius: '30px'}}
                    onClick={async () => {captureImage()}}
                >
                    <CameraFilled/>&nbsp;Capture
                </NavIcon>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    setRecognizedMonument: (monument) => dispatch(setRecognizedMonument(monument)),
    tryRecognizeMonument: (image, geolocation) => dispatch(tryRecognizeMonument(image, geolocation))
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);