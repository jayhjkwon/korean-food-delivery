import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Container from '../layouts/Container';

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
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: ${props => props.theme.colors.white.light};
        margin: 0 2rem;
    }
    span {
        color: #fff;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Text>
                    <Link to="/about">포스팅 요청</Link>
                </Text>
            </Container>
        </Wrapper>
    );
};
export default Footer;
