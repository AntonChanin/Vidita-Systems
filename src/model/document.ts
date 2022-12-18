type CommodityBilModel = {
  id: string;
  status: 'active' | 'archive';
  sum: number;
  qty: number;
  volume: number;
  name: string;
  delivery_date: number;
  currency: string;
  [key: string]: any;
}

export default CommodityBilModel;
