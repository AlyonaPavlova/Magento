import { Component, createElement } from 'react';
import classify from 'src/classify';
import Deals from 'src/components/Deals';
import defaultClasses from './content.css';

class Content extends Component {

    render() {
        return (
            <div>
                <div class="characteristics">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src="images/char_1.png" alt=""/></div>
                                    <div class="char_content">
                                        <div class="char_title">Free Delivery</div>
                                        <div class="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src="images/char_2.png" alt=""/></div>
                                    <div class="char_content">
                                        <div class="char_title">Free Delivery</div>
                                        <div class="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src="images/char_3.png" alt=""/></div>
                                    <div class="char_content">
                                        <div class="char_title">Free Delivery</div>
                                        <div class="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src="images/char_4.png" alt=""/></div>
                                    <div class="char_content">
                                        <div class="char_title">Free Delivery</div>
                                        <div class="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="deals_featured">
                    <div class="container">
                        <div class="row">
                            <div class="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                            <div class="deals">
                                <div class="deals_title">Deals of the Week</div>
                                <div class="deals_slider_container">
                                    <div class="owl-carousel owl-theme deals_slider">
                                        <div class="owl-item deals_item">
                                            <div class="deals_image"><img src="images/deals.png" alt=""/></div>
                                            <div class="deals_content">
                                                <div class="deals_info_line d-flex flex-row justify-content-start">
                                                    <div class="deals_item_category"><a href="#">Headphones</a></div>
                                                    <div class="deals_item_price_a ml-auto">$300</div>
                                                </div>
                                                <div class="deals_info_line d-flex flex-row justify-content-start">
                                                    <div class="deals_item_name">Beoplay H7</div>
                                                    <div class="deals_item_price ml-auto">$225</div>
                                                </div>
                                                <div class="available">
                                                    <div class="available_line d-flex flex-row justify-content-start">
                                                        <div class="available_title">Available: <span>6</span></div>
                                                        <div class="sold_title ml-auto">Already sold: <span>28</span></div>
                                                    </div>
                                                    <div class="available_bar"><span></span></div>
                                                </div>
                                                <div class="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                    <div class="deals_timer_title_container">
                                                        <div class="deals_timer_title">Hurry Up</div>
                                                        <div class="deals_timer_subtitle">Offer ends in:</div>
                                                    </div>
                                                    <div class="deals_timer_content ml-auto">
                                                        <div class="deals_timer_box clearfix" data-target-time="">
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer1_hr" class="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer1_min" class="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer1_sec" class="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item deals_item">
                                            <div class="deals_image"><img src="images/deals.png" alt=""/></div>
                                            <div class="deals_content">
                                                <div class="deals_info_line d-flex flex-row justify-content-start">
                                                    <div class="deals_item_category"><a href="#">Headphones</a></div>
                                                    <div class="deals_item_price_a ml-auto">$300</div>
                                                </div>
                                                <div class="deals_info_line d-flex flex-row justify-content-start">
                                                    <div class="deals_item_name">Beoplay H7</div>
                                                    <div class="deals_item_price ml-auto">$225</div>
                                                </div>
                                                <div class="available">
                                                    <div class="available_line d-flex flex-row justify-content-start">
                                                        <div class="available_title">Available: <span>6</span></div>
                                                        <div class="sold_title ml-auto">Already sold: <span>28</span></div>
                                                    </div>
                                                    <div class="available_bar"><span></span></div>
                                                </div>
                                                <div class="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                    <div class="deals_timer_title_container">
                                                        <div class="deals_timer_title">Hurry Up</div>
                                                        <div class="deals_timer_subtitle">Offer ends in:</div>
                                                    </div>
                                                    <div class="deals_timer_content ml-auto">
                                                        <div class="deals_timer_box clearfix" data-target-time="">
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer2_hr" class="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer2_min" class="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer2_sec" class="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-item deals_item">
                                            <div class="deals_image"><img src="images/deals.png" alt=""/></div>
                                            <div class="deals_content">
                                                <div class="deals_info_line d-flex flex-row justify-content-start">
                                                    <div class="deals_item_category"><a href="#">Headphones</a></div>
                                                    <div class="deals_item_price_a ml-auto">$300</div>
                                                </div>
                                                <div class="deals_info_line d-flex flex-row justify-content-start">
                                                    <div class="deals_item_name">Beoplay H7</div>
                                                    <div class="deals_item_price ml-auto">$225</div>
                                                </div>
                                                <div class="available">
                                                    <div class="available_line d-flex flex-row justify-content-start">
                                                        <div class="available_title">Available: <span>6</span></div>
                                                        <div class="sold_title ml-auto">Already sold: <span>28</span></div>
                                                    </div>
                                                    <div class="available_bar"><span></span></div>
                                                </div>
                                                <div class="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                    <div class="deals_timer_title_container">
                                                        <div class="deals_timer_title">Hurry Up</div>
                                                        <div class="deals_timer_subtitle">Offer ends in:</div>
                                                    </div>
                                                    <div class="deals_timer_content ml-auto">
                                                        <div class="deals_timer_box clearfix" data-target-time="">
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer3_hr" class="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer3_min" class="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div class="deals_timer_unit">
                                                                <div id="deals_timer3_sec" class="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="deals_slider_nav_container">
                                    <div class="deals_slider_prev deals_slider_nav"><i class="fas fa-chevron-left ml-auto"></i></div>
                                    <div class="deals_slider_next deals_slider_nav"><i class="fas fa-chevron-right ml-auto"></i></div>
                                </div>
                            </div>
                                <div class="featured">
                                    <div class="tabbed_container">
                                        <div class="tabs">
                                            <ul class="clearfix">
                                                <li class="active">Featured</li>
                                                <li>On Sale</li>
                                                <li>Best Rated</li>
                                            </ul>
                                            <div class="tabs_line"><span></span></div>
                                        </div>
                                        <div class="product_panel panel active">
                                            <div class="featured_slider slider slick-slider slick-dotted">
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price discount">$225<span>$300</span></div>
                                                            <div class="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    {/* <input type="radio" checked name="product_color" style="background:#b19c83"/>
                                                                    <input type="radio" name="product_color" style="background:#000000"/>
                                                                    <input type="radio" name="product_color" style="background:#999999"/> */}
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount">-25%</li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price">$379</div>
                                                            <div class="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button active">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount"></li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price">$379</div>
                                                            <div class="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount"></li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price discount">$225<span>$300</span></div>
                                                            <div class="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount">-25%</li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price">$225</div>
                                                            <div class="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount"></li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price">$379</div>
                                                            <div class="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount"></li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price">$379</div>
                                                            <div class="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount">-25%</li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div class="featured_slider_item">
                                                    <div class="border_active"></div>
                                                    <div class="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div class="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt=""/></div>
                                                        <div class="product_content">
                                                            <div class="product_price">$225</div>
                                                            <div class="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                            <div class="product_extras">
                                                                <div class="product_color">
                                                                    <input type="radio" checked name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                    <input type="radio" name="product_color"/>
                                                                </div>
                                                                <button class="product_cart_button">Add to Cart</button>
                                                            </div>
                                                        </div>
                                                        <div class="product_fav"><i class="fas fa-heart"></i></div>
                                                        <ul class="product_marks">
                                                            <li class="product_mark product_discount"></li>
                                                            <li class="product_mark product_new">new</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="featured_slider_dots_cover"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popular_categories">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="popular_categories_content">
                                    <div class="popular_categories_title">Popular Categories</div>
                                    <div class="popular_categories_slider_nav">
                                        <div class="popular_categories_prev popular_categories_nav"><i class="fas fa-angle-left ml-auto"></i></div>
                                        <div class="popular_categories_next popular_categories_nav"><i class="fas fa-angle-right ml-auto"></i></div>
                                    </div>
                                    <div class="popular_categories_link"><a href="#">full catalog</a></div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="popular_categories_slider_container">
                                    <div class="owl-carousel owl-theme popular_categories_slider">
                                        <div class="owl-item">
                                            <div class="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div class="popular_category_image"><img src="images/popular_1.png" alt=""/></div>
                                                <div class="popular_category_text">Smartphones Tablets</div>
                                            </div>
                                        </div>
                                        <div class="owl-item">
                                            <div class="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div class="popular_category_image"><img src="images/popular_2.png" alt=""/></div>
                                                <div class="popular_category_text">Computers Laptops</div>
                                            </div>
                                        </div>
                                        <div class="owl-item">
                                            <div class="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div class="popular_category_image"><img src="images/popular_3.png" alt=""/></div>
                                                <div class="popular_category_text">Gadgets</div>
                                            </div>
                                        </div>
                                        <div class="owl-item">
                                            <div class="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div class="popular_category_image"><img src="images/popular_4.png" alt=""/></div>
                                                <div class="popular_category_text">Video Games Consoles</div>
                                            </div>
                                        </div>
                                        <div class="owl-item">
                                            <div class="popular_category d-flex flex-column align-items-center justify-content-center">
                                                <div class="popular_category_image"><img src="images/popular_5.png" alt=""/></div>
                                                <div class="popular_category_text">Accessories</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
	            </div>
                <div class="banner_2">
                    <div class="banner_2_background"></div>
                    {/* <div class="banner_2_background" style="background-image:url(images/banner_2_background.jpg)"></div> */}
                    <div class="banner_2_container">
                        <div class="banner_2_dots"></div>
                        <div class="owl-carousel owl-theme banner_2_slider">
                            <div class="owl-item">
                                <div class="banner_2_item">
                                    <div class="container fill_height">
                                        <div class="row fill_height">
                                            <div class="col-lg-4 col-md-6 fill_height">
                                                <div class="banner_2_content">
                                                    <div class="banner_2_category">Laptops</div>
                                                    <div class="banner_2_title">MacBook Air 13</div>
                                                    <div class="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                    <div class="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div class="button banner_2_button"><a href="#">Explore</a></div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-6 fill_height">
                                                <div class="banner_2_image_container">
                                                    <div class="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                </div>
                            </div>
                            <div class="owl-item">
                                <div class="banner_2_item">
                                    <div class="container fill_height">
                                        <div class="row fill_height">
                                            <div class="col-lg-4 col-md-6 fill_height">
                                                <div class="banner_2_content">
                                                    <div class="banner_2_category">Laptops</div>
                                                    <div class="banner_2_title">MacBook Air 13</div>
                                                    <div class="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                    <div class="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div class="button banner_2_button"><a href="#">Explore</a></div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-6 fill_height">
                                                <div class="banner_2_image_container">
                                                    <div class="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                </div>
                            </div>
                            <div class="owl-item">
                                <div class="banner_2_item">
                                    <div class="container fill_height">
                                        <div class="row fill_height">
                                            <div class="col-lg-4 col-md-6 fill_height">
                                                <div class="banner_2_content">
                                                    <div class="banner_2_category">Laptops</div>
                                                    <div class="banner_2_title">MacBook Air 13</div>
                                                    <div class="banner_2_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</div>
                                                    <div class="rating_r rating_r_4 banner_2_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                    <div class="button banner_2_button"><a href="#">Explore</a></div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-6 fill_height">
                                                <div class="banner_2_image_container">
                                                    <div class="banner_2_image"><img src="images/banner_2_product.png" alt=""/></div>
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

export default classify(defaultClasses)(Content);
