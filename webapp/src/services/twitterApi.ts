import axios from 'axios';
import { UserSearchResponse, userTimelineResponse  } from '../shared/types';
export const searchByName = async (searchText: string): Promise<UserSearchResponse> => {

  const url = `http://localhost:8000/api/user/search/${searchText}`;

  const response = await axios.get(url);

  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Failed to fetch businesses');
}

export const getUserTimeline = async (userId: number): Promise<userTimelineResponse> => {
  const url = `http://localhost:8000/api/timeline/${userId}`;

  const response = await axios(url);

  if (response.status === 200) {
    return response.data;
  }
  throw new Error(`Failed to fetch user with id: ${userId}`);
}
