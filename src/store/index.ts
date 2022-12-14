import { makeObservable } from 'mobx';

class DocumentArchive {

  constructor() {
    makeObservable(this, {})
  }
}

export default new DocumentArchive();
