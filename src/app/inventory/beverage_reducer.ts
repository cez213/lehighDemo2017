import {BeverageActionTypes, BeverageState} from './beverage_state';

const DEFAULT_STATE: BeverageState = {
  beverages: []
};

export function beverageReducer(state: BeverageState, action: BeverageActionTypes): BeverageState {
  switch(action.type) {
    case 'ADD_BEVERAGE':
      return;
    case 'CHANGE_ENDPOINT':
      return;
    case 'UPDATE_BEVERAGE':
      return;
    default:
      return DEFAULT_STATE;
  }
}

// 'ADD_BEVERAGE' |'CHANGE_ENDPOINT'|'UPDATE_BEVERAGE';
