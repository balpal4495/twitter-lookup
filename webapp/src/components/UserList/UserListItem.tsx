import {
  Card,
  CardContent,
  Typography,
  CardActions,
  // Button,
  Paper,
} from '@material-ui/core';
import React from 'react';
// import { navigate } from '@reach/router';
import { User } from '../../shared/types';

interface Props {
  user: User;
}
export const UserListItem = (props: Props) => {
  const { user } = props;

  return (
    <>
      <Paper elevation={3}>
        <Card variant='outlined'>
          <CardContent>
            <Typography color='textSecondary'>
              user
            </Typography>
            <Typography variant='h5' component='h2'>
              {user.screen_name}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size='small' onClick={() => navigate(`/business/${business.Abn}`)}>View more details</Button> */}
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};
