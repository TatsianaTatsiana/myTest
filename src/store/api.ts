import axios from 'axios';

const URL = 'http://jsonplaceholder.typicode.com/';

export function getUrl(url: string) {
  return `${URL}${url}`;
}

export async function get(url: string) {
  const response = await axios.get(getUrl(url));
  return response.data;
}

export const getPosts = async () => {
  return await get('posts');
};
export const getUsers = async () => {
  return await get('users');
};
export const getComments = async () => {
  return await get('comments');
};
