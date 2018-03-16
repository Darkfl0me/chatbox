import React from 'react';
import _ from 'lodash';
import { Segment, Container, Comment } from 'semantic-ui-react';

const ChatList = (props) => {
    const chats = _.map(props.chatList, (message, index) => {
        return (
            <Comment key={index}>
                <Comment.Content>
                    <Comment.Author as='a'>{message.creator}</Comment.Author>
                    <Comment.Text>{message.body}</Comment.Text>
                </Comment.Content>
            </Comment>
        )
    })
    return ( 
        <Segment style={{overflowY: 'scroll', height:450}} 
            size='massive' 
            fluid color='red' 
            padded='very' 
            ref={props.handleScroll}>
            <Comment.Group>
                {chats}
            </Comment.Group>
        </Segment>
    )
}
export default ChatList;
