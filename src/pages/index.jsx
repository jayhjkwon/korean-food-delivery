import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, Post } from 'components';
import { Layout } from 'layouts';

export const query = graphql`
    fragment Post on MarkdownRemark {
        id
        excerpt(pruneLength: 75)
        frontmatter {
            title
            path
            tags
            cover {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
    query {
        kakaoBannerLarge: file(
            relativePath: { eq: "kakao/banner_type@2x.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        latestPosts: allFile(
            limit: 3
            sort: { order: DESC, fields: [modifiedTime] }
            filter: {
                childMarkdownRemark: {
                    frontmatter: {
                        published: { eq: true }
                        title: { ne: null }
                    }
                }
            }
        ) {
            nodes {
                childMarkdownRemark {
                    ...Post
                }
            }
        }
        allPosts: allMarkdownRemark(
            limit: 100
            sort: { order: ASC, fields: [frontmatter___title] }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                ...Post
            }
        }
    }
`;

const PostWrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0rem auto 3rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const KakaoBannerWrapper = styled.div`
    width: 100%;
    padding: 0rem 1rem 1rem 1rem;
    margin: 0 auto;
    max-width: 400px;
    @media (min-width: 700px) {
        padding: 2rem 1rem 1rem 1rem;
    }
`;

const SectionTtitle = styled.h2`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto 1.6rem;
    padding: 0 1.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    @media (min-width: 700px) {
        padding: 0 2rem;
        font-size: 1.3rem;
    }
`;

const Index = ({ data }) => {
    const {
        kakaoBannerLarge,
        latestPosts: { nodes: latestPostsEdges },
        allPosts: { nodes: allPostsEdges },
    } = data;

    return (
        <Layout showLogo={false}>
            <Helmet title={'내일 뭐먹지'} />
            <Header />
            {/* <SectionTtitle>최근 업데이트</SectionTtitle>
            <PostWrapper>
                {latestPostsEdges.map(({ childMarkdownRemark }) => {
                    const { id, excerpt, frontmatter } = childMarkdownRemark;
                    const { cover, path, title, date, tags } = frontmatter;
                    return (
                        <Post
                            key={id}
                            cover={cover.childImageSharp.fluid}
                            path={path}
                            title={title}
                            date={date}
                            excerpt={excerpt}
                            tags={tags}
                        />
                    );
                })}
            </PostWrapper>
            <SectionTtitle>전체 보기</SectionTtitle> */}
            <PostWrapper>
                {allPostsEdges.map(({ id, excerpt, frontmatter }) => {
                    const { cover, path, title, date, tags } = frontmatter;
                    return (
                        <Post
                            key={id}
                            cover={cover.childImageSharp.fluid}
                            path={path}
                            title={title}
                            date={date}
                            excerpt={excerpt}
                            tags={tags}
                        />
                    );
                })}
                <Post dummy />
                <Post dummy />
            </PostWrapper>
            <KakaoBannerWrapper>
                <a href="https://pf.kakao.com/_UHfrxb/friend" target="__blank">
                    <Img
                        fluid={kakaoBannerLarge.childImageSharp.fluid}
                        alt="내일 뭐먹지 카카오톡 채널을 추가하세요"
                    />
                </a>
            </KakaoBannerWrapper>
        </Layout>
    );
};

export default Index;

Index.propTypes = {
    data: PropTypes.shape({
        kakaoBannerLarge: PropTypes.object,
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        excerpt: PropTypes.string,
                        frontmatter: PropTypes.shape({
                            cover: PropTypes.object.isRequired,
                            path: PropTypes.string.isRequired,
                            title: PropTypes.string.isRequired,
                            tags: PropTypes.array,
                        }),
                    }),
                }).isRequired
            ),
        }),
        allPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        excerpt: PropTypes.string,
                        frontmatter: PropTypes.shape({
                            cover: PropTypes.object.isRequired,
                            path: PropTypes.string.isRequired,
                            title: PropTypes.string.isRequired,
                            tags: PropTypes.array,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
};
