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
            if (nextState.route == null) {
                nextState.style = { display: 'none' };
            }
            component.setState(nextState);
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
        }

        var Component = this.state.route;
        var Wrapper = this.state.wrapper;

        if (Wrapper != null) {
            return (
                <Wrapper
                    id={id}
                    style={this.state.style}
                    className="react-layer"
                    router={this.state.router}>
                        <Component
                            router={this.state.router}
                            {...this.state.params}
                        />
                </Wrapper>);
        } else {
            return (
                <Component
                    id={id}
                    style={this.state.style}
                    className="react-layer"
                    router={this.state.router}
                    {...this.state.params} />
            );
        }
    }
}

export default Layer;