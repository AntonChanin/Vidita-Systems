import React, { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';

import CommodityBilTable from '../components/CommodityBilTable';

import DialogWindow from '../components/DialogWindow';

const ShoppingCheckpoint: FC = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(!checked);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grow
      in={checked}
      style={{
        transformOrigin: '0 0 0',
        minHeight: 'calc(100vh - 168px)',
     }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Grid container spacing={2} width={'auto'} maxWidth={1176} margin={2.5}>
        <CommodityBilTable />
        <Button onClick={handleClickOpen}>Сancel</Button>
        <DialogWindow open={open} onClose={handleClose} />
      </Grid>  
    </Grow>  
  );
};

export default ShoppingCheckpoint;
