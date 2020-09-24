import React from 'react';
import { UserListItem } from './UserListItem';
import { User } from '../../shared/types';
import { Grid } from '@material-ui/core';
import './Userlist.css';

interface Props {
  users: User[];
}
export const UserList = (props: Props) => {
  const { users } = props;
  return (
    <>
      <div className="Userlist">
        <Grid container direction='row'>
          {users.map((user: User) => (
            <UserListItem key={user.user_id} user={user} />
          ))}
        </Grid>
      </div>
    </>
  );
};
