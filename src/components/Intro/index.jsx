import React from 'react';
import { Intros } from './Style';
import img_event_intro from '../../assets/images/img_event_intro.jpg';

function Intro () {
    return (
        <Intros>
            <figure>
                <img src={img_event_intro} alt="커피챗은 이런 서비스에요!" />
            </figure>  
        </Intros>
    );
}

export default Intro;