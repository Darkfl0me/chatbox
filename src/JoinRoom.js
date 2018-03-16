import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { userProfileLoaded } from './Actions/userActions'
import { addRoom } from './Actions/roomActions'
import { Button } from 'semantic-ui-react';


const JoinButton = (props) => (
    <Button size='large'
        content='Join Community' 
        color='yellow' 
        onClick={props.handleSubmit}
    />
)


class JoinRoom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        axios.put('http://localhost:3001/rooms',{
            roomName: this.props.roomName,
            userName: this.props.userName
        })
         .then((res) => {
             const user = res.data.userInfo;
             const room = res.data.roomInfo;
             this.props.userProfileLoaded(user);
             this.props.addRoom(room);
             console.log(res.data);
         })
    }

    render() {
        return (
            <JoinButton handleSubmit={this.handleSubmit}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        userName: state.user.username,
        roomName: state.room.name
    }
}

export default connect(mapStateToProps,
         {addRoom : addRoom, userProfileLoaded: userProfileLoaded })
         (JoinRoom);