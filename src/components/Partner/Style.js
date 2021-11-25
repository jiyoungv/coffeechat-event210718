import styled from 'styled-components';
import { clearFix } from '../Styles/Mixin';

export const Partners = styled.section`
    .partner-btn {
        background: #000;
    }

    .partner-btn-list {
        ${clearFix}

        li {
            float: left;
            width: 47%;
            margin-right: 6%;
            margin-top: 20px;

            &:nth-of-type(even) {
                margin-right: 0;
            }

            &:nth-of-type(-n+2) {
                margin-top: 0;
            }

            a {
                display: block;

                img {
                    display: block;
                }
            }
        }
    }

    .partner-logo-wrap {
        padding: 30px 0;
        background: #000;
    }

    .partner-logo {
        overflow-x: hidden;
        height: 128px;
    }

    .partner-logo-img {
        display: flex;
        width: 618px;
        animation: ani-partner-logo-img 20s linear infinite;

        img {
            flex-shrink: 0;
            width: 618px !important;
            height: 128px;
        }
    }

    @keyframes ani-partner-logo-img {
        0% {transform: translateX(0);}
        100% {transform: translateX(-100%);}
    }

    .partner-cta {
        background: #000;
        padding-bottom: 40px;

        a {
            display: block;
            max-width: 210px;
            margin: 0 auto;

            img {
                display: block;
            }
        }
    }
`;