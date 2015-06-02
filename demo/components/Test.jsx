import React from 'react';
import LayerClose from '../../lib/components/LayerClose';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';

class Test extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        var el = event.target;
        var routeName = el.getAttribute('href')
        this.props.router.transitionTo(routeName);
    }

    render() {
        return (
            <div>
                <h1>A Layer</h1>
                <p>This is a demo of how layers work.</p>

                <br />
                <br />

                <LayerLink to="test2" layer="1" component={Modal}>Put Different Content Here</LayerLink>

                <br />
                <br />

                <LayerLink to="test2" layer="new" component={Modal}>Load Another Layer</LayerLink>

                <br />
                <br />

                <a onClick={this.handleClick} href="info2">Change Top Level Page</a>

                <br />
                <br />

                <LayerClose className="extra-class extra-class2">Close This Layer</LayerClose>
            </div>
        );
    }
}

export default Test;