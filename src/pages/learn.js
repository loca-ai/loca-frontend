import React, {useState} from 'react'
import Navbar, {PageFit} from '../components/navbar';
import { connect } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';

import styled from 'styled-components'

const InfoBox = styled.div`
    background-color: #F3F4F5;
    z-index: 5;
    border-radius: 20px 20px 0px 0px;
    padding: 20px;
    position: absolute;
    width: calc(100% - 40px);

    @media screen and (min-width: 860px) {
        width: calc(60% - 40px);
    }

    bottom: 0;
    overflow: auto;
`;

const ImageBox = styled.img`
    width: 100%;
    @media screen and (min-width: 860px) {
        width: 60%;
    }
`;

const Learn = ({ monument }) => {
    const [photoUp, setPhotoUp] = useState(true)

    return(
        <PageFit>
            <Navbar></Navbar>
            <div style={{textAlign: 'center'}}>
                <ImageBox src={monument.get("img")} width="100%" alt={monument.get("name")}/>
            </div>
            <InfoBox style={{
                top: photoUp ? '50%' : '85%'
            }}
            onClick={() => {setPhotoUp(!photoUp)}}
            >
                <div style={{height: '3px', borderRadius: '20px', backgroundColor: '#C4C4C4', width: '50%', margin: '1px auto'}}></div>
                <br />
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <h2>{monument.get("name")}</h2>
                    <StarOutlined style={{color: "#F75940", fontSize: '25px'}}/>
                </div>
                <br />
                {monument.get("desc")}
            </InfoBox>
        </PageFit>
    )
}

const mapStateToProps = state => ({
    monument: state.monuments.get("recognizedMonument")
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Learn);