import React, { Component } from 'react';
import './App.css';
export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            isShow: true
        };
    }

    componentDidMount() {
        this.updateNumber();
    }
    componentDidUpdate(previousProps, previousState) {
        if (previousProps.number !== this.props.number) {
            this.updateNumber();
        }

        if (previousProps.isShow !== this.props.isShow) {
            this.updateShow();
        }
    }

    updateNumber() {
        this.setState({ number: this.props.number });
    }

    updateShow() {
        this.setState({ isShow: this.props.isShow });
    }

    render() {
        return (
            <div>
                <div className={this.state.isShow === true ? 'show' : 'hide'}>Child1 says: {this.state.number}</div>
            </div>
        );
    }
}
