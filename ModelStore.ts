
// MODELS
import BaseModel = require('./BaseModel');

export class ModelStore<TModel extends BaseModel.BaseModel<any>> {

  constructor(public dispatcher:string) {
  }

}

