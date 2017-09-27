import {BeverageData} from '../api.service';

export interface BeverageState {
  beverages: BeverageData[];
}

export interface BeverageActionPayload {
  beverages?: BeverageData[];
}

export type BeverageActionTypes = 'ADD_BEVERAGE' |'CHANGE_ENDPOINT'|'UPDATE_BEVERAGE';

// export enum BeverageStateActionTypes {
//   ADD_BEVERAGE = 'ADD_BEVERAGE',
//   CHANGE_ENDPOINT = 'CHANGE_ENDPOINT',
//   UPDATE_BEVERAGE = 'UPDATE_BEVERAGE',
// }

export interface BeverageAction {
  type: BeverageActionTypes;
  payload?: BeverageActionPayload;
}
