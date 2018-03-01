import React, { Component } from 'react';
import { auth } from './firebase/firebase'
import { Dropdown, Menu, Icon, Button, Header } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from './Actions';


const Setting = (props) => (
    <Button icon labelPosition='right' size='tiny' floated='right' onClick={props.logoutUser}>
        Logout
        <Icon name='sign out'/>
    </Button>
);

class TopBar extends React.Component {
    render() {
        return (
            <Menu>
                <Menu.Item>
                    <Header content='devConnect'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Setting logoutUser={this.props.logoutUser}/>
                </Menu.Item>
            </Menu>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopBar);
