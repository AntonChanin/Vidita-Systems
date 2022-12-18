import axios from 'axios';


class GetService {

  constructor() {
  }

  async getActive() {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_1}`);
    return data.answer;
  }

  async getArchive() {
    const { data } =  await axios.get(`${import.meta.env.VITE_API_ENDPOINT_2}`);
    return data.answer;
  }
}

export const GetServiceInstance = new GetService();
