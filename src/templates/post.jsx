import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import { Layout, Content } from 'layouts';
import { TagsBlock, SEO } from 'components';
import '../styles/prism';

export const query = graphql`
    query($pathSlug: String!, $folder: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            excerpt
            frontmatter {
                title
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
        images: allFile(
            filter: {
                base: { regex: "/menu/" }
                extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                relativeDirectory: { eq: $folder }
            }
        ) {
            nodes {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.div`
    padding: 3rem 0 0 0;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const HeroImageContainer = styled.div`
    background-color: ${props => props.theme.colors.black.base};
    margin: 5.4rem 0 0 0;
`;

const HeroImageWrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    height: 300px;
    overflow: hidden;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        height: 500px;
    }
`;

const ContentWrapper = styled.div`
    padding: 0 1rem;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding: 0;
    }
`;

const StyledSubtitle = styled.h2`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 600;
`;

const StyledImage = styled(Img)`
    margin: 1rem 0;
`;

const Post = ({ data }) => {
    const { html, frontmatter, excerpt } = data.markdownRemark;
    const { title, tags, path } = frontmatter;
    const image = frontmatter.cover.childImageSharp.fluid;
    let images = [];
    if (data.images.nodes && data.images.nodes.length > 0) {
        images = orderBy(
            data.images.nodes,
            ['childImageSharp.fluid.src'],
            ['asc']
        );
    }
    images = [frontmatter.cover, ...images];
    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt || ' '}
                banner={frontmatter.cover.childImageSharp.fluid.src}
                pathname={path}
                article
            />
            <HeroImageContainer>
                <HeroImageWrapper>
                    <Img fluid={image} />
                </HeroImageWrapper>
            </HeroImageContainer>
            <Wrapper>
                <ContentWrapper>
                    <h1>{title}</h1>
                    <TagsBlock list={tags || []} />
                    <hr />
                    <Content input={html} />
                    {images.length > 0 && (
                        <>
                            <hr />
                            <StyledSubtitle>참조 이미지</StyledSubtitle>
                        </>
                    )}
                </ContentWrapper>
                {images.map(image => {
                    const fluid = image.childImageSharp.fluid;
                    return <StyledImage key={fluid.src} fluid={fluid} />;
                })}
            </Wrapper>
        </Layout>
    );
};

export default Post;

Post.propTypes = {
    data: PropTypes.object.isRequired,
};
