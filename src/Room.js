import  React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react'

const Room = (props) => (
    <Button icon size='medium' color='green' circular>
        <Icon name='users' size='big' color='black'/>
    </Button>
)

export default Room;