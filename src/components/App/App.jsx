import { Component } from "react";
import TodoList from "components/TodoList/TodoList";
import Form from "components/Form/Form";
import { Wrapper } from "./App.styled";


// import Counter from "components/Counter/Counter";
// import Dropdown from "components/Dropdown/Dropdown";
// import ColorPicker from "components/ColorPicker/ColorPicker";
// import TodoList from '../TodoList';

// const Colorpicker = [
//     {label: 'red', color: '#F44336'},
//     {label: 'green', color: '#4CAF50'},
//     {label: 'blue', color: '#2196F3'},
//     {label: 'grey', color: '#607088'},
//     {label: 'pink', color: '#E91E63'},
//     {label: 'indigo', color: '#3F5185'},
// ];

class App extends Component {
    state = {
        todos: [
            {id:'td-1', text: 'Learn React', completed: true},
            {id:'td-2', text: 'Learn React Router', completed: false},
            {id:'td-3', text: 'Learn Redux', completed: false},
        ],       
    }    

    formSubmitHandler = data => {
        console.log(data);
    }

   
    // handleNameChange = event => {
    //     console.log(event.currentTarget.value);
    //     this.setState({ name: event.currentTarget.value} );
    // };

    // handleSurNameChange = event => {
    //     console.log(event.currentTarget.value);
    //     this.setState({ surname: event.currentTarget.value} );
    // };

    deleteTodo = todoId => {
        this.setState(prevState => (
            {todos: prevState.todos.filter(todo => todo.id !== todoId), }
        ));
    };

    render () {
        const {todos} = this.state;
        const totalTodoCount = todos.length;
        const completedTodoCount = todos.reduce(
            (total, todo) => (todo.completed ? total + 1 : total), 0,
            );
        return (
            <Wrapper>
                {/* <Counter/> */}
                {/* <Dropdown /> */}
                {/* <ColorPicker options={Colorpicker}/> */}
                {/* <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}
                /> */}

               
                <Form onSubmit={this.formSubmitHandler}/>
                <div>
                    <p>Total: {totalTodoCount}</p>
                    <p>Number of completed: {completedTodoCount}</p>
                </div>
                <TodoList todos={todos} onDeleteTodo = {this.deleteTodo}/>
            </Wrapper>
    );
  }  
};

export default App;