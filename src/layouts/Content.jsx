import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import prism from '../styles/prism';

const Wrapper = styled.div`
    ${prism};
    p,
    li {
        letter-spacing: -0.003em;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        line-height: 2;
        code {
            padding: 0.2rem 0.5rem;
            margin: 0.5rem 0;
        }
        color: #484848;
    }
    a:not(.gatsby-resp-image-link):not(.anchor) {
        color: ${props => props.theme.colors.link.base};
        &:hover,
        &:focus {
            border-bottom: solid 1px ${props => props.theme.colors.link.base};
        }
    }
    h1 {
        margin-top: 3rem;
    }
    h2 {
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 600;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #484848;
        display: inline-block;
        position: relative;
        a {
            box-shadow: none;
            border-bottom: none;
            &:hover,
            &:focus {
                background: none;
            }
        }
        &:hover {
            .anchor svg {
                opacity: 0.8;
            }
        }
    }
    div {
        color: #484848;
    }
`;

const Content = ({ input }) => (
    <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
    input: PropTypes.any.isRequired,
};
