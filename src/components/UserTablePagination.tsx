import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { MTablePagination } from 'material-table';

import KeyValueRow from './KeyValueRow';

type Props = JSX.IntrinsicAttributes & {
  summaryVolium: number;
  summaryQty: number;
}

const UserTablePagination: FC<Props> = ({ summaryVolium, summaryQty, ...rest }) => (
  <Grid container spacing={2} component="td" width={'auto'}>
    <MTablePagination {...rest} />
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
);

export default UserTablePagination;
