import React from 'react';
import { KosovoLogo } from '../ui/icons.js';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <KosovoLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
            Kosovo National Footbal Team.All rights reserved.
            </div>
            
        </footer>
    );
};

export default Footer;