import React, { Component } from 'react';
import { Button, Icon, Image, Container } from 'semantic-ui-react'

const loginPageStyle = {
    backgroundImage: "url('/assets/bg.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1360px 625px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    backgroundBlendMode: 'lighten',
    width: '100%',
    height: '625px',
    top: 0,
    left: 0 

}

const LoginForm = (props) => (
    <Container style={loginPageStyle} fluid textAlign='center'>
        <Button style={{marginTop:'300px'}} color='black' icon onClick={props.loginUser} size='large'>
            Sign in with Github
            <Icon name='sign in'/>
        </Button>
    </Container>
)

export default LoginForm;