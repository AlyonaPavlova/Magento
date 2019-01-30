import { Component, createElement } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import classify from 'src/classify';
import defaultClasses from './categoryList.css';

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
        ) : null
    }

    render() {
        const { id, title } = this.props;

        return (
            <div class="cat_menu_container">
                <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div class="cat_burger"><span></span><span></span><span></span></div>
                    <div class="cat_menu_text">{title}</div>
                </div>
                <ul class="cat_menu">
                    <Query query={categoryListQuery} variables={{ id }}>	
                        {({ loading, error, data }) => {	
                            if (error) return <div>Data Fetch Error</div>;	
                            if (loading) return <div>Fetching Data</div>;	
                            if (data.category.children == '')	
                                return <div>Here are not any child categories</div>;	

                            return (	
                                <div>	
                                    {data.category.children.map((item) => (	
                                        <li>
                                            <a href={`/${item.url_key}${categoryUrlSuffix}`}>
                                                {item.name}
                                                <i class="fas fa-chevron-right"></i>
                                            </a>
                                        </li>
                                    ))}	
                                </div>	
                            );	
                        }}	
                    </Query>
                </ul>
            </div>
        );
    }
}

export default classify(defaultClasses)(CategoryList);
