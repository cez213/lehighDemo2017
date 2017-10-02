import {ADD_BEVERAGE, LIST_BEVERAGES} from './actions';
import {BeverageData} from './api.service';

export interface BeverageState {
  beverages: BeverageData[];
}

export interface BeverageAction {
  type: string;
  payload?: BeverageData[];
}

const DEFAULT_STATE = {
  beverages: [],
};

// TODO(carolynz): UPDATE.
export function beverages(state = DEFAULT_STATE, action: BeverageAction) {
  switch (action.type) {
    case ADD_BEVERAGE:
      return updateOrAdd({...state}, action);
    case LIST_BEVERAGES:
      return {...state, beverages: action.payload};
    default:
      return state;
  }
}

function updateOrAdd(state: BeverageState, action: BeverageAction) {
  const beverage = action.payload[0];
  const beverageIndex = state.beverages.findIndex(({name}) => {
    return name === beverage.name;
  });

  const index = beverageIndex >= 0 ? beverageIndex : state.beverages.length;
  state.beverages[index] = beverage;
  return state;
}
