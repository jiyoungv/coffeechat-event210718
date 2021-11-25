import styled from 'styled-components';
import { clearFix } from './Mixin';
import FloatingButton from '../FloatingButton';

export const Inners = styled.div`
    position: relative;
    height: 100%;
    margin: 0 24px;

    ${clearFix}
`;

export const Layouts = styled.div`
    min-width: 320px;
    max-width: 414px;
    margin: 0 auto;
`;

export const SignUpFloatingButtons = styled(FloatingButton)`
    margin-top: -80px;
`;