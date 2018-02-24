import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
const LoginForm = (props) => (
    <div className='loginPage'>
        <Button icon onClick={props.loginUser}>
            Sign in with Github
            <Icon name='sign in'/>
        </Button>
    </div>
)

export default LoginForm;