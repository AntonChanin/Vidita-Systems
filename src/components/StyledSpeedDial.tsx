import styled from '@emotion/styled';
import { SpeedDial } from '@mui/material';

const StyledSpeedDial = styled(SpeedDial)((props) => ({
  position: 'absolute',
  '.MuiButtonBase-root': {
    backgroundColor: 'crimson',
  },
   '.MuiButtonBase-root:hover': {
    backgroundColor: 'red',
  },
  '.MuiSpeedDial-actions .MuiButtonBase-root': {
    backgroundColor: 'white',
  },
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: '16px',
    right: '16px',
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: '26px',
    left: '16px',
  },
}));

export default StyledSpeedDial;
