import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

const Wrapper = styled.div`
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 500;
    font-size: 1rem;
    align-items: center;
    a {
        color: ${props => props.theme.colors.black.base};
        margin-left: 1.5rem;
        transition: all ${props => props.theme.transitions.default.duration};
        &:first-of-type {
            margin-left: 0;
        }
        &:hover {
            color: ${props => props.theme.colors.black.grey};
        }
    }
`;

const LinksWrapper = styled.div`
    display: inline-block;
`;

const Dummy = styled.div``;

const NavBar = ({ showLogo = true }) => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo/logo.png" }) {
                childImageSharp {
                    fixed(height: 30) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
        }
    `);
    const logo = data.logo.childImageSharp.fixed;
    return (
        <Headroom calcHeightOnResize style={{ padding: '1.8rem' }}>
            <Wrapper>
                <Nav>
                    {showLogo ? (
                        <Link to="/">
                            <Img fixed={logo} alt="Korean Food Delivery" />
                        </Link>
                    ) : (
                        <Dummy />
                    )}
                    <LinksWrapper>
                        <Link to="/">홈</Link>
                        <Link to="/blog">메뉴 업데이트</Link>
                    </LinksWrapper>
                </Nav>
            </Wrapper>
        </Headroom>
    );
};

NavBar.propTypes = {
    showLogo: PropTypes.bool,
};

export default NavBar;
