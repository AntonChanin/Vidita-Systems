type CommodityBil = {
  id: string,
  status: string, // {‘active’, ‘archive’}
  sum: number,
  qty: number,
  volume: number,
  name: string,
  delivery_date: string,
  currency: string
}

export default CommodityBil;
