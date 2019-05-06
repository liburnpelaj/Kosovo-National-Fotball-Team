import React from 'react';
import { Link } from 'react-router-dom';

import kosovologo from '../../Resources/images/logos/kosovo_logo.png';

export const KosovoLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${kosovologo}) no-repeat`
        }}
    ></div>

    if(props.link){
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }

}

export default KosovoLogo;