import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';

type Props = {
  keyName: string;
  value: string | number;
}

const KeyValueRow: FC<Props> = ({ keyName, value }) => (
  <Grid item container xs={12} display={'flex'} justifyContent={'space-between'}>
    <Grid item xs={6} display={'inherit'} alignItems={'center'}>
      <Typography variant="h6">{keyName}</Typography>
    </Grid>
    <Grid item xs={6} display={'inherit'} justifyContent={'flex-end'} alignItems={'center'}>
      <span>{value}</span>
    </Grid>
  </Grid>
);

export default KeyValueRow;
