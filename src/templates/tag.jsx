import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from 'layouts/Layout';
import styled from '@emotion/styled';
import Header from '../components/Header';
import config from '../../config/site';
import Post from '../components/Post';

export const query = graphql`
    query($tagName: String!) {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___title] }
            filter: { frontmatter: { tags: { glob: $tagName } } }
        ) {
            nodes {
                frontmatter {
                    path
                    title
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

const Tag = ({ data, pageContext: { tagName } }) => {
    const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
    const { nodes } = data.allMarkdownRemark;
    return (
        <Layout>
            <Helmet title={`${tagName} | ${config.siteTitle}`} />
            <Header title={upperTag} showKakaoBaner={false} showLogo={false} />
            <PostWrapper>
                {nodes.map(({ frontmatter }) => {
                    const { cover, path, title, tags } = frontmatter;
                    return (
                        <Post
                            key={path}
                            cover={cover.childImageSharp.fluid}
                            path={path}
                            title={title}
                            tags={tags}
                        />
                    );
                })}
                <Post dummy />
                <Post dummy />
            </PostWrapper>
        </Layout>
    );
};

export default Tag;

Tag.propTypes = {
    pageContext: PropTypes.shape({
        posts: PropTypes.array,
        tagName: PropTypes.string,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
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
