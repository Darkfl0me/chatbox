import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Grid, Sidebar, List,Segment } from 'semantic-ui-react'
import TopBar from './TopBar';
import MenuBar from './MenuBar';
import MessageBox from './MessageBox';
import ActivityBox from './ActivityBox';
import JoinRoom from './JoinRoom';
import Home from './home';

class Explore extends React.Component {
    render() {
        let screen = null;
        if(_.isEmpty(this.props.room)) {
            screen = <Home />
        } else {
            screen = <MessageBox />
        }
        return (
            <div>
                <TopBar />
                <Grid columns='two' verticalAlign='middle' padded divided>
                    <Grid.Column width={1} floated='left'>
                        <MenuBar />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        {screen}
                    </Grid.Column>                        
                </Grid> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        room: state.room
    }
}

export default connect(mapStateToProps,null)(Explore);