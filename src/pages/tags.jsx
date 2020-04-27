import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'layouts/Layout';
import Container from 'layouts/Container';
import Header from '../components/Header';
import TagsBlock from '../components/TagsBlock';

const Tags = ({ pageContext }) => {
    const { tags } = pageContext;

    return (
        <Layout>
            <Header title="Tags Page">Korean Food Delivery</Header>
            <Container>
                <TagsBlock list={tags} />
            </Container>
        </Layout>
    );
};

export default Tags;

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tags: PropTypes.array,
    }),
};
