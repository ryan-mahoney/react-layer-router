import React from 'react';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';

class Info extends React.Component {

    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        var el = event.target;
        var routeName = el.getAttribute('href')
        console.log(this.props);
        //this.props.router.transitionTo(routeName);
    }

    render() {
        return (
            <div>
                <h1>React Layer Router</h1>
                <p>This is a demo</p>
                <br />
                <br />

                <a onClick={this.handleClick} href="info2">Regular React Link</a>

                <br />
                <br />

                <LayerLink to="test" layer="new" component={Modal}>Open a Layer</LayerLink>
            </div>
        );
    }
}

export default Info;