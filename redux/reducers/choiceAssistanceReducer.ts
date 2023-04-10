import { Reducer } from "redux";

interface IState {
  dataService: Array<string> | null;
}

export const initialServiceState: IState = {
  dataService: ["Шины", "Двигатель", "Тормозная система", "Электроника"],
};

const serviceReducer: Reducer<IState> = (
  state = initialServiceState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default serviceReducer;
