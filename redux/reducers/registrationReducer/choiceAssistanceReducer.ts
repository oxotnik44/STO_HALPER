import { Reducer } from "redux";

const UPDATE_ASSISTANCE_SERVICE = "UPDATE_ASSISTANCE_SERVICE";

interface IAssistanceItem {
  assistanceService: string;
  isSelectedAssistance: boolean;
}

interface IState {
  dataAssistance: IAssistanceItem[];
}

export const initialAssistanceState: IState = {
  dataAssistance: [
    {
      assistanceService: "Шины",
      isSelectedAssistance: false,
    },
    {
      assistanceService: "Двигатель",
      isSelectedAssistance: false,
    },
    {
      assistanceService: "Тормозная система",
      isSelectedAssistance: false,
    },
    {
      assistanceService: "Электроника",
      isSelectedAssistance: false,
    },
  ],
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
          i === index ? { ...item, isSelectedAssistance: isSelected } : item
        ),
      };
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

export default assistanceReducer;
