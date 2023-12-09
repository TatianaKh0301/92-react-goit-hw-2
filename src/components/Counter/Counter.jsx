import { Component } from "react";

class Counter extends Component {
    state = {
        value: 5,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
                value: prevState.value + 1,
            }));
    };

    handleDecrement = () => {
       this.setState(prevState => ({
            value: prevState.value - 1,
       }));
    }

    render() {
        return(
            <div className="counter">
                <span className="counter__value">{this.state.value}</span>

                <div className="counter__controls">
                    <button type="button" onClick={this.handleIncrement}>Increase 1</button>
                    <button type="button" onClick={this.handleDecrement}>Decrease 1</button>
                </div>
            </div>
        );
    }
};

export default Counter;