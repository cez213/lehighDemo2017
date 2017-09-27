import {ADD_BEVERAGE, CHANGE_ENDPOINT, LIST_BEVERAGES} from './actions';
import {BeverageData} from './api.service';

export interface BeverageState {
  beverages: BeverageData[];
}

// export type ActionTypes = ADD_BEVERAGE|CHANGE_ENDPOINT|LIST_BEVERAGES;

export interface BeverageAction {
  type: string;
  payload?: BeverageData[];
}

const DEFAULT_STATE = {
  beverages: [],
  // endpoint: '' //TODO.
};

// TODO(carolynz): UPDATE.
export function beverages(state = DEFAULT_STATE, action: BeverageAction) {
  switch (action.type) {
    case ADD_BEVERAGE:
      return Object.assign({}, state, action.payload);
    // case UPDATE_BEVERAGE:
    //   // return state.beverages.map(beverage => {
    //   //   if (beverage.name === action.payload.name) {
    //   //     return action.payload;
    //   //   }
    //   //   return beverage;
    //   // });
    case CHANGE_ENDPOINT:
      return Object.assign({}, state, action.payload);
    case LIST_BEVERAGES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
