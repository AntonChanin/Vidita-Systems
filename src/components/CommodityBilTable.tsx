import React, { forwardRef, useEffect, useState } from 'react';
import MaterialTable, { Column, Icons, MTablePagination } from 'material-table';
import ArrowIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIcon from '@mui/icons-material/ChevronLeft';
import ArrowForwardIcon from '@mui/icons-material/ChevronRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ClearIcon from '@mui/icons-material/Close';
import FilterIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ThemeProvider from '@mui/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { observer } from 'mobx-react-lite';

import CommodityBilModel from '../model/document';
import DocumetArchive from '../store';
import { Grid } from '@material-ui/core';
import KeyValueRow from './KeyValueRow';

const columns: Column<CommodityBilModel>[] = [
  { field: 'id', title: 'ID', width: 70, type: 'string' },
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

const CommodityBilTable = observer(() => {
  const { summaryVolium, setSummaryVolium, summaryQty, setSummaryQty } = DocumetArchive;
  const defaultMaterialTheme = createTheme();
  const [icons, setIcons] = useState<Icons>({});
  
  useEffect(() => {
    rows.forEach((row) => {
      setSummaryVolium(summaryVolium + row.volume);
      setSummaryQty(summaryQty + row.qty);
    });
    setIcons({
      Filter: forwardRef((props, ref) => <FilterIcon ref={ref} {...props} />),
      Search: forwardRef((props, ref) => <SearchIcon ref={ref} {...props} />),
      Clear: forwardRef((props, ref) => <ClearIcon ref={ref} {...props} />),
      ResetSearch: forwardRef((props, ref) => <ClearIcon ref={ref} {...props} />),
      Delete: forwardRef((props, ref) => <ClearIcon ref={ref} {...props} />),
      SortArrow: forwardRef((props, ref) => <ArrowIcon ref={ref} {...props} />),
      FirstPage: forwardRef((props, ref) => <FirstPageIcon ref={ref} {...props} />),
      PreviousPage: forwardRef((props, ref) => <ArrowBackIcon ref={ref} {...props} />),
      NextPage: forwardRef((props, ref) => <ArrowForwardIcon ref={ref} {...props} />),
      LastPage: forwardRef((props, ref) => <LastPageIcon ref={ref} {...props} />),
    });
  }, []);

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        onSelectionChange={() => {}}
        title={'Commodity Bil'}
        data={rows}
        columns={columns}
        style={{
          fontFamily: 'Roboto',
          maxWidth: '-webkit-fill-available',
        }}
        options={{
          sorting: true,
          filtering: true,
          search: true,
          selection: true,
        }}
        icons={icons}
        actions={[
          {
            tooltip: 'Remove All Selected Users',
            icon: () => <ClearIcon />,
            onClick: (evt, data) => alert('You want to delete ' + [data].flat().length + ' rows')
          }
        ]}
        components={{
          Pagination: (props) => (
            <Grid container spacing={2} component="td" width={'auto'}>
              <MTablePagination {...props} />
                <Grid
                  item xs={4}
                  style={{
                    marginLeft: 'auto',
                    marginRight: '7px',
                  }}
                >
                  <KeyValueRow keyName="Общий обьем:" value={summaryVolium} />
                  <KeyValueRow keyName="Общее количество:" value={summaryQty} />
                </Grid>   
            </Grid>
          )
        }}
      />
    </ThemeProvider>
  );
});

export default CommodityBilTable;
