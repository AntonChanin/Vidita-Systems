import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';

import DocumetArchive from '../store';

const Footer = observer(() => {
  const { summaryVolium, summaryQty } = DocumetArchive;

  return (
    <Box sx={{ flexGrow: 1 }} component="footer">
      <AppBar position="static" component="div">
          <Toolbar component="div">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              «Общий обьем: {summaryVolium}» и «Общее количество: {summaryQty}»
            </Typography>
          </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Footer;
