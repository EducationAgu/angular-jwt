import {Sorting} from "./sorting";
import {Paging} from "./paging";

export class Request {
  sort: Sorting
  paging: Paging
  filter: String
  favOnly: Boolean

  constructor() {
    this.sort = new Sorting();
    this.paging = new Paging();
    this.filter = "";
    this.favOnly = false;
  }
}
