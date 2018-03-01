import  React, { Component } from 'react';
import  { Dropdown, Button, Icon, Menu, TransitionablePortal, Segment, Search} from 'semantic-ui-react';

const SearchButton = (props) => (
        <TransitionablePortal
            transition={{animation:'silde right', duration: 200}}
            trigger={(<Button icon circular color='green' size='medium'>
                <Icon name='search' size='big' color='black'/>
            </Button>)}
        >   
            <Segment style={{ left: '5%', position: 'fixed', top: '5%', zIndex: 1000}}>
                <Search name={props.name}
                    loading={props.loading}
                    results={props.results}
                    value={props.Search}
                    onSearchChange={props.handleChange}
                />
            </Segment>
        </TransitionablePortal>
        

    
)

export default SearchButton;