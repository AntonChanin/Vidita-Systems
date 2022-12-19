import { FC, MouseEventHandler, useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { observer } from 'mobx-react-lite';

import DocumetArchive from '../store';
import { TransitionProps } from '@mui/material/transitions';

type Props = {
  open?: boolean;
  onClose?(): void;
  Transition?: React.JSXElementConstructor<TransitionProps & {
    children: React.ReactElement<any, any>;
  }>
};

const DialogWindow: FC<Props>  = observer((props) => {
  const { open = false, onClose: closeCallback, Transition } = props;
  const { selectCommodity, cancelCommodity } = DocumetArchive;

  const handleClose: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    closeCallback?.();
  }

  const handleCancel = useCallback(async () => {
    cancelCommodity(closeCallback)
  }, [selectCommodity]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Сancel selected commodity
          </Typography>
          <Button autoFocus color="inherit" onClick={handleCancel}>
            Сancel
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        {selectCommodity.map(({ name, delivery_date }) => {
          return (
            <ListItem button>
              <ListItemText primary={name} secondary={new Date(delivery_date).toLocaleDateString()} />
            </ListItem>
          );
        })}     
        <Divider />
      </List>
    </Dialog>
  );
});

export default DialogWindow;
