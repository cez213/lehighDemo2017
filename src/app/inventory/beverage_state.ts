import {BeverageData} from '../api.service';

export interface BeverageStateActionPayload {
  beverages?: BeverageData[];
}

export type BeverageStateActionTypes = 'ADD_BEVERAGE' |'CHANGE_ENDPOINT'|'UPDATE_BEVERAGE';

// export enum BeverageStateActionTypes {
//   ADD_BEVERAGE = 'ADD_BEVERAGE',
//   CHANGE_ENDPOINT = 'CHANGE_ENDPOINT',
//   UPDATE_BEVERAGE = 'UPDATE_BEVERAGE',
// }

export interface BeverageStateAction {
  type: BeverageStateActionTypes;
  payload?: BeverageStateActionPayload;
}
