import React, { Component } from 'react';
import { Modal, Button, Icon, Form, Input, Container } from 'semantic-ui-react';
import './styles.css'

const RoomButton = (props) => {
    const modalDesign = {
        padding: '5px'
    }
    return (
        <div className=''>
                <Modal size='tiny' trigger={
                    <Button circular icon size='medium' color='green'>
                        <Icon size='big' name='plus' color='black'/>
                    </Button>}
                    closeIcon>
                    <Modal.Header className=''>
                        Create a room for your next big project
                    </Modal.Header>
                    <Form className='formDesign'>
                        <Form.Input label='Room Name' placeholder='Room Name' 
                            name='name' value={props.name} inline onChange={props.handleChange}/>
                        <Form.Button type='submit' color='green'>
                            Submit
                        </Form.Button>
                    </Form>
                </Modal>
        </div>
    )
}

export default RoomButton;