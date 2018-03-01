import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomButton from './RoomButton';
import SearchButton from './SearchButton';
import Room from './Room';
import { map } from 'lodash';
import { Grid } from 'semantic-ui-react';
import './MenuBar.css'

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName : '',
            search : '',
            isLoading: false,
            result: []
        }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.resetComponent = this.resetComponent.bind(this);
    }

    resetComponent() {
        this.setState({

        });
    }

    handleFormChange(event) {
        const value = event.target.value
        this.setState({
            roomName: value
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
            fetch(url)
                .then(res => res.json())
                .then((res) => {
                    this.setState({
                        isLoading: false,
                        result: map(res[1], (obj) => {
                            return {"title": obj.name}
                        })
                    })
                    console.log(this.state);
                })
        }, 500);
    }


    render() {
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
                            results={this.state.result}
                            handleChange={this.handleSearchChange}handleSearchSubmit
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Room />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    } 
}

function mapStateToProps(state) {
     return {
         username : state.user.username
     }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);