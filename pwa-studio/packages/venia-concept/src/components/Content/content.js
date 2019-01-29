import { Component } from 'react';
import classify from 'src/classify';
import defaultClasses from './content.css';

class Content extends Component {

    render() {
        return (  
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
        );
    }
}

export default classify(defaultClasses)(Content);
