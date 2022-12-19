import { action, makeObservable, observable } from 'mobx';
import CommodityBilModel from '../model/document';
import { GetServiceInstance } from './services/get.service';
import { PostServiceInstance } from './services/post.service';

class DocumentArchive {
  summaryQty = 0;
  summaryVolium = 0;
  commodity: CommodityBilModel[] = [];
  selectCommodity: CommodityBilModel[] = [];

  constructor() {
    makeObservable(this, {
      commodity: observable,
      selectCommodity: observable,
      setCommodity: action.bound,
      setSelectCommodity: action.bound,
      cancelCommodity: action.bound,
      loadCommodity: action.bound,
      loadSummary: action.bound,
    })
  }

  setCommodity(newCommodity: CommodityBilModel[]) {
    this.commodity = newCommodity;
  } 
  
  async cancelCommodity(callback?: () => void) {
    const removeExtraFields = async () => {
      this.commodity.forEach(d => {
        if(d.tableData) {
          d.tableData.checked = false;
        }
      });
    }
    PostServiceInstance
      .postArchive(this.selectCommodity).then(() => {
        removeExtraFields();
        this.loadCommodity();
        callback?.();
      });
  }

  async loadCommodity() {
    const active: CommodityBilModel[] = await GetServiceInstance.getActive();
    const archive: CommodityBilModel[] = await GetServiceInstance.getArchive();
    const archiveId = archive.map(({ id }) => id);
    const currentActive = active.filter(({ id }) => !archiveId.includes(id));
    this.setCommodity([...currentActive, ...archive]);
  }



  async loadSummary() {
    this.summaryVolium = 0;
    this.summaryQty = 0;
    const localCommodity = this.commodity;
    localCommodity && localCommodity.forEach((row) => {
      this.summaryVolium += row.volume;
      this.summaryQty += row.qty;
    });
  }

  setSelectCommodity(newSelectCommodity: CommodityBilModel[]) {
    this.selectCommodity = newSelectCommodity;
  }
}

export default new DocumentArchive();
