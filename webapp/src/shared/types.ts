export interface User {
  user_id: number,
  screen_name: string;
  profile_image_url_https: string;
}

export interface Tweet {
  user: User;
  text: string;
}

export interface UserSearchResponse {
  users: User[];
}

export interface Timeline {
  user: User,
  text: string;
  id: number;
}


export type userTimelineResponse = Timeline[];