import React from 'react';
import { Link } from 'gatsby';
import flatten from 'lodash/flatten';
import countBy from 'lodash/countBy';
import styled from '@emotion/styled';
import TagsBlock from './TagsBlock';

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0rem auto 3rem;
    padding: 0 1rem;

    @media (min-width: ${props => props.theme.breakpoints.m}) {
        padding: 0 2rem;
    }
`;

const Tag = styled(Link)`
    margin: 0 1rem 1rem 0;
    color: ${props => props.theme.colors.black.base};
    padding: 0.5rem 1rem;
    border-radius: 30px;
    border: solid 1px ${props => props.theme.colors.black.second};
    display: inline-block;

    &:hover {
        border-color: ${props => props.theme.colors.black.base};
    }
`;

const TagsFilter = ({ data }) => {
    const tagsArray = data.map(({ frontmatter }) => frontmatter.tags);
    const tagsCountBy = countBy(flatten(tagsArray));
    const tagsOrderBy = Object.keys(tagsCountBy).sort(
        (a, b) => tagsCountBy[b] - tagsCountBy[a]
    );

    return (
        <Wrapper>
            <TagsBlock
                list={tagsOrderBy.slice(0, 8)}
                renderMoreButton={() => <Tag to={'/tags'}>더보기...</Tag>}
            />
        </Wrapper>
    );
};

export default TagsFilter;
