export interface User {
  user_id: number,
  screen_name: string;
}

export interface Tweet {
  user: User;
  text: string;
}

export interface UserSearchResponse {
  users: User[];
}

export interface userTimelineResponse {
  timeLine: Tweet[];
}