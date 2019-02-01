import { Component, createElement } from 'react';
import { string, shape, arrayOf, number } from 'prop-types';

import classify from 'src/classify';
import GalleryItems, { emptyData } from './items';
import defaultClasses from './gallery.css';

class Gallery extends Component {
    static defaultProps = {
        data: emptyData
    };

    render() {
        const { classes, data } = this.props;
        const hasData = Array.isArray(data) && data.length;
        const items = hasData ? data : emptyData;

        return (
            <GalleryItems 
                items={items} 
                addToCart={this.props.addToCart}
            />
        );
    }
}

export default classify(defaultClasses)(Gallery);
