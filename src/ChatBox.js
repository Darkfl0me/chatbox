import React from 'react';
import { Form } from 'semantic-ui-react';

const ChatBox = (props) => (
    <Form onSubmit={props.handleTextSubmit}>
        <Form.Input placeholder='Type your message'
            icon='send'
            size='massive'
            fluid
            onChange={props.handleTextChange}
        />
    </Form>

)

export default ChatBox;