import { commodityBilStructure } from './structure';
import icons from './icons';

const commoditybilPreset = {
  title: 'Commodity Bil',
  columns: commodityBilStructure,
  style: {
    fontFamily: 'Roboto',
    maxWidth: '-webkit-fill-available',
  },
  options: {
    sorting: true,
    filtering: true,
    search: true,
    selection: true,
  },
  icons,
};

export default commoditybilPreset;
