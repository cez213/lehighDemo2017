import {ADD_BEVERAGE, LIST_BEVERAGES, DELETE_BEVERAGE} from './actions';
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

export function beverages(state = DEFAULT_STATE, action: BeverageAction) {
  switch (action.type) {
    case ADD_BEVERAGE:
      return updateOrAdd({...state}, action);
    case LIST_BEVERAGES:
      return {...state, beverages: action.payload};
    case DELETE_BEVERAGE:
      return deleteBeverage({...state}, action);
    default:
      return state;
  }
}

function updateOrAdd(
    state: BeverageState, action: BeverageAction): BeverageState {
  const index = getIndex(state, action);
  state.beverages[index] = action.payload[0];
  return state;
}

function deleteBeverage(
    state: BeverageState, action: BeverageAction): BeverageState {
  const index = getIndex(state, action);
  state.beverages = [].concat(
      state.beverages.slice(0, index), state.beverages.slice(index + 1));
  return state;
}

function getIndex(state: BeverageState, action: BeverageAction): number {
  const beverageIndex = state.beverages.findIndex(({name}) => {
    return name === action.payload[0].name;
  });

  return beverageIndex >= 0 ? beverageIndex : state.beverages.length;
}
