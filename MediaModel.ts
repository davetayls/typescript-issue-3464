
import BaseModel = require('./BaseModelx');

export interface IResponse {
  name:string;
  url:string;
}

export class MediaModel extends BaseModel.BaseModel<IResponse> {

  constructor(properties?:IResponse) {
    super(properties);
  }

}

