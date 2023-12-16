import React, {Component} from "react";

class Form extends Component {
    state = {
        name: "",
        surname: "",
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    Name <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label htmlFor="">
                    SurName <input name="surname" type="text" value={this.state.surname} onChange={this.handleChange}/>
                </label>

                <button type="submit">Submit</button>
            </form>
        );        
    };
};


export default Form;