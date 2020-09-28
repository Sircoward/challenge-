import React from 'react';
import {Link} from 'react-router-dom';


    function Header(){
    return(
    <header>
    <div id="header_border">
        <div id="title_header">
        <h2>DEMO Streaming</h2>
        </div>
        <div id="btn_container">
        <button id="btn-header-login">Log in</button>
        <button id="btn-header">Start your free trial</button>
        </div>
    </div>
    <div id="header_border_2">
        <h2>Popular Titles</h2>
    </div>
    </header>
    );
    
}


export default Header;