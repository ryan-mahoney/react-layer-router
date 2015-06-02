import React from 'react';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';
import { Link } from 'react-router';

class Info extends React.Component {

    render() {
        return (
            <div>
                <h1>React Layer Router</h1>
                <p>This is a demo</p>
                <br />
                <br />

                <Link to="info2">Regular React Link</Link>

                <br />
                <br />

                <LayerLink to="test" layer="new" component={Modal}>Open a Layer</LayerLink>
            </div>
        );
    }
}

export default Info;