import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[]=["adam Taylor","E123","at@abc.net"]
  info2: string[]=["Subba","E124","ss@abc.net"]
  info3: string[]=["reddy","E125","re@abc.net"]

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
