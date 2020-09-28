import React from 'react';
import {Link} from 'react-router-dom';
import AppStoreBadge from '../img/Badge/app-store-badge.png';
import GooglePlayBadge from '../img/Badge/google-play-badge.png';
import MicrosoftStore from '../img/Badge/9-Affiliate.png'



    function Footer(){
    return( 
        <footer>
            <div id="text">
                <a>Home |</a>
                <a> Terms and Conditions |</a>
                <a> Privacy Policy |</a>
                <a> Collection Statement |</a>
                <a> Help |</a>
                <a> Manage Account</a>
            </div>
                <p>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
            <div id="footer_container_img">
            <div id="container_img_socialmedia">
                <i className="fab fa-facebook-f fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
            </div>
            <div id="container_img_badge">
                <img src={AppStoreBadge} />
                <img src={GooglePlayBadge}/>
                <img src={MicrosoftStore}/>
            </div>
            </div>
        </footer>
    );
    
}


export default Footer;