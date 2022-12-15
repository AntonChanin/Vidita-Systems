import React, { forwardRef } from 'react';
import { Icons } from 'material-table';
import ArrowIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIcon from '@mui/icons-material/ChevronLeft';
import ArrowForwardIcon from '@mui/icons-material/ChevronRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import CloseIcon from '@mui/icons-material/Close';
import FilterIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

export const iconsComponents = {
  Filter: FilterIcon,
  Search: SearchIcon,
  Close: CloseIcon,
  Arrow: ArrowIcon,
  FirstPage: FirstPageIcon,
  PreviousPage: ArrowBackIcon,
  NextPage:ArrowForwardIcon,
  LastPage: LastPageIcon,
}

export const { Filter, Search, Close, Arrow, FirstPage, PreviousPage, NextPage, LastPage } = iconsComponents;

const forwardIcons: Icons = {
  Filter: forwardRef((props, ref) => <Filter ref={ref} {...props} />),
  Search: forwardRef((props, ref) => <Search ref={ref} {...props} />),
  Clear: forwardRef((props, ref) => <Close ref={ref} {...props} />),
  ResetSearch: forwardRef((props, ref) => <Close ref={ref} {...props} />),
  Delete: forwardRef((props, ref) => <Close ref={ref} {...props} />),
  SortArrow: forwardRef((props, ref) => <Arrow ref={ref} {...props} />),
  FirstPage: forwardRef((props, ref) => <FirstPage ref={ref} {...props} />),
  PreviousPage: forwardRef((props, ref) => <PreviousPage ref={ref} {...props} />),
  NextPage: forwardRef((props, ref) => <NextPage ref={ref} {...props} />),
  LastPage: forwardRef((props, ref) => <LastPage ref={ref} {...props} />),
};

export default forwardIcons;
