import React from 'react';
import { Link } from 'react-router';
import LayerLink from '../../modules/components/LayerLink.jsx';
import Modal from '../../modules/components/layers/Modal.jsx';

class Info2 extends React.Component {

  render() {
    return (
      <div>
        <h1>React Layer Router</h1>
        <p>This is a demo</p>
        <br />
        <Link to="info">Back Home</Link>
      </div>
    );
  }

}

export default Info2;