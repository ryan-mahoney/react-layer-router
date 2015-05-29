import React from 'react';
import { Link } from 'react-router';
import LayerLink from '../../modules/components/LayerLink.jsx';

class Info extends React.Component {

  render() {
    return (
      <div>
        <h1>Info area</h1>
        <p>info</p>
        <br />
        <Link to="test">Test Link</Link>
        <br />
        <LayerLink to="test" layer="new">Test Layer Link</LayerLink>
      </div>
    );
  }

}

export default Info;