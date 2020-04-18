import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.header`
    margin: 5rem 0 0rem 0;
    padding: 4rem 0 5rem 0;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding: 8rem 0 6rem 0;
    }
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
`;

const Title = styled.h1`
    margin: 4rem auto 0;
    line-height: 1.5;
    max-width: 330px;
    color: ${props => props.theme.colors.black.light};
    font-size: 0.8rem;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        margin: 6rem auto 0;
    }
    a:not(.gatsby-resp-image-link):not(.anchor) {
        color: ${props => props.theme.colors.link.base};
        &:hover,
        &:focus {
            border-bottom: solid 1px ${props => props.theme.colors.link.base};
        }
    }
`;

const CoverWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const KakaoBanner = styled.a`
    margin: 4rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const KakaoHelpText = styled.p`
    font-size: 0.8rem;
    color: ${props => props.theme.colors.black.light};
    margin: 0.5rem 0 0 0;
`;

const Header = ({ title, showTitle = true }) => {
    const { logo, kakaoBannerSmall } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo/logo.png" }) {
                childImageSharp {
                    fixed(height: 30) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
            kakaoBannerSmall: file(
                relativePath: { eq: "kakao/sentence_type@2x.png" }
            ) {
                childImageSharp {
                    fixed(height: 30) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
        }
    `);
    return (
        <Wrapper>
            <CoverWrapper>
                <Link to="/" alt="go to homepage">
                    <Img fixed={logo.childImageSharp.fixed} />
                </Link>
            </CoverWrapper>
            <Text>
                {showTitle &&
                    (title || (
                        <Title>
                            여기저기 흩어져있는 배달 가능한 한국 식당들을 모두
                            모았습니다.{' '}
                            <Link to="/about">
                                식당, 공동구매 정보 업로드를 원하시는
                                사장님께서는 이곳을 클릭해서 참조해 주세요.
                                무료로 등록해 드리고 있습니다.
                            </Link>
                        </Title>
                    ))}
            </Text>
            <KakaoBanner
                href="https://pf.kakao.com/_UHfrxb/friend"
                target="__blank"
            >
                <Img
                    fixed={kakaoBannerSmall.childImageSharp.fixed}
                    alt="내일 뭐먹지 카카오톡 채널을 추가하세요"
                />
                <KakaoHelpText>
                    새로운 메뉴, 할인 이벤트 정보를 카톡으로 편리하게
                    받아보세요.
                </KakaoHelpText>
            </KakaoBanner>
        </Wrapper>
    );
};

export default Header;

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.bool,
    ]),
    showTitle: PropTypes.bool,
};

Header.defaultProps = {
    children: false,
    title: false,
};
