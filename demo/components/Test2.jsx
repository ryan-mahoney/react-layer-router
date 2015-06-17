import React from 'react';
import LayerClose from '../../lib/components/LayerClose';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';
import Test from './Test.jsx';

class Test2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Another Layer</h1>
                <p>This is a demo of how layers work.</p>

                <br />
                <br />

                <LayerLink component={Test} layer="new" wrapper={Modal}>Load Another Layer</LayerLink>

                <br />
                <br />

                <LayerClose>Close This Layer</LayerClose>
            </div>
        );
    }
}

export default Test2;