import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import CommodityBilModel from '../model/document';
import DocumentArchive from '../store';

type Props = {
  commodity: CommodityBilModel[];
}

const SelectCommodityObserver: FC<Props> = observer((props) => {
  const { commodity } = props;
  const { setSelectCommodity } = DocumentArchive;
  setSelectCommodity(commodity);

  return null;
});

export default SelectCommodityObserver;