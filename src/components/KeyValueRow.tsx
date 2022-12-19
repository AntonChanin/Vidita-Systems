import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
  keyName: string;
  value: string | number;
}

const KeyValueRow: FC<Props> = ({ keyName, value }) => {
  const matches = useMediaQuery('(min-width:376px)');

  return (
    <Grid item container xs={12} display={'flex'} justifyContent={'space-between'}>
      <Grid item xs={matches ? 10 : 8} display={'inherit'} alignItems={'center'}>
        <Typography variant="h6" fontSize={matches ? 'inherit' : 12}>{keyName}</Typography>
      </Grid>
      <Grid item xs={matches ? 2 : 4} display={'inherit'} justifyContent={'flex-end'} alignItems={'center'}>
        <span style={ { fontSize: matches ? 'inherit' : 12 }}>{value}</span>
      </Grid>
    </Grid>
  );
};

export default KeyValueRow;
