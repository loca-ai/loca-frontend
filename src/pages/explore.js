import { CameraFilled } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react'
import Navbar, {NavIcon} from '../components/navbar';
import {Camera} from "react-camera-pro";
import { useNavigate } from "react-router-dom";

function Explore() {
    const [image, setImage] = useState(null);
    const camera = useRef(null);
    let history = useNavigate();

    const captureImage = async () => {
        await setImage(camera.current.takePhoto())
    }

    useEffect(() => {
        if (image !== "" && image !== undefined && image !== null) {
            // send api data here
            history("/learn")
        }
    }, [image, history]);

    return(
        <div>
            <Navbar></Navbar>
            <div style={{borderRadius: '20px', margin: '10px'}}>
                <Camera ref={camera} aspectRatio={3/4}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <NavIcon style={{backgroundColor: '#000', width: '30%', borderRadius: '30px'}}
                onClick={async () => {captureImage()}}
            >
                <CameraFilled/>&nbsp;Capture
            </NavIcon>
            </div>
        </div>
    )
}

export default Explore;