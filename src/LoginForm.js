import React, { Component } from 'react';
import { Button, Icon, Image, Container, Header } from 'semantic-ui-react'

const loginPageStyle = {
    backgroundImage: "url('/assets/bimg.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1360px 625px',
    backgroundColor: 'rgba(255,255,255,0.0)',
    backgroundBlendMode: 'lighten',
    width: '100%',
    height: '625px',
    top: 0,
    left: 0,
    padding: '2%'
}

const LoginForm = (props) => (
    <Container style={loginPageStyle} >
        <Header as='h1' inverted>A faster way for your<br/>
            team to communicate            
        </Header>
        <Header as='h4' inverted >When your team needs to kick off a project, 
            hire a<br/>new employee, deploy some code, review a sales contract, 
            <br/>finalize next year's budget, measure an A/B test, plan your<br/> 
            next office opening, and more, We has you covered.
        </Header>
        <Button color='olive' icon onClick={props.loginUser} size='large'>
            Sign in with Github
            <Icon name='sign in'/>
        </Button>
    </Container>
)

export default LoginForm;