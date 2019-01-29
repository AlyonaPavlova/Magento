import { Component, createElement } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import Banner from 'src/components/Banner';
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

    // get header() {
    //     const { title, classes } = this.props;

    //     return title ? (
    //         <div className={classes.header}>
    //             <h2 className={classes.title}>
    //                 <span>{title}</span>
    //             </h2>
    //         </div>
    //     ) : null
    // }

    render() {
        const { id, classes, title } = this.props;

        return (
            // <Banner></Banner>

            <div class="cat_menu_container">
                {/* <Banner></Banner> */}
                <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div class="cat_burger"><span></span><span></span><span></span></div>
                    <div class="cat_menu_text">{title}</div>
                </div>

                <ul class="cat_menu">
                    <li><a href="#">Computers and Laptops <i class="fas fa-chevron-right ml-auto"></i></a></li>
                    <li><a href="#">Cameras and Photos<i class="fas fa-chevron-right"></i></a></li>
                    <li class="hassubs">
                        <a href="#">Hardware<i class="fas fa-chevron-right"></i></a>
                        <ul>
                            <li class="hassubs">
                                <a href="#">Menu Item<i class="fas fa-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                </ul>
                            </li>
                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                        </ul>
                    </li>
                    <li><a href="#">Smartphones and Tablets<i class="fas fa-chevron-right"></i></a></li>
                    <li><a href="#">TV and Audio<i class="fas fa-chevron-right"></i></a></li>
                    <li><a href="#">Gadgets<i class="fas fa-chevron-right"></i></a></li>
                    <li><a href="#">Car Electronics<i class="fas fa-chevron-right"></i></a></li>
                    <li><a href="#">Video Games and Consoles<i class="fas fa-chevron-right"></i></a></li>
                    <li><a href="#">Accessories<i class="fas fa-chevron-right"></i></a></li>
                </ul>
                {/* <Query query={categoryListQuery} variables={{ id }}>
                    {({ loading, error, data }) => {
                        if (error) {
                            return (
                                <div className={classes.fetchError}>
                                    Data Fetch Error: <pre>{error.message}</pre>
                                </div>
                            );
                        }
                        if (loading) {
                            return loadingIndicator;
                        }
                        if (data.category.children.length === 0) {
                            return (
                                <div className={classes.noResults}>
                                    No child categories found.
                                </div>
                            );
                        }

                        return (
                            <div className={classes.content}>
                                {data.category.children.map(item => (
                                    <CategoryTile
                                        item={item}
                                        key={item.url_key}
                                    />
                                ))}
                            </div>
                        );
                    }}
                </Query> */}
            </div>
        );
    }
}

export default classify(defaultClasses)(CategoryList);
