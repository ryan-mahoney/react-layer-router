import React from 'react';
import LayerClose from '../../lib/components/LayerClose';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';
import Test2 from './Test2.jsx';

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>A Layer</h1>
                <p>This is a demo of how layers work.</p>

                <br />
                <br />

                <LayerLink component={Test2} layer="1" wrapper={Modal}>Put Different Content Here</LayerLink>

                <br />
                <br />

                <LayerLink component={Test2} layer="new" wrapper={Modal}>Load Another Layer</LayerLink>

                <br />
                <br />

                <LayerClose className="extra-class extra-class2">Close This Layer</LayerClose>
            </div>
        );
    }
}

export default Test;