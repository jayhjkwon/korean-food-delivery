import React from 'react';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from '../layouts';

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

        img {
            ${'' /* margin-top: 5px; */}
        }
    }
    span {
        color: #fff;
    }
`;

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(
                relativePath: { eq: "github/GitHub-Mark-Light-32px.png" }
            ) {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
        }
    `);
    const logo = data.logo.childImageSharp.fixed;
    return (
        <Wrapper>
            <Container>
                <Text>
                    <Link to="/about">포스팅 요청</Link>
                    <span>|</span>
                    <a
                        href="https://github.com/jayhjkwon/korean-food-delivery"
                        aria-label="Github"
                    >
                        <Img fixed={logo} alt="Korean Food Delivery Github" />
                    </a>
                </Text>
            </Container>
        </Wrapper>
    );
};
export default Footer;
