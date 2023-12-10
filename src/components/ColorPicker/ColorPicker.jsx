import React, {Component} from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0, 
    }

    setActiveIndex = (index) => {
        this.setState({activeOptionIdx: index});
    }

    makeOptionClasses = (index) => {
        const optionClasses = ['ColorPicker__option'];
        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }

        return optionClasses.join(' ');
    }

    render() {
        const {activeOptionIdx} = this.state;
        const {options} = this.props
        const {label} = options[activeOptionIdx];
    
        return(
            <div className='ColorPicker'>
                <h2 className='ColorPicker__title'>Color picker</h2>
                <p>{label}</p>
                <div>
                    {this.props.options.map(({label, color}, index) => {
                        const optionClassName = this.makeOptionClasses(index);
                        return (
                            <button 
                                key={label} 
                                className={optionClassName}
                                style={{backgroundColor: color, 
                                        border: activeOptionIdx === index ?  '5px solid black' : 'none'}}
                                onClick={() => this.setActiveIndex(index)}>                    
                            </button>
                        )
                    }                    
                    )}
                </div>
            </div>
        );        
    }   
};

export default ColorPicker;