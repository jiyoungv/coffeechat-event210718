import React from 'react';
import PropTypes from 'prop-types';
import { FloatingButtons } from './Style';

FloatingButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    target: PropTypes.string,
};

function FloatingButton ({ className, text, link, target }) {
    return (
        <FloatingButtons className={className}>
            <a href={link} target={target} rel="noreferrer" title={text}>{text}</a>
        </FloatingButtons>
    );
}

export default FloatingButton;