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
            <div className="cat_menu_container">
                <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div className="cat_burger"><span></span><span></span><span></span></div>
                    <div className="cat_menu_text">{title}</div>
                </div>
                <ul className="cat_menu">
                    <Query query={categoryListQuery} variables={{ id }}>	
                        {({ loading, error, data }) => {	
                            if (error) return <div>Data Fetch Error</div>;	
                            if (loading) return <div>Fetching Data</div>;	
                            if (data.category.children == '')	
                                return <div>Here are not any child categories</div>;	

                            return data.category.children.map((item, index) => (	
                                        <li>
                                            <Link key={index} to={`/${item.url_key}${categoryUrlSuffix}`}>
                                                {item.name}
                                                <i className="fas fa-chevron-right"></i>
                                            </Link>
                                            {/* <a href={`/${item.url_key}${categoryUrlSuffix}`}>
                                                {item.name}
                                                <i className="fas fa-chevron-right"></i>
                                            </a> */}
                                        </li>
                                    ));	
                        }}	
                    </Query>
                </ul>
            </div>
        );
    }
}

export default classify(defaultClasses)(CategoryList);
