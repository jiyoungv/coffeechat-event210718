import shortid from 'shortid';
import img_event_partner_btn1 from '../assets/images/img_event_partner_btn1.png';
import img_event_partner_btn2 from '../assets/images/img_event_partner_btn2.png';
import img_event_partner_btn3 from '../assets/images/img_event_partner_btn3.png';
import img_event_partner_btn4 from '../assets/images/img_event_partner_btn4.png';

const partnerData = [
    {
        id: shortid.generate(),
        title: 'TOP10 인기 파트너',
        image: img_event_partner_btn1,
        link: 'https://coffeechat.kr/search/BEST10',
    },
    {
        id: shortid.generate(),
        title: '네카라쿠배 로켓 탑승권',
        image: img_event_partner_btn2,
        link: 'https://coffeechat.kr/search/네카라쿠배',
    },
    {
        id: shortid.generate(),
        title: '서비스 기획 고민 해결사',
        image: img_event_partner_btn3,
        link: 'https://coffeechat.kr/search/서비스기획',
    },
    {
        id: shortid.generate(),
        title: '외국계 이직 성공팁',
        image: img_event_partner_btn4,
        link: 'https://coffeechat.kr/search/TIPS',
    },
];

export default partnerData;