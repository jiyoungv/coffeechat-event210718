import React from 'react';
import { Partners } from './Style';
import { Inners } from '../Styles/Common';
import img_event_partner_tit from '../../assets/images/img_event_partner_tit.png';
import img_event_partner_logo from '../../assets/images/img_event_partner_logo.png';
import img_event_partner_cta from '../../assets/images/img_event_partner_cta.png';
import partnerData from '../../data/partnerData';

function Partner () {
    const partnerBtnLists = partnerData.map((data, index) => {
        return (
            <li key={data.id}>
                <a href={data.link} title={data.title} target="_blank" rel="noreferrer">
                    <img src={data.image} alt={data.title} />
                </a>
            </li>
        );
    });

    return (
        <Partners>
            <figure>
                <img src={img_event_partner_tit} alt="커피챗 파트너 추천" />
            </figure>
            <div className="partner-btn">
                <Inners>
                    <ul className="partner-btn-list">
                        {partnerBtnLists}
                    </ul>
                </Inners>
            </div>
            <div className="partner-logo-wrap">
                <div className="partner-logo">
                    <figure className="partner-logo-img">
                        <img src={img_event_partner_logo} alt="" />
                        <img src={img_event_partner_logo} alt="" />
                    </figure>
                </div>
            </div>
            <div className="partner-cta">
                <a href="https://www.coffeechat.kr/categoryList" title="지금 더 많은 파트너 보러 가기" target="_blank" rel="noreferrer">
                    <img src={img_event_partner_cta} alt="지금 더 많은 파트너 보러 가기" />
                </a>
            </div>
        </Partners>
    );
}

export default Partner;