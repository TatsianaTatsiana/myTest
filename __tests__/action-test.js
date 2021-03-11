import axios from 'axios';
import {get} from '../src/store/api';

jest.mock('axios');

describe('getPosts', () => {
  it('getPosts successfully data from an API', async () => {
    const data = {data: [1, 2, 3]};

    axios.get.mockImplementationOnce(() => Promise.resolve({data}));
    await expect(get('posts')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
