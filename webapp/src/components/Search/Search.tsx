import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import {
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import './Search.css';
import { useCallback } from 'react';
import { User } from '../../shared/types';
import { searchByName } from '../../services/twitterApi';
import { UserList } from '../UserList/UserList';

export const Search: React.FC<RouteComponentProps> = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchErrorMessage, setSearchErrorMessage] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleSearchSubmit = useCallback(async () => {
    setSearchErrorMessage('');
    setUsers([]);
    if (searchText.length > 0) {
      setIsProcessing(true);
      const res = await searchByName(searchText);
      if (res) {
        setIsProcessing(false);
        setUsers(res.users);
      }
    } else {
      setSearchErrorMessage(
        'Please enter a business name before clicking search'
      );
      setIsProcessing(false);
    }
  }, [searchText]);

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProcessing(false);
    setSearchErrorMessage('');
    setSearchText(e.target.value);
  };

  return (
    <div className='App-Search'>
      <Grid container spacing={1} direction='row'>
        <Grid item xs={4}>
          <Typography>
            Please enter the name of the users you are searching for
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
            spacing={1}
          >
            <TextField
              data-testid='user-name-search'
              inputProps={{ 'data-testid': 'user-name-search-input' }}
              id='user-name-search'
              label='User Name'
              variant='outlined'
              onChange={handleSearchOnChange}
              value={searchText}
              error={searchErrorMessage.length > 0}
              helperText={searchErrorMessage}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid container justify='flex-end' alignItems='flex-start'>
            <Button
              size='large'
              variant='contained'
              color='primary'
              onClick={handleSearchSubmit}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {isProcessing && <LinearProgress />}
      <Grid container direction='row' justify='center'>
        <Grid item xs={12}>
          <div className='App-Search__user-list'>
          {users.length > 0 && <UserList users={users} />}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
