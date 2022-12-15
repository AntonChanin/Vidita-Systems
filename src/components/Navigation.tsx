import React, { FC, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import StyledSpeedDial from './StyledSpeedDial';
import StyledLink from './StyledLink';

const Navigation: FC = () => {
  const [direction, setDirection] = useState<SpeedDialProps['direction']>('right');
const [hidden, setHidden] = React.useState(false);

  const actions = [
    { icon: <StyledLink href="/"  className="link"><ShoppingBasket /></StyledLink>, name: 'Shopping checkpoint' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar component="nav">
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map(
            (action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            )
          )}
        </StyledSpeedDial>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Commodity Bil
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default Navigation;