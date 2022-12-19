import React, { FC, useLayoutEffect, useState } from 'react';
import MaterialTable from 'material-table';
import ThemeProvider from '@mui/styles/ThemeProvider';

import SelectCommodityObserver from './SelectCommodityObserver';
import CommodityBilModel from '../model/document';
import UserTablePagination from './UserTablePagination';
import commodityBilPreset from '../const/commodityBilPreset';
import { Close } from '../const/icons';
import { defaultMUITheme } from '../const/theme';
import DocumetArchive from '../store';
import { GetServiceInstance } from '../store/services/get.service';

const rows: CommodityBilModel[] = [
  { id: '0', status: 'active', sum: 100, qty: 35, volume: 14, name: 'ham', delivery_date: new Date('10.10.2022').getTime(), currency: '' },
  { id: '1', status: 'active', sum: 10, qty: 42, volume: 16, name: 'bread', delivery_date: new Date('10.11.2022').getTime(), currency: '' },
  { id: '2', status: 'active', sum: 60, qty: 45, volume: 20, name: 'water', delivery_date: new Date('10.10.2022').getTime(), currency: '' },
  { id: '3', status: 'archive', sum: 1000, qty: 16, volume: 120, name: 'pine wood', delivery_date: new Date('11.10.2022').getTime(), currency: '' },
  { id: '4', status: 'archive', sum: 1200, qty: 0, volume: 12, name: 'paper', delivery_date: new Date('10.01.2022').getTime(), currency: '' },
  { id: '5', status: 'archive', sum: 15, qty: 150, volume: 40, name: 'carrot', delivery_date: new Date('12.10.2022').getTime(), currency: '' },
  { id: '6', status: 'archive', sum: 160, qty: 44, volume: 7, name: 'carrot seed', delivery_date: new Date('12.12.2022').getTime(), currency: '' },
  { id: '7', status: 'active', sum: 240, qty: 36, volume: 5, name: 'pine plate', delivery_date: new Date('10.10.2022').getTime(), currency: '' },
  { id: '8', status: 'active', sum: 90, qty: 65, volume: 12, name: 'orange juce', delivery_date: new Date('05.20.2022').getTime(), currency: '' },
];

const CommodityBilTable: FC = () => {
  const [summaryVolium, setSummaryVolium] = useState(0);
  const [summaryQty, setSummaryQty] = useState(0);
  const [selectCommodity, setSelectCommodity] = useState<CommodityBilModel[]>([]);
  const { commodity } = DocumetArchive;

  useLayoutEffect(() => {
    const featchData = async () => {
      const data = await DocumetArchive.loadCommodity();
      DocumetArchive.setCommodity(data);
      const { summaryOfQty, summaryOfVolium } = DocumetArchive.getSummary(DocumetArchive.commodity);
      setSummaryVolium(summaryOfQty);
      setSummaryQty(summaryOfVolium);
    }
    featchData();
  }, []);

  return (
    <ThemeProvider theme={defaultMUITheme}>
      <SelectCommodityObserver commodity={selectCommodity} />
      <MaterialTable
        onSelectionChange={(data) => { setSelectCommodity(data); }}
        data={commodity}
        {...commodityBilPreset}
        actions={[
          {
            tooltip: 'Remove All Selected Users',
            icon: () => <Close />,
            onClick: (evt, data) => alert('You want to delete ' + [data].flat().length + ' rows')
          }
        ]}
        components={{
          Pagination: ({ classes, ...other }) => <UserTablePagination summaryVolium={summaryVolium} summaryQty={summaryQty} {...other} />,
        }}
      />
    </ThemeProvider>
  );
};

export default CommodityBilTable;
