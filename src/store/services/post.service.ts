import axios from 'axios';


class PostService {

  constructor() {
  }

  async postArchive(data: JSON) {
    return await axios.post('http://localhost:5000/api/cancel', data, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}

export const PostServiceInstance = new PostService();
