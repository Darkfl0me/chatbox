import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';
import ChatBox from './ChatBox';
import ChatList from './ChatList';
import ActivityBox from './ActivityBox';
import JoinRoom from './JoinRoom';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomname: props.room.name,
            channel: null,
            chats: [],
            text: ''
        }
        this.fetchMessage = this.fetchMessage.bind(this);
        this.handleTextSubmit = this.handleTextSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }
    componentDidMount() {
        const roomName = this.props.room.name;
        this.fetchMessage(roomName);
        const pusher = new Pusher('fbaa7129fe5581069543', {
            cluster: 'ap2',
            encrypted: true
        });
        this.setState({
            pusher: pusher
        });
        const channel = pusher.subscribe(roomName);
        channel.bind('message', (data) => {
            this.setState({
                chats: [...this.state.chats, data]
            });
            console.log(data);
        });
    }

    fetchMessage(name) {
        axios.get('http://localhost:3001/messages/'+ name)
            .then((res) => {
                this.setState({
                    chats: res.data
                });
            });

    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleTextSubmit(event) {
        console.log(this.state.text);
        axios.post('http://localhost:3001/messages', {
            roomName: this.props.room.name,
            userName: this.props.user.username,
            message: this.state.text
        }).then((res) => {
            console.log(res.data);
            this.setState({
                text:''
            });
        })
        
    }

    handleScroll(event) {
        console.log(event.target.scrollTop);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.room.name !== this.state.roomname) {
            this.setState({
                chats: [],
                text: ''
            });
            this.fetchMessage(nextProps.room.name);
            const pusher = this.state.pusher
            pusher.unsubscribe(this.props.room.name);
            const channel = pusher.subscribe(nextProps.room.name)
            channel.bind('message', (data) => {
                this.setState({
                    chats: [...this.state.chats, data]
                });
                console.log(data);
            });
        }
    }


    render() {
        let action = null;
        if(_.includes(this.props.user.rooms, this.props.room.name)) {
                action = <ChatBox text={this.state.text}
                        handleTextChange={this.handleTextChange}
                        handleTextSubmit={this.handleTextSubmit}
                    />
            } else {
                action = <JoinRoom />
            }
        return (
            <Grid columns={2}>
                <Grid.Column width={12}>
                    <ChatList chatList={this.state.chats}
                        handleScroll={this.handleScroll}
                    />
                    {action}
                </Grid.Column>
                <Grid.Column width={4}>
                    <ActivityBox />
                </Grid.Column>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        room: state.room,
        user: state.user
    }
}

export default connect(mapStateToProps, null)(MessageBox); 