import React from 'react';
import LayerEvents from '../LayerEvents';

class Layer extends React.Component {

    constructor (props) {
        super(props);
        this.state = props;
    }

    componentWillMount () {
        var component = this;
        LayerEvents.on('react-layer-' + this.props.offset, function(nextState) {
            component.setState(nextState);
        });
    }

    render() {
        var Component = this.state.component;
        var Wrapper = this.state.wrapper;

        var className = 'react-layer';
        var id = 'react-layer-' + this.props.offset;
        if (Component == null) {
            return (
                <div
                    className={className}
                    id={id}
                    style={this.state.style}
                >Empty Layer.</div>);
        }

        if (Wrapper != null) {
            return (
                <Wrapper
                    id={id}
                    style={this.state.style}
                    className="react-layer">
                        <Component {...this.state.params} />
                </Wrapper>);
        } else {
            return (
                <Component
                    id={id}
                    style={this.state.style}
                    className="react-layer"
                    {...this.state.params} />
            );
        }
    }
}

export default Layer;