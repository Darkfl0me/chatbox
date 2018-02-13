import React, { Component } from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState ({
            query: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <input value={this.state.query} onChange={this.handleInputChange} />
            </form>
        )
    }
}