import styled from 'styled-components';

export const FloatingButtons = styled.div`
    position: sticky;
    bottom: 24px;
    width: calc(100% - 48px);
    max-width: 327px;
    margin: 0 auto;
    
    a {
        display: block;
        width: 100%;
        padding: 15px 0;
        border-radius: 8px;
        text-align: center;
        font-weight: 700;
        color: #fff;
        box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);
        background: linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%);

        &:active, &:visited {
            color: #fff;
        }
    }
`;