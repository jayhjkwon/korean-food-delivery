import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

const Wrapper = styled.div`
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    font-family: ${props => props.theme.fontFamily.body};
    font-weight: 500;
    font-size: 1rem;
    align-items: center;
    a {
        color: ${props => props.theme.colors.black.base};
        margin-right: 2rem;
        transition: all ${props => props.theme.transitions.default.duration};
        &:hover {
            color: ${props => props.theme.colors.black.grey};
        }
    }
`;

const NavBar = () => (
    <Headroom calcHeightOnResize>
        <Wrapper>
            <Nav>
                <Link to="/">홈</Link>
                <Link to="/blog">메뉴 업데이트</Link>
            </Nav>
        </Wrapper>
    </Headroom>
);

export default NavBar;
