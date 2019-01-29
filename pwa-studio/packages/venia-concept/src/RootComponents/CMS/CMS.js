import { createElement, Component } from 'react';
import Page from 'src/components/Page';
import Banner from 'src/components/Banner';
import Button from 'src/components/Button';
import Content from 'src/components/Content';

export default class CMS extends Component {
    render() {
        return (
            <Page>
                <Banner></Banner>
                {/* <Button>test button</Button> */}
                {/* <Content></Content> */}
            </Page>
        );
    }
}
