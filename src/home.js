import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { addRoom } from './Actions/roomActions'
import HomePage from './HomePage';


class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            roomsList: []
        }
        this.fetchRoom = this.fetchRoom.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.fetchRoom();
    }

    handleClick(event) {
        console.log(event.target.textContent);
        const room = event.target.textContent;
        axios.get('http://localhost:3001/rooms/'+ room)
         .then((res) => {
            console.log(res.data);
            const roomData = res.data;
            this.props.addRoom(roomData);

         })
    }

    fetchRoom() {
        axios.get('http://localhost:3001/rooms')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    roomsList: res.data
                });
            })
    }

    render() {
        return (
            <HomePage roomsList={this.state.roomsList}
                handleClick={this.handleClick}
            />
        )
    }
}

export default connect(
    null,
    {addRoom : addRoom}
)(Home);
