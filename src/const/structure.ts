import { Column } from 'material-table';

import CommodityBilModel from '../model/document';

export const commodityBilStructure: Column<CommodityBilModel>[] = [
  { field: 'status', title: 'Status', width: 130, type: 'string' },
  { field: 'sum', title: 'Sum', width: 130, type: 'numeric' },
  {
    field: 'qty',
    title: 'Qty',
    width: 90,
    type: 'numeric',
  },
  {
    field: 'volume',
    title: 'Volume',
    width: 160,
    type: 'numeric',
  },
  {
    field: 'name',
    title: 'Name',
    width: 200,
    type: 'string',
  },
  {
    field: 'delivery_date',
    title: 'Delivery date',
    defaultSort: 'asc',
    width: 250,
    type: 'date',
    render: (rowData) =>
    `${new Date(rowData['delivery_date']).toLocaleDateString() ?? '_'}`,
  },
  {
    field: 'currency',
    title: 'Currency',
    width: 160,
    type: 'currency',
    render: (rowData) =>
      `${(rowData.sum * rowData.qty) ?? '_'}`,
  },
];