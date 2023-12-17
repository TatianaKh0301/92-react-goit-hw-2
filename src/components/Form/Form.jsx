import React, {Component} from "react";
import shortid from "shortid";

class Form extends Component {
    state = {
        name: "",
        surname: "",
    };

    nameId = shortid.generate();
    surnameId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value} );
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({ name: "", surname: ""});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>
                    Name <input name="name" type="text" value={this.state.name} onChange={this.handleChange} id={this.nameId}/>
                </label>
                <label htmlFor={this.surnameId}>
                    SurName <input name="surname" type="text" value={this.state.surname} onChange={this.handleChange} id={this.surnameId}/>
                </label>

                <button type="submit">Submit</button>
            </form>
        );        
    };
};


export default Form;