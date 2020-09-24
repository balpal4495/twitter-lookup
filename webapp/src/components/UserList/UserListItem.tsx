import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  Grid,
  LinearProgress,
  Avatar,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import React, { useEffect } from 'react';
import { getUserTimeline } from '../../services/twitterApi';
import { User, userTimelineResponse } from '../../shared/types';
import './Userlistitem.css';

interface Props {
  user: User;
}
export const UserListItem = (props: Props) => {
  const { user } = props;

  const [timeline, setTimeline] = React.useState<userTimelineResponse>();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchTimeline = async () => {
    setLoading(true);
    const userTimeline = await getUserTimeline(user.user_id!);
    setLoading(false);
    setTimeline(userTimeline);
  };

  useEffect(() => {
    fetchTimeline();
    // eslint-disable-next-line
  }, [user.user_id]);

  if (isLoading || !timeline) return <LinearProgress />;

  return (
    <div className='Userlistitem'>
      <Grid item xs={2} spacing={3}>
        {' '}
        <Paper elevation={3}>
          <Card variant='outlined'>
            <CardContent>
              <Avatar
                alt={user.screen_name}
                src={user.profile_image_url_https}
              />
              <Typography variant='h5' component='h2'>
                {user.screen_name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' onClick={fetchTimeline}>
                <RefreshIcon />
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <div>
          <Grid container direction='row'>
            {timeline.map((t) => (
              <Grid item xs={2} spacing={3} key={t.id}>
                <Paper elevation={0}>{t.text} </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
