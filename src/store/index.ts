import { action, makeObservable, observable } from 'mobx';
import CommodityBilModel from '../model/document';
import { GetServiceInstance } from './services/get.service';
import { PostServiceInstance } from './services/post.service';

class DocumentArchive {
  commodity: CommodityBilModel[] = [];
  selectCommodity: CommodityBilModel[] = [];

  constructor() {
    makeObservable(this, {
      commodity: observable,
      selectCommodity: observable,
      setCommodity: action.bound,
      setSelectCommodity: action.bound,
      loadCommodity: action.bound,
      cancelCommodity: action.bound,
      getSummary: action.bound,
    })
  }

  setCommodity(newCommodity: CommodityBilModel[]) {
    this.commodity = newCommodity;
  }

  async loadCommodity() {
    const active: CommodityBilModel[] = await GetServiceInstance.getActive();
    const archive: CommodityBilModel[] = await GetServiceInstance.getArchive();
    const archiveId = archive.map(({ id }) => id);
    const currentActive = active.filter(({ id }) => !archiveId.includes(id));
    this.setCommodity([...currentActive, ...archive]);
    return this.commodity;
  }

  async cancelCommodity(callback?: () => void) {
    const featchData = async () => {
      this.commodity.forEach(d => {
        if(d.tableData) {
          d.tableData.checked = false;
        }
      });
    }
    PostServiceInstance
      .postArchive(this.selectCommodity).then(() => {
        featchData();
        this.loadCommodity();
        callback?.();
      });
  }

  getSummary(commodity: CommodityBilModel[]) {
    const localCommodity = commodity;
    let summaryOfVolium = 0;
    let summaryOfQty = 0;
    localCommodity && localCommodity.forEach((row) => {
      summaryOfVolium += row.volume;
      summaryOfQty += row.qty;
    });
    return { summaryOfVolium, summaryOfQty }
  }

  setSelectCommodity(newSelectCommodity: CommodityBilModel[]) {
    this.selectCommodity = newSelectCommodity;
  }
}

export default new DocumentArchive();
