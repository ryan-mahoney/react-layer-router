import React from 'react';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';

class Info2 extends React.Component {
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
                <h1>React Layer Router</h1>
                <p>This is a demo</p>

                <br />
                <br />
                <a onClick={this.handleClick} href="info">Back Home</a>
            </div>
        );
    }
}

export default Info2;