import axios from 'axios';


class GetService {

  constructor() {
  }

  async getActive() {
    const { data } = await axios.get(' http://localhost:5000/data/active.json');
    return data.answer;
  }

  async getArchive() {
    const { data } =  await axios.get('http://localhost:5000/data/archive.json');
    return data.answer;
  }
}

export const GetServiceInstance = new GetService();
