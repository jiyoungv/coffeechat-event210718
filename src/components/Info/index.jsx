import React from 'react';
import { Infos } from './Style';
import img_event_info from '../../assets/images/img_event_info.png';

function Info () {
    return (
        <Infos> 
            <figure className="info-img" >
                <img src={img_event_info} alt="" />
            </figure>
        </Infos>
    );
}

export default Info;