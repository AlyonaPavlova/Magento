import { Component, createElement } from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import { Price } from '@magento/peregrine';

import classify from 'src/classify';
import Button from 'src/components/Button';
import Carousel from 'src/components/ProductImageCarousel';
import Quantity from 'src/components/ProductQuantity';
import RichText from 'src/components/RichText';
import defaultClasses from './productFullDetail.css';

class ProductFullDetail extends Component {
    static propTypes = {
        classes: shape({
            actions: string,
            cartActions: string,
            description: string,
            descriptionTitle: string,
            details: string,
            detailsTitle: string,
            imageCarousel: string,
            productName: string,
            productPrice: string,
            quantity: string,
            quantityTitle: string,
            root: string,
            title: string
        }),
        product: shape({
            id: number,
            sku: string.isRequired,
            price: shape({
                regularPrice: shape({
                    amount: shape({
                        currency: string.isRequired,
                        value: number.isRequired
                    })
                }).isRequired
            }).isRequired,
            media_gallery_entries: arrayOf(
                shape({
                    label: string,
                    position: number,
                    disabled: bool,
                    file: string.isRequired
                })
            ),
            description: string
        }).isRequired,
        addToCart: func.isRequired
    };

    state = { quantity: 1 };

    setQuantity = quantity => this.setState({ quantity });

    addToCart = () =>
        this.props.addToCart({
            item: this.props.product,
            quantity: this.state.quantity
        });

    render() {
        const { classes, product } = this.props;
        const { regularPrice } = product.price;

        return (
            // <div class="featured_slider_item">
            //     <div class="border_active"></div>
            //     <div class="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
            //         <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
            //         <div class="product_content">
            //             <div class="product_price discount">{regularPrice.amount.value}</div>
            //             <div class="product_name"><div><a href="product.html">{product.name}</a></div></div>
            //             <Button onClick={this.addToCart}>
            //                 <span>Add to Cart</span>
            //             </Button>
            //             <div class="product_extras">
            //                 <div class="product_color">
            //                     <input type="radio" checked name="product_color"/>
            //                     <input type="radio" name="product_color"/>
            //                     <input type="radio" name="product_color"/>
            //                 </div>
            //                 <button class="product_cart_button">Add to Cart</button>
            //             </div>
            //         </div>
            //         <div class="product_fav"><i class="fas fa-heart"></i></div>
            //         <ul class="product_marks">
            //             <li class="product_mark product_discount">-25%</li>
            //             <li class="product_mark product_new">new</li>
            //         </ul>
            //     </div>
            // </div>
            <article className={classes.root}>
                <section className={classes.title}>
                    <h1 className={classes.productName}>
                        <span>{product.name}</span>
                    </h1>
                    <p className={classes.productPrice}>
                        <Price
                            currencyCode={regularPrice.amount.currency}
                            value={regularPrice.amount.value}
                        />
                    </p>
                </section>
                <section className={classes.imageCarousel}>
                    <Carousel images={product.media_gallery_entries} />
                </section>
                <section className={classes.actions}>
                    <Button>
                        <span>Add to Wishlist</span>
                    </Button>
                </section>
                <section className={classes.quantity}>
                    <h2 className={classes.quantityTitle}>
                        <span>Quantity</span>
                    </h2>
                    <Quantity
                        value={this.state.quantity}
                        onChange={this.setQuantity}
                    />
                </section>
                <section className={classes.cartActions}>
                    <Button onClick={this.addToCart}>
                        <span>Add to Cart</span>
                    </Button>
                </section>
                <section className={classes.description}>
                    <h2 className={classes.descriptionTitle}>
                        <span>Product Description</span>
                    </h2>
                    <RichText content={product.description} />
                </section>
                <section className={classes.details}>
                    <h2 className={classes.detailsTitle}>
                        <span>SKU</span>
                    </h2>
                    <strong>{product.sku}</strong>
                </section>
            </article>
        );
    }
}

export default classify(defaultClasses)(ProductFullDetail);
