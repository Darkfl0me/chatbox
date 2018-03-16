import  React, { Component } from 'react';
import _ from 'lodash';
import { Icon, Button, TransitionablePortal,Segment, List } from 'semantic-ui-react'

const RoomList = (props) => {
    const roomList = _.map(props.rooms, (name, key) => {
        return <List.Item onClick={props.handleRoomSelect}>
                <List.Content>
                    <List.Header as='a'>{name}</List.Header> 
                </List.Content> 
            </List.Item>
    }); 
    return (
        <TransitionablePortal
            closeOnTriggerClick
            openOnTriggerClick
            trigger={(
                <Button icon size='medium' color='green' circular>
                    <Icon name='users' size='big' color='black'/>
                </Button>
            )}
        >
            <List divided 
                size='large'
            >
                {roomList}
            </List>
        </TransitionablePortal>
    )
}

export default RoomList;