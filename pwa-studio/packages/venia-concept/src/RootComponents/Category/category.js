import React, { Component, createElement } from 'react';
import { string, number, shape } from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import classify from 'src/classify';
import Gallery from 'src/components/Gallery';
import Page from 'src/components/Page';
import defaultClasses from './category.css';
import { addItemToCart } from 'src/actions/cart';
import { connect } from 'react-redux';

import tabs from 'src/components/Content/featured/tabs';
import slider from 'src/components/Content/featured/slider';

const categoryQuery = gql`
    query category($id: Int!) {
        category(id: $id) {
            description
            name
            product_count
            products {
                items {
                    id
                    name
                    small_image
                    url_key
                    price {
                        regularPrice {
                            amount {
                                value
                                currency
                            }
                        }
                    }
                }
            }
        }
    }
`;

class Category extends Component {
    static propTypes = {
        id: number,
        classes: shape({
            gallery: string,
            root: string,
            title: string
        })
    };

    // TODO: Should not be a default here, we just don't have
    // the wiring in place to map route info down the tree (yet)
    static defaultProps = {
        id: 3
    };

    addToCart = async (item, quantity) => {
        const { guestCartId } = this.props;
        await this.props.addItemToCart({ guestCartId, item, quantity });
    };

    render() {
        const { id, classes } = this.props;

        return (
            <Query query={categoryQuery} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (error) return <div>Data Fetch Error</div>;
                    if (loading) return <div>Fetching Data</div>;

                    return (
                        <div>
                            <Gallery
                                data={data.category.products.items}
                                title={data.category.description}
                                addToCart={this.props.addItemToCart}
                            />
                        </div>
                    );
                }}
            </Query>
        );
    }
}

const mapDispatchToProps = {
    addItemToCart
};

export default connect(
    null,
    mapDispatchToProps
)(Category);
