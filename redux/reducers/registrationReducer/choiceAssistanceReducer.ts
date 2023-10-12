import { Reducer } from "redux";

const UPDATE_ASSISTANCE_SERVICE = "UPDATE_ASSISTANCE_SERVICE";
const UPDATE_ASSISTANCE_USER = "UPDATE_ASSISTANCE_USER";
const GET_ASSISTANCE = "GET_ASSISTANCE";
const RESET_ASSISTANCE = "RESET_ASSISTANCE";
interface IAssistanceItem {
  assistanceService: string;
  urlAssistance: string;
  isSelectedAssistanceService: boolean;
  isSelectedAssistanceUser: boolean;
}

interface IState {
  dataAssistance: IAssistanceItem[];
}

export const initialAssistanceState: IState = {
  dataAssistance: [],
};

const assistanceReducer: Reducer<IState> = (
  state = initialAssistanceState,
  action
) => {
  switch (action.type) {
    case UPDATE_ASSISTANCE_SERVICE:
      const { index, isSelected } = action.payload;
      return {
        ...state,
        dataAssistance: state.dataAssistance.map((item, i) =>
          i === index
            ? { ...item, isSelectedAssistanceService: isSelected }
            : item
        ),
      };
    case UPDATE_ASSISTANCE_USER:
      const { index: userIndex, isSelected: userSelected } = action.payload;
      return {
        ...state,
        dataAssistance: state.dataAssistance.map((item, i) =>
          i === userIndex
            ? { ...item, isSelectedAssistanceUser: userSelected }
            : item
        ),
      };
    case GET_ASSISTANCE:
      return {
        ...state,
        dataAssistance: [...state.dataAssistance, ...action.assistanceData],
      };
    case RESET_ASSISTANCE:
      return { ...state, dataAssistance: [] };
    default:
      return state;
  }
};

export const updateAssistanceService = (index: number, isSelected: boolean) => {
  return {
    type: UPDATE_ASSISTANCE_SERVICE,
    payload: { index, isSelected },
  };
};

export const getAssistance = (
  assistanceData: { assistanceService: string; urlAssistance: string }[]
) => {
  return {
    type: GET_ASSISTANCE,
    assistanceData: assistanceData,
  };
};
export const updateAssistanceUser = (index, isSelected) => {
  return {
    type: "UPDATE_ASSISTANCE_USER",
    payload: {
      index: index,
      isSelected: isSelected,
    },
  };
};
export const resetAssistance = () => {
  return {
    type: RESET_ASSISTANCE,
  };
};

export default assistanceReducer;
