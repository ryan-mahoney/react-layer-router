import React from 'react';
import LayerEvents from '../LayerEvents';

class Layer extends React.Component {

    constructor (props) {
        super(props);
        this.state = props;
        this.componentWillMount = this.componentWillMount.bind(this);
        this.render = this.render.bind(this);
    }

    componentWillMount () {
        var component = this;
        LayerEvents.on('react-layer-' + this.props.offset, function(nextState) {
            var style = component.state.style;
            if (nextState.route == null) {
                style.display = 'none';
            } else {
                style.display = 'block';
            }
            component.setState({
                route: nextState.route,
                style: style
            });
        });
    }

    render() {
        var route = this.state.route;
        var className = 'react-layer';
        var id = 'react-layer-' + this.props.offset;
        if (route == null) {
            return (
                <div
                    className={className}
                    id={id}
                    style={this.state.style}
                >Empty Layer.</div>);
        } else {
            return route;
        }
    }
}

export default Layer;