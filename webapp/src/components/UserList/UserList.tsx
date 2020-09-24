import React from 'react';
import { UserListItem } from './UserListItem';
import { User } from '../../shared/types';
import { GridList, GridListTile } from '@material-ui/core';

interface Props {
  users: User[];
}
export const UserList = (props: Props) => {
  const { users } = props;
  return (
    <>
      <GridList cellHeight={300} cols={3}>
        {users.map((user: User) => (
          <GridListTile key={user.user_id} cols={1}>
            <UserListItem user={user} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};
