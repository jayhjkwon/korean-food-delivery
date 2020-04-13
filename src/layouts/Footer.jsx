import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
    margin: 8rem 0 0 0;
    position: relative;
    padding: 3rem 0;
    bottom: 0;
    background: #272727;
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 500;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
        margin: 10rem 0 0 0;
    }
`;

const Text = styled.div`
    margin: 0;
    text-align: center;
    a {
        color: ${props => props.theme.colors.white.light};
    }
`;

const Footer = () => (
    <Wrapper>
        <Text>
            <Link to="/about">About Us</Link>
        </Text>
    </Wrapper>
);
export default Footer;
