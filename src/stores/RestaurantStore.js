import BaseStore from './BaseStore';
import { http } from '../utils/http';
import * as _ from 'lodash';

export class RestaurantStore extends BaseStore {
  constructor() {
    super();
    this.observable({
      info: []
    });
  }

  saveMultiInfo(data) {
    let keys = Object.keys(data);
    const info = this.toJS().info;
    _.forEach(keys, k => {
      info[k] = data[k];
    });
    this.info = info;
  }

  async getRestaurant(area) {
    try {
      const url = 'http://localhost:3002/scg/api/search/restaurants/Bangsue';
      let response = await http.get(url);
      if (response && response.body && response.body.data) {
        const { data } = response.body;
        this.info = data;
        return data;
      }else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }
}
export default new RestaurantStore();