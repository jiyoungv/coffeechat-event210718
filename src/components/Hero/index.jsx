import React from 'react';
import { Heros } from './Style';
import img_event_hero from '../../assets/images/img_event_hero.jpg';

function Hero () {
    return (
        <Heros>
            <figure>
                <img src={img_event_hero} alt="이직면접 1:1 상담무료" />
            </figure>
        </Heros>
    );
}

export default Hero;