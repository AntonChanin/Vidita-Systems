import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { observer } from 'mobx-react-lite';

const Footer = observer(() => {
  return (
    <Box sx={{ flexGrow: 1 }} component="footer">
      <AppBar position="static" component="div">
          <Toolbar component="div">
          </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Footer;
