import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class MessageBox extends React.Component {
    render() {
        return (
            <div>
            <Segment size='massive' color='red' padded='very'/>
            <Input icon='send' placeholder='type your message' size='massive' fluid/>
            </div>
        )
    }
}

export default MessageBox;