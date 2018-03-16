import React from 'react';
import _ from 'lodash';
import { Grid, Card } from 'semantic-ui-react';

const HomePage = (props) => {
    const rooms = _.map(props.roomsList, (room, key) => {
        return  <Grid.Column key={key}>
                    <Card color='teal' onClick={props.handleClick}>
                        <Card.Content>
                            <Card.Header>{room.name}</Card.Header>
                        </Card.Content>
                    </Card>
                </Grid.Column>
    });
    return (
        <Grid columns={3}>
            {rooms}
        </Grid>
    )
}


export default HomePage;