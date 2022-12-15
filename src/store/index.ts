import { action, makeObservable, observable } from 'mobx';
import CommodityBilModel from '../model/document';

class DocumentArchive {
  commodity: CommodityBilModel[] = [];
  selectCommodity: CommodityBilModel[] = [];

  constructor() {
    makeObservable(this, {
      commodity: observable,
      selectCommodity: observable,
      setCommodity: action.bound,
      setSelectCommodity: action.bound,
    })
  }

  setCommodity(newCommodity: CommodityBilModel[]) {
    this.commodity = newCommodity;
  }

  setSelectCommodity(newSelectCommodity: CommodityBilModel[]) {
    this.selectCommodity = newSelectCommodity;
  }
}

export default new DocumentArchive();
