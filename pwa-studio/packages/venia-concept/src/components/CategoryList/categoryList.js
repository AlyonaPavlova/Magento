import { Component, createElement } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Banner from 'src/components/Banner';
import gql from 'graphql-tag';
import classify from 'src/classify';
import defaultClasses from './categoryList.css';
// import Banner from '../Banner/banner';

// TODO: get only active categories from graphql when it is ready
const categoryListQuery = gql`
    query category($id: Int!) {
        category(id: $id) {
            children {
                name
                url_key
                url_path
                image
            }
        }
    }
`;

// TODO: get categoryUrlSuffix from graphql when it is ready
const categoryUrlSuffix = '.html';

class CategoryList extends Component {
    static propTypes = {
        id: number,
        title: string,
        classes: shape({
            root: string,
            header: string,
            content: string,
            title: string,
            item: string,
            imageWrapper: string,
            image: string,
            name: string
        })
    };

    get header() {
        const { title, classes } = this.props;

        return title ? (
            <div className={classes.header}>
                <h2 className={classes.title}>
                    <span>{title}</span>
                </h2>
            </div>
        ) : null;
    }

    render() {
        const { id, classes } = this.props;

        return (
            <Banner>test text</Banner>
        );
    }
}

export default classify(defaultClasses)(CategoryList);
