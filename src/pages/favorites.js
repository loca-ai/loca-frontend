import React from 'react'
import Navbar from '../components/navbar';

function Favorites() {

    return(
        <div>
            <Navbar></Navbar>
            <h2 style={{padding: '0px 20px'}}>Your recent trips</h2>
        </div>
    )
}

export default Favorites;