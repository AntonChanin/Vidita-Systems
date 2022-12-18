import axios from 'axios';
import CommodityBilModel from '../../model/document';


class PostService {

  constructor() {
  }

  async postArchive(data: CommodityBilModel[]) {
    return await axios.post(`${import.meta.env.VITE_API_CANCEL}`, { answer:
      data.map(({
        id,
        sum,
        qty,
        volume,
        name,
        delivery_date,
        currency,
      }) => ({
      id,
      status: 'archive',
      sum,
      qty,
      volume,
      name,
      delivery_date,
      currency,
    })) }, {
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}

export const PostServiceInstance = new PostService();
