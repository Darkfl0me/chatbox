import React, { Component } from 'react';
import { auth } from './firebase/firebase'
import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from './Actions';


const Setting = (props) => (
    <Button icon labelPosition='right' size='tiny' floated='right' onClick={props.logoutUser}>
        Logout
        <Icon name='sign out'/>
    </Button>
    /*
    <Menu attached='top' pointing>
        <Dropdown item icon='external' simple>
            <Dropdown.Menu>
                <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
    */
);

class Header extends React.Component {
    /*
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }
    logout() {
        auth.signOut().then(() => {
            console.log('Logged out successfully');
        }).catch((err) => {
            console.log(err);
        });  
    }*/
    render() {
        return (
            <Setting logoutUser={this.props.logoutUser}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
