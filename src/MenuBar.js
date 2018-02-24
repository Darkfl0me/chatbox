import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomButton from './RoomButton';
import SearchButton from './SearchButton'

class MenuBar extends React.Component {
    constructor() {
        super();
        this.state = {
            name : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
            name : event.target.value
        })
    }

    handleSubmit(event) {

    }


    render() {
        return (
            <div className='menuBar'>
                <RoomButton name={this.state.name} handleChange={this.handleChange}/>
            </div>
        )
    } 
}

function mapDispatchToProps(dispatch) {

}

export default MenuBar;