import React from 'react';
import { Link } from 'react-router';

class Info2 extends React.Component {
    render() {
        return (
            <div>
                <h1>React Layer Router</h1>
                <p>This is a demo</p>

                <br />
                <br />
                <Link to="info">Back Home</Link>
            </div>
        );
    }
}

export default Info2;