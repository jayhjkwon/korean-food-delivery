import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Layout from '../layouts/Layout';
import Container from '../layouts/Container';

const Content = styled.div`
    p {
        line-height: 1.7;
        .mail {
            color: ${props => props.theme.colors.link.base};
            font-weight: 700;
        }
    }
`;

const Subtitle = styled.h2`
    line-height: 1.5;
    margin: 5rem 0 1.5rem 0;
    &:first-of-type {
        margin: 0 0 1.5rem 0;
    }
`;

const About = () => {
    return (
        <Layout showLogo={false}>
            <Helmet title={'About Korean Food Delivery'} />
            <Header showTitle={false} />
            <Container>
                <Content>
                    <Subtitle>내일 뭐먹지?</Subtitle>
                    <p>
                        &quot;내일 뭐먹지?&quot;는 자원봉사로 운영되는{' '}
                        <b>비영리 웹사이트</b>이며 소스 코드는 모두{' '}
                        <a href="https://github.com/jayhjkwon/korean-food-delivery">
                            공개되어 있습니다.
                        </a>
                    </p>
                    <p>
                        &quot;내일 뭐먹지?&quot;는 개인적으로 한국 음식을
                        배달시켜 먹을 때 마다 웹사이트, 카페, 소셜 미디어 등을
                        헤매며 여기저기 검색하는 불편을 줄여보려고 만든 웹사이트
                        입니다.
                    </p>
                    <p>
                        웹사이트 이름 &quot;내일 뭐먹지?&quot;는 거리적,
                        인프라적인 제약으로 인해 당일 배달이 쉽지 않은 호주의
                        상황을 감안하여 지었습니다.{' '}
                        <span role="img" aria-label="smile">
                            😅
                        </span>
                    </p>
                    <Subtitle>
                        원하시는 식당/배달 정보를 누구나 업로드 하실수 있습니다
                    </Subtitle>
                    <p>
                        &quot;내일 뭐먹지?&quot;에 홍보를 하고자 하시는 분들은
                        아래의 내용을 포함하여
                        <span className="mail"> info.kfood@gmail.com </span>
                        으로 이메일을 보내주시면 가능한 빠른 시간내에
                        올려드리겠습니다.
                    </p>
                    <p>
                        기존의 포스트를 수정하실 분들은 간략히 변경된 부분만
                        알려주시면 됩니다.
                    </p>
                    <p>
                        작성하실 때는 저희 웹사이트의 다른 업체들 내용을 참고해
                        주세요
                    </p>
                    <ul>
                        <li>업소 이름</li>
                        <li>주문 방법</li>
                        <li>연락처</li>
                        <li>배달 (지역, 시간 등등)</li>
                        <li>
                            주요 메뉴 (모든 메뉴를 쓰시기 보다는 가급적 주로
                            많이 판매하시는 메뉴들만 보내주세요)
                        </li>
                        <li>음식 사진 (최대 10장)</li>
                    </ul>
                </Content>
            </Container>
        </Layout>
    );
};

export default About;
