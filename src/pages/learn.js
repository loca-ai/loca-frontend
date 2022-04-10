import React, {useState} from 'react'
import Navbar from '../components/navbar';
import { connect } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';

// export const InfoBox = styled.div`
//     background-color: #F3F4F5;
//     z-index: 5;
//     border-radius: 20px 20px 0px 0px;
//     padding: 20px;
//     position: absolute;
//     top: ${props => props.photoUp ? '50%' : '85%'};
//     animation: '1s ${props => props.photoUp ? 'moveUp' : 'moveDown'}'

//     @keyframes moveUp {
// 		from { top: 85%; }
// 		to { top: 50%; }
// 	}
//     @keyframes moveUp {
// 		from { top: 50%; }
// 		to { top: 85%; }
// 	}
// `;

const Learn = ({ monument }) => {
    const [photoUp, setPhotoUp] = useState(true)

    return(
        <div>
            <Navbar></Navbar>
            <div>
                <img src={monument.get("img")} width="100%" alt={monument.get("name")}/>
            </div>
            <div style={{
                backgroundColor: "#F3F4F5", 
                zIndex: 5, 
                borderRadius: '20px 20px 0px 0px', 
                padding: '20px',
                position: 'absolute',
                top: photoUp ? '50%' : '85%',
                width: 'calc(100% - 40px)',
                bottom: 0,
                overflow: 'auto'
            }}
            onClick={() => {setPhotoUp(!photoUp)}}
            >
                <div style={{height: '3px', borderRadius: '20px', backgroundColor: 'gray', width: '50%', margin: '1px auto'}}></div>
                <br />
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <h2>{monument.get("name")}</h2>
                    <StarOutlined style={{color: "#F75940", fontSize: '25px'}}/>
                </div>
                <br />
                {monument.get("desc")}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    monument: state.monuments.get("recognizedMonument")
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Learn);