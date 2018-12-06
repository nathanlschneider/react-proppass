import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
            isShow: true
        };
        this.increaseNumber = this.increaseNumber.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.isShow === true ? this.setState({ isShow: false }) : this.setState({ isShow: true });
    }

    increaseNumber() {
        let numberCopy = this.state.number;
        this.setState({ number: numberCopy + 1 });
    }

    render() {
        console.log(this.state.isShow);
        return (
            <div>
                <Child number={this.state.number} isShow={this.state.isShow} />
                <button onClick={this.increaseNumber}>Increase</button>
                <button onClick={this.handleClick}>Hide</button>
            </div>
        );
    }
}

export default App;
