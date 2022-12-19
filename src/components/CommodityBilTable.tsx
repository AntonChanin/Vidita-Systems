import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { observer } from 'mobx-react-lite';
import ThemeProvider from '@mui/styles/ThemeProvider';

import CommodityBilModel from '../model/document';
import DocumetArchive from '../store';
import UserTablePagination from './UserTablePagination';
import commodityBilPreset from '../const/commodityBilPreset';
import { defaultMUITheme } from '../const/theme';


const CommodityBilTable: FC = () => {
  const {
    commodity,
    summaryQty,
    summaryVolium,
    setSelectCommodity,
    loadCommodity,
    loadSummary,
  } = DocumetArchive;

  useLayoutEffect(() => {
    const featchData = async () => {
      await loadCommodity();
      await loadSummary();
    }
    featchData();
  }, []);

  const handleSelectionChange = useCallback((data: CommodityBilModel[]) => setSelectCommodity(data), []);

  return (
    <ThemeProvider theme={defaultMUITheme}>
      <MaterialTable
        onSelectionChange={handleSelectionChange}
        data={commodity}
        {...commodityBilPreset}
        components={{
          Pagination: ({ classes, ...other }) => <UserTablePagination summaryVolium={summaryVolium} summaryQty={summaryQty} {...other} />,
        }}
      />
    </ThemeProvider>
  );
};

export default observer(CommodityBilTable);
