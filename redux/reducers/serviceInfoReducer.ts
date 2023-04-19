import { Reducer } from "redux";

const SET_DATA_SERVICE = "SET_DATA_SERVICE";

interface IServiceInfo {
  whatsappNumber: string;
  nameService: string;
  startOfWork: string;
  endOfWork: string;
  telephoneNumber: string;
  city: string;
  address: string;
  index: string;
  assistanceServices: Array<string> | null;
  imgCarousel: Array<string> | null;
}

interface IState {
  dataService: IServiceInfo[];
}

export const initialServiceState: IState = {
  dataService: [],
};

const serviceInfoReducer: Reducer<IState> = (
  state = initialServiceState,
  action
) => {
  switch (action.type) {
    case SET_DATA_SERVICE:
      return {
        ...state,
        dataService: [...state.dataService, ...action.dataService],
      };
    default:
      return state;
  }
};

export const setDataService = (data: IServiceInfo[]) => ({
  type: SET_DATA_SERVICE,
  dataService: data,
});

export default serviceInfoReducer;
