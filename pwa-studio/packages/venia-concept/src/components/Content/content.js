import { Component, createElement } from 'react';
import classify from 'src/classify';
import Button from 'src/components/Button';
import Gallery from 'src/components/Gallery';
import Category from 'src/RootComponents/Category';
import ProductFullDetail from 'src/components/ProductFullDetail';
import Product from 'src/RootComponents/Product';
import defaultClasses from './content.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Characteristics from './characteristics';
import Deals from './deals/index';
import Featured from './featured/index';
import { addItemToCart } from 'src/actions/cart';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';

import tabs from './featured/tabs';
import slider from './featured/slider';

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

class Content extends Component {

    // componentDidMount() {
    //     tabs(this.node);
    //     slider(this.node);
    // }

    // saveNode = node => {
    //     this.node = node
    // }

    // addToCart = async (item, quantity) => {
    //     const { guestCartId } = this.props;
    //     await this.props.addItemToCart({ guestCartId, item, quantity });
    // };

    render() {
        return (
            <div>
                <Characteristics />  
                <div className="deals_featured">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                                <Deals />
                                {/* <div className="featured">
                                    <div className="tabbed_container">
                                        <div className="tabs">
                                            <ul className="clearfix">
                                                <li className="active">Featured</li>
                                                <li>On Sale</li>
                                                <li>Best Rated</li>
                                            </ul>
                                            <div className="tabs_line"><span></span></div>
                                        </div>
                                        <div className="product_panel panel active">
                                            <div className="featured_slider slider">
                                                <Query query={categoryQuery} variables={{ id: 3 }}>
                                                    {({ loading, error, data }) => {
                                                        if (error) return <div>Data Fetch Error</div>;
                                                        if (loading) return <div>Fetching Data</div>;

                                                        return (
                                                            <Gallery
                                                                ref={this.saveNode}
                                                                data={data.category.products.items}
                                                                title={data.category.description}
                                                                addToCart={this.props.addItemToCart}
                                                            />
                                                        );
                                                    }}
                                                </Query>
                                            </div>
                                            <div className="featured_slider_dots_cover"></div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <Query
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
                                </Query> */}
                                <Featured />
                                {/* <Category /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popular_categories">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="popular_categories_content">
                                    <div className="popular_categories_title">Popular Categories</div>
                                    <div className="popular_categories_slider_nav">
                                        <div className="popular_categories_prev popular_categories_nav"><i className="fas fa-angle-left ml-auto"></i></div>
                                        <div className="popular_categories_next popular_categories_nav"><i className="fas fa-angle-right ml-auto"></i></div>
                                    </div>
                                    <div className="popular_categories_link"><a href="#">full catalog</a></div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="popular_categories_slider_container">
                                    <div className="owl-carousel owl-theme popular_categories_slider">
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_1.png" alt=""/></div>
                                                <div className="popular_category_text">Smartphones Tablets</div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_2.png" alt=""/></div>
                                                <div className="popular_category_text">Computers Laptops</div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_3.png" alt=""/></div>
                                                <div className="popular_category_text">Gadgets</div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_4.png" alt=""/></div>
                                                <div className="popular_category_text">Video Games Consoles</div>
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div className="popular_category_image"><img src="images/popular_5.png" alt=""/></div>
                                                <div className="popular_category_text">Accessories</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
	            </div>
                <div className="banner_2">
                    <div className="banner_2_background"></div>
                    <div className="banner_2_container">
                        <div className="banner_2_dots"></div>
                        <div className="owl-carousel owl-theme banner_2_slider">
                            <div className="owl-item">
                                <div className="banner_2_item">
                                    <div className="container fill_height">
                                        <div className="row fill_height">
                                            <div className="col-lg-4 col-md-6 fill_height">
                                                <div className="banner_2_content">
                                                    <div className="banner_2_category">Laptops</div>
                                                    <div className="banner_2_title">MacBook Air 13</div>
                                                    <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                    <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="button banner_2_button"><a href="#">Explore</a></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 fill_height">
                                                <div className="banner_2_image_container">
                                                    <div className="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="banner_2_item">
                                    <div className="container fill_height">
                                        <div className="row fill_height">
                                            <div className="col-lg-4 col-md-6 fill_height">
                                                <div className="banner_2_content">
                                                    <div className="banner_2_category">Laptops</div>
                                                    <div className="banner_2_title">MacBook Air 13</div>
                                                    <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                    <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="button banner_2_button"><a href="#">Explore</a></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 fill_height">
                                                <div className="banner_2_image_container">
                                                    <div className="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                </div>
                            </div>
                            <div className="owl-item">
                                <div className="banner_2_item">
                                    <div className="container fill_height">
                                        <div className="row fill_height">
                                            <div className="col-lg-4 col-md-6 fill_height">
                                                <div className="banner_2_content">
                                                    <div className="banner_2_category">Laptops</div>
                                                    <div className="banner_2_title">MacBook Air 13</div>
                                                    <div className="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                    <div className="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div className="button banner_2_button"><a href="#">Explore</a></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-6 fill_height">
                                                <div className="banner_2_image_container">
                                                    <div className="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

// const mapDispatchToProps = {
//     addItemToCart
// };

// export default connect(
//     null,
//     mapDispatchToProps
// )(Content);
export default classify(defaultClasses)(Content);
