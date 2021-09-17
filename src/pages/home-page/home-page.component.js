import React from 'react';
import './home-page.component.scss'

import Directory from "../../components/directory/directory.component";
// import Header from '../../components/header/header.component'

const HomePage = ()=>{
    return (
        <div className="home-page">
            {/* <div> <Header/> </div> */}
            <h1>Product List</h1>
            <Directory/>
        </div>
    )
}

export default HomePage;