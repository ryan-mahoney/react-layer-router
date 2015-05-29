import React from 'react';
import { Link } from 'react-router';
import LayerLink from '../../modules/components/LayerLink.jsx';
import Modal from '../../modules/components/layers/Modal.jsx';

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