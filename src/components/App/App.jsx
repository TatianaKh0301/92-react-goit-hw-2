import { Component } from "react";
import shortid from "shortid";
import TodoList from "components/TodoList/TodoList";
// import Form from "components/Form/Form";
import Filter from "components/Filter";
import TodoEditor from "components/TodoEditor";
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
        filter:'',       
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

    addTodo = text => {
        console.log(text);
        const todo = {
            id: shortid.generate(),
            text,
            completed: false,
        }

        this.setState(({todos}) => ({
            todos: [todo, ...todos],
        }));
    }

    deleteTodo = todoId => {
        this.setState(prevState => (
            {todos: prevState.todos.filter(todo => todo.id !== todoId), }
        ));
    };

    changeFilter = (event) => {
        this.setState({filter: event.currentTarget.value});
    };

    getVisibleTodos = () => {
        const { filter, todos } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return todos.filter(todo => 
            todo.text.toLowerCase().includes(normalizedFilter), );
    };

    getCompletedTodoCount = () => {
        const { todos } = this.state;
        return (todos.reduce(
            (total, todo) => (todo.completed ? total + 1 : total), 0,
            ))
    }

    render () {
        const {todos, filter} = this.state;
        const totalTodoCount = todos.length;
        const completedTodoCount = this.getCompletedTodoCount();
        const visibleTodos = this.getVisibleTodos();
        
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

               
                {/* <Form onSubmit={this.formSubmitHandler}/> */}
                <Filter value={filter} onChange={this.changeFilter}/>
                <TodoEditor onSubmit={this.addTodo} />
                <div>
                    <p>Total: {totalTodoCount}</p>
                    <p>Number of completed: {completedTodoCount}</p>
                </div>
                <TodoList todos = { visibleTodos } onDeleteTodo = {this.deleteTodo}/>
            </Wrapper>
    );
  }  
};

export default App;