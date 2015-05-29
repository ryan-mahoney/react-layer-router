import React from 'react';
import { Link } from 'react-router';
import LayerClose from '../../modules/components/LayerClose.jsx';
import LayerLink from '../../modules/components/LayerLink.jsx';
import Modal from '../../modules/components/layers/Modal.jsx';

class Test2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Another Layer</h1>
                <p>This is a demo of how layers work.</p>

                <Link to="info">Go Back to Info Page</Link>

                <br />
                <br />

                <LayerLink to="test" layer="new" component={Modal}>Load Another Layer</LayerLink>

                <br />
                <br />

                <Link to="info2">Change Top Level Page</Link>

                <br />
                <br />

                <LayerClose>Close This Layer</LayerClose>
            </div>
        );
    }
}

export default Test2;