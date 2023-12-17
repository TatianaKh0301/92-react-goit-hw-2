import React, { Component } from "react";

class TodoEditor extends Component {
    state = {
        message: "",
    }

    handleChange = (event) => {

    }


    render() {
        return(
            <form>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="button">Create</button>
            </form>
        );
    }
}

export default TodoEditor;