import React from 'react';
import LayerClose from '../../lib/components/LayerCloseRouted';
import LayerLink from '../../lib/components/LayerLinkRouted';
import Modal from '../../lib/components/layers/Modal';

class Test2 extends React.Component {
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
                <h1>Another Layer</h1>
                <p>This is a demo of how layers work.</p>

                <a onClick={this.handleClick} href="info">Go Back to Info Page</a>

                <br />
                <br />

                <LayerLink to="test" layer="new" wrapper={Modal}>Load Another Layer</LayerLink>

                <br />
                <br />

                <a onClick={this.handleClick} href="info2">Change Top Level Page</a>

                <br />
                <br />

                <LayerClose>Close This Layer</LayerClose>
            </div>
        );
    }
}

export default Test2;