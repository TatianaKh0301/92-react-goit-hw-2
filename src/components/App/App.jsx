import { Component } from "react";
import '../Dropdown/Dropdown.css';
// import Counter from "components/Counter/Counter";
import Dropdown from "components/Dropdown/Dropdown";

class App extends Component {
    render () {
        return (
            <div>
                {/* <Counter/> */}
                <Dropdown />
            </div>
    );
  }  
};

export default App;