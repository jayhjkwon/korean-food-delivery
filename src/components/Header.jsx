import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
    margin: 5rem 0 2rem 0;
    padding: 4rem 0 1rem 0;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding: 8rem 0 4rem 0;
    }
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: middle;
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
    line-height: 1.3;
`;

const Subtitle = styled.p`
    margin: 4rem auto 0;
    max-width: 450px;
    color: ${props => props.theme.colors.black.light};
    font-size: 0.8rem;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        margin: 6rem auto 0;
    }
`;

const CoverWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = ({ title, cover }) => (
    <Wrapper>
        {cover && (
            <CoverWrapper>
                <Img fixed={cover} />
            </CoverWrapper>
        )}
        <Text>
            <Title>{title}</Title>
            <Subtitle>
                여기저기 흩어져있는 배달 가능한 한국 식당들을 모두 모았습니다.
                정보에 오류가 있거나 변경된 부분이 있으면 알려주세요, 바로
                업데이트 해드리겠습니다.
            </Subtitle>
        </Text>
    </Wrapper>
);

export default Header;

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.bool,
    ]),
};

Header.defaultProps = {
    children: false,
    cover: false,
    title: false,
};
