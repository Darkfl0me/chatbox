import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import TopBar from './TopBar';
import MenuBar from './MenuBar';
import MessageBox from './MessageBox';
import ActivityBox from './ActivityBox'

class Explore extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <Grid columns='two' verticalAlign='middle' padded divided>
                    <Grid.Column width={1} floated='left'>
                        <MenuBar />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <MessageBox />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ActivityBox />
                    </Grid.Column>
                </Grid> 
            </div>
        );
    }
}

export default Explore;