import { action, makeObservable, observable } from 'mobx';

class DocumentArchive {
  summaryVolium = 0;
  summaryQty = 0;

  constructor() {
    makeObservable(this, {
      summaryVolium: observable,
      summaryQty: observable,
      setSummaryVolium: action.bound,
      setSummaryQty: action.bound,
    })
  }

  setSummaryVolium(newSummaryVolium: number): void {
    this.summaryVolium = newSummaryVolium;
  }

  setSummaryQty(newSummaryQty: number): void {
    this.summaryQty = newSummaryQty;
  }
}

export default new DocumentArchive();
