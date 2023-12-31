import React, {Component} from "react";
import '../Dropdown/Dropdown.css';
class Dropdown extends Component {
    state = {
        visible: false,
    };

    // show = () => {
    //     this.setState({visible: true});
    // };

    // hide = () => {
    //     this.setState({visible: false});
    // }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }
        ))
    }

    render() {
        return(
            <div className="Dropdown">
                {/* <button 
                    type="button" 
                    className="Dropdown__toggle" 
                    onClick={this.show}>
                        Show
                </button>
                <button 
                    type="button" 
                    className="Dropdown__toggle" 
                    onClick={this.hide}>
                    Hide
                </button> */}
                <button 
                    type="button" 
                    className="Dropdown__toggle" 
                    onClick={this.toggle}>
                    {this.state.visible ? 'Hide' : 'Show'}
                </button>
                {this.state.visible && 
                    (<div className="Dropdown__menu">
                        Our menu
                    </div>)}
                
            </div>    
        );
    }
};

export default Dropdown;