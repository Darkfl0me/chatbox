import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import Header from './Header';
import MenuBar from './MenuBar';

class Explore extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid columns='two' verticalAlign='middle' padded divided>
                    <Grid.Column width={1} floated='left'>
                        <MenuBar />
                    </Grid.Column>
                </Grid> 
            </div>
        );
    }
}

export default Explore;