import React from 'react';
import { Link } from 'react-router';
import LayerClose from '../../modules/components/LayerClose.jsx';
import LayerLink from '../../modules/components/LayerLink.jsx';

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <p>test</p>

                <Link to="info">Info</Link>

                <br />

                <LayerLink to="info" layer="0">Info to Here</LayerLink>
                <br />
                <LayerLink to="info" layer="new">Info to Another</LayerLink>

                <br />
                <LayerClose>Close Layer</LayerClose>
            </div>
        );
    }
}

export default Test;