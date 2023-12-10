import { Component } from "react";
import TodoList from "components/TodoList/TodoList";


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
            {id:'td-1', text: 'Learn React', completed: false},
            {id:'td-2', text: 'Learn React Router', completed: false},
            {id:'td-3', text: 'Learn Redux', completed: false},
        ],
    }    

    render () {
        const {todos} = this.state;
        return (
            <div>
                {/* <Counter/> */}
                {/* <Dropdown /> */}
                {/* <ColorPicker options={Colorpicker}/> */}
                <TodoList todos={todos}/>
            </div>
    );
  }  
};

export default App;