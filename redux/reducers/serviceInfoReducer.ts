import { Reducer } from "redux";

const SET_DATA_SERVICE = "SET_DATA_SERVICE";
const SET_NUMBER_SERVICE = "SET_NUMBER_SERVICE";
interface IServiceInfo {
  whatsappNumber: string;
  webAddress: string;
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
  numberService: number;
}

export const initialServiceState: IState = {
  dataService: [],
  numberService: 0,
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
    case SET_NUMBER_SERVICE:
      return {
        ...state,
        numberService: action.numberService,
      };
    
    default:
      return state;
  }
};

export const setDataService = (data: IServiceInfo[]) => ({
  type: SET_DATA_SERVICE,
  dataService: data,
});

export const setNumberService = (numberService: number) => ({
  type: SET_NUMBER_SERVICE,
  numberService: numberService,
});


export default serviceInfoReducer;
