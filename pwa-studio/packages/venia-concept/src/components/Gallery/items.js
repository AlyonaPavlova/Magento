import { Component, createElement } from 'react';
import { arrayOf, string, number, shape } from 'prop-types';
import fixedObserver from 'src/util/fixedObserver';
import initObserver from 'src/util/initObserver';
import GalleryItem from './item';
import getUrlKey from 'src/util/getUrlKey';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const productDetailQuery = gql`
    query productDetail($urlKey: String) {
        productDetail: products(filter: { url_key: { eq: $urlKey } }) {
            items {
                sku
                name
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
                description
                media_gallery_entries {
                    label
                    position
                    disabled
                    file
                }
            }
        }
    }
`;

const pageSize = 12;
const emptyData = Array.from({ length: pageSize }).fill(null);
const createCollection = initObserver(fixedObserver);

// inline the placeholder elements, since they're constant
const placeholders = emptyData.map((_, index) => (
    <GalleryItem placeholder={true} />
));

// initialize the state with a one-page observer, `collection`
// when the observer completes, set `done` to `true`
const initState = (prevState, { items }) => ({
    collection: createCollection(items.length),
    done: false
});

class GalleryItems extends Component {
    static propTypes = {
        items: arrayOf(
            shape({
                id: number.isRequired,
                name: string.isRequired,
                small_image: string.isRequired,
                price: shape({
                    regularPrice: shape({
                        amount: shape({
                            value: number.isRequired
                        }).isRequired
                    }).isRequired
                }).isRequired
            })
        ).isRequired
    };

    constructor(props) {
        super(props);

        this.state = initState({}, props);
    }

    componentWillReceiveProps(nextProps) {
        const { items } = this.props;
        const { items: nextItems } = nextProps;

        if (nextItems === items) {
            return;
        }

        this.setState(initState);
    }

    render() {
        const { items } = this.props;
        const { done } = this.state;

        if (items === emptyData) {
            return placeholders;
        }

        return (
            <Query
                query={productDetailQuery}
                variables={{ urlKey: 'joust-duffle-bag' }}
            >
                {({ loading, error, data }) => {
                    if (error) return <div>Data Fetch Error</div>;
                    if (loading) return <div>Fetching Data</div>;

                    const product = data.productDetail.items[0];

                    return items.map(item => (
                            <GalleryItem
                            product={product}
                            key={item.id}
                            item={item}
                            showImage={done}
                            onLoad={this.handleLoad}
                            onError={this.handleError}
                            addToCart={this.props.addToCart}
                            />
                        ));
                }}
            </Query>
        );
    }

    handleLoad = key => {
        const { done } = this.state.collection.next(key);

        this.setState(() => ({ done }));
    };

    handleError = key => {
        const { done } = this.state.collection.next(key);

        this.setState(() => ({ done }));
    };
}

export { GalleryItems as default, emptyData };
