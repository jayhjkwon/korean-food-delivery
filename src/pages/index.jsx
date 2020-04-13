import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

export const query = graphql`
    query {
        heroPhoto: file(relativePath: { eq: "logo/logo.png" }) {
            childImageSharp {
                fixed(height: 50) {
                    ...GatsbyImageSharpFixed_noBase64
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
    margin: 5.4rem auto 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 1000px) {
        margin: 1rem 2rem 1rem 2rem;
    }
    @media (max-width: 700px) {
        margin: 1rem 1rem 1rem 1rem;
    }
`;

const Index = ({ data }) => {
    const {
        heroPhoto,
        allMarkdownRemark: { edges },
    } = data;
    return (
        <Layout showLogo={false}>
            <Helmet title={'Home Page'} />
            <Header cover={heroPhoto.childImageSharp.fixed} />
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
        </Layout>
    );
};

export default Index;

Index.propTypes = {
    data: PropTypes.shape({
        heroPhoto: PropTypes.object,
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
