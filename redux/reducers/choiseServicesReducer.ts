import { Reducer } from "redux";

const SET_TEXT_CHOISE_SERVICE = "SET_TEXT_CHOISE_SERVICE";

interface IState {
    textChoiseService: string | null;
    dataService: Array<{ nameService: string | null, distanceToService: string | null }> | null;
}

export const initialChoiseState: IState = {
    textChoiseService: null,
    dataService: [
        {
            nameService: "qwe",
            distanceToService: "123",
        },
        {
            nameService: "qwe",
            distanceToService: "123",
        },
        {
            nameService: "qwe",
            distanceToService: "123",
        }, {
            nameService: "qwe",
            distanceToService: "123",
        }
    ]
};

const choiseServicesReducer: Reducer<IState> = (
    state = initialChoiseState,
    action
) => {
    switch (action.type) {
        case SET_TEXT_CHOISE_SERVICE:
            return {
                ...state,
                textChoiseService: action.textChoiseService
            }

        default:
            return state;
    }
};

export const setTextChoiseService = (text: string) => ({
    type: SET_TEXT_CHOISE_SERVICE,
    textChoiseService: text,
});


export default choiseServicesReducer;