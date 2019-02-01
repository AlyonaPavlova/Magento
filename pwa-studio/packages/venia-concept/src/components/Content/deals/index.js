import React, {createElement, Component} from 'react';
import initTimer from './timer';
import slider from './slider';

class Deals extends Component {
    componentDidMount() {
        initTimer(this.node);
        slider(this.node);
    }

    saveNode = node => {
        this.node = node
    }

    render() {
        return(
            <div class="deals" ref={this.saveNode}>
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
        )
    }
}

export default Deals;