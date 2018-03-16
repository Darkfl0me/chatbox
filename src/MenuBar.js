import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import RoomButton from './RoomButton';
import SearchButton from './SearchButton';
import RoomList from './RoomList';
import { map } from 'lodash';
import { Grid, List } from 'semantic-ui-react';
import './MenuBar.css'
import { bindActionCreators } from 'redux';
import { addRoom } from './Actions/roomActions';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName : '',
            search : '',
            isLoading: false,
            results: {}
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleResultSelect = this.handleResultSelect.bind(this);
        this.handleRoomSelect = this.handleRoomSelect.bind(this);
        this.resetComponent = this.resetComponent.bind(this);
    }

    resetComponent() {
        this.setState({

        });
    }

    handleFormChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const bodyRequest = {
            //username: this.props.username,
            roomName: this.state.roomName,
            loading: false
        }
        const headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json')
        fetch('http://localhost:3001/rooms', {
            method: 'POST',
            headers,
            body: JSON.stringify(bodyRequest)
        }).then(res => res.json())
          .then((data) => {
              console.log(data);
          })
    }

    handleSearchChange(event) {
        const value = event.target.value;
        this.setState({
            search: value,
            isLoading: true
        })
        setTimeout(() => {
            if(this.state.search.length < 1 ) return this.resetComponent();
            const url = 'http://localhost:3001/search/?query=' + this.state.search;
            axios.get('http://localhost:3001/search', {
                params: {
                    query: this.state.search
                }
            })
            .then((response) => {
                  console.log(response.data);
                  const data = response.data;
                  this.setState({
                      isLoading: false,
                      results: data
                  })
                  console.log(this.state);
            }) 
        }, 500);
    }

    handleResultSelect(event, { result }) {
        console.log(result);
        this.setState({
            search: result.title
        });
        console.log(this.state);
        let keyword = this.state.search;
        axios.get('http://localhost:3001/rooms/' + keyword)
         .then((res) => {
            console.log(res.data);
            const roomData = res.data;
            this.props.addRoom(roomData);

         })
    }

    handleRoomSelect(event) {
        console.log(event.target.textContent);
        axios.get('http://localhost:3001/rooms/' + event.target.textContent)
            .then((res) => {
                const roomData = res.data;
                this.props.addRoom(roomData);
            })
    }


    render() {
        const roomList = _.map(this.props.user.rooms, (name, key) => {
            return <List.Item>
                    <List.Content>
                        <List.Header as='a'>{name}</List.Header> 
                    </List.Content> 
                </List.Item>
        })
        return (
            <Grid columns='three' verticalAlign='middle' divided='vertically'>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <RoomButton name={this.state.roomName} 
                            privateRoom={this.state.privateRoom} 
                            handleChange={this.handleFormChange}
                            handleSubmit={this.handleFormSubmit}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <SearchButton name={this.state.search}
                            loading={this.state.isLoading}
                            results={this.state.results}
                            handleChange={this.handleSearchChange}
                            handleResultSelect={this.handleResultSelect}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <RoomList rooms={this.props.user.rooms}
                            handleRoomSelect={this.handleRoomSelect}    
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    } 
}

function mapStateToProps(state) {
     return {
         user : state.user,
         rooms: state.room.roomname
     }
}

export default connect(
    mapStateToProps,
    {addRoom : addRoom}
)(MenuBar);