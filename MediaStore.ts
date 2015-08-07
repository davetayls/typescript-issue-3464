

import ModelStore = require('./ModelStore');
import { MediaModel } from './MediaModel';

export class MediaStore extends ModelStore.ModelStore<MediaModel> {

  constructor(dispatcher:string) {
    super(dispatcher);
  }

}



