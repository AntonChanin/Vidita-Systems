import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { MTablePagination } from 'material-table';

import KeyValueRow from './KeyValueRow';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = JSX.IntrinsicAttributes & {
  summaryVolium: number;
  summaryQty: number;
}

const UserTablePagination: FC<Props> = ({ summaryVolium, summaryQty, ...rest }) => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Grid container spacing={2} component="td" width={'auto'} display={'flex'} flexDirection={'column'} marginLeft={0} marginTop={0}>
      <MTablePagination {...rest} />
        <Grid
          item xs={4}
          paddingRight={matches ? 0 : 2}
          marginLeft={matches ? 'auto' : 0}
          marginRight={matches ? '7px' : 0}
          margin={matches ? undefined : 'auto'}
          maxWidth={matches ? 'inherit' : '100%'}
          minWidth={matches ? 250 : 0}
          width={matches ? '100%' : '-webkit-fill-available'}
        >
          <KeyValueRow keyName="Общий обьем:" value={summaryVolium} />
          <KeyValueRow keyName="Общее количество:" value={summaryQty} />
        </Grid>   
    </Grid>
  );
};

export default UserTablePagination;
