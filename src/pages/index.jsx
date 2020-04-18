import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

export const query = graphql`
    query {
        kakaoBannerLarge: file(
            relativePath: { eq: "kakao/banner_type@2x.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        allMarkdownRemark(
            limit: 100
            sort: { order: ASC, fields: [frontmatter___title] }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 75)
                    frontmatter {
                        title
                        path
                        tags
                        cover {
                            childImageSharp {
                                fluid(maxWidth: 1000, quality: 100) {
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const PostWrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0rem auto 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (min-width: 700px) {
    }
`;

const KakaoBannerWrapper = styled.div`
    width: 100%;
    padding: 0rem 1rem 1rem 1rem;
    margin: 0 auto;
    max-width: 400px;
    @media (min-width: 700px) {
        padding: 6rem 1rem 1rem 1rem;
    }
`;

const Index = ({ data }) => {
    const {
        kakaoBannerLarge,
        allMarkdownRemark: { edges },
    } = data;

    return (
        <Layout showLogo={false}>
            <Helmet title={'내일 뭐먹지'} />
            <Header />
            <PostWrapper>
                {edges.map(({ node }) => {
                    const { id, excerpt, frontmatter } = node;
                    const { cover, path, title, date, tags } = frontmatter;
                    return (
                        <PostList
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
                <PostList dummy />
                <PostList dummy />
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
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
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
