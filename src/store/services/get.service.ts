import axios from 'axios';


class GetService {

  constructor() {
  }

  async getActive() {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_1}`);
    return typeof data === 'string' ? JSON.parse(data).answer : data.answer;
  }

  async getArchive() {
    const { data } =  await axios.get(`${import.meta.env.VITE_API_ENDPOINT_2}`);
    return typeof data === 'string' ? JSON.parse(data).answer : data.answer;
  }
}

export const GetServiceInstance = new GetService();
