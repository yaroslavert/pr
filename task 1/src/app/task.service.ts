import { Injectable } from '@angular/core';
import { Dimension } from './Dimension';

@Injectable()
export class TaskService {

  constructor() { }

  public generateMasiv(DimensionPanels: Dimension | string | number): Array<any> {

    let masiv = [];

    if (typeof DimensionPanels === 'object') {

      for (let i = 0; i < DimensionPanels.N; i++) {
        masiv.push([]);
        for (let j = 0; j < DimensionPanels.M; j++) {
          masiv[i].push(this.random(1, 10));
        }
      }

    } else {

      for (let i = 0; i < Number(DimensionPanels); i++) {
          masiv.push(this.random(1, 10));
      }

    }

    return masiv;
  }
  public getMaxMasiv(mas: Array<any>): Array<any> {
    return Math.max.apply(Math, mas);
  }
  public getMinMasiv(mas: Array<any>): Array<any> {
    return Math.min.apply(Math, mas);
  }
  public random(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
  }
}
