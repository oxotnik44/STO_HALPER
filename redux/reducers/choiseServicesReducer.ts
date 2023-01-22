import { Reducer } from "redux";

const SET_TEXT_CHOISE_SERVICE = "SET_TEXT_CHOISE_SERVICE";
const SET_TOGGLE_toggleExtended = "SET_TOGGLE_toggleExtended"

interface IState {
    textChoiseService: string | null;
    dataService: Array<{ nameService: string | null, distanceToService: string | null, toggleExtended: boolean }> | null;
}

export const initialChoiseState: IState = {
    textChoiseService: null,
    dataService: [
        {
            nameService: "qwe",
            distanceToService: "123",
            toggleExtended: false
        },
        {
            nameService: "qwe",
            distanceToService: "123",
            toggleExtended: false
        },
        {
            nameService: "qwe",
            distanceToService: "123",
            toggleExtended: false
        }, {
            nameService: "qwe",
            distanceToService: "123",
            toggleExtended: false
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
        case SET_TOGGLE_toggleExtended:
            return {
                ...state,
                toggleExtended: true
            }
        default:
            return state;
    }
};


export const setTextChoiseService = (text: string) => ({
    type: SET_TEXT_CHOISE_SERVICE,
    textChoiseService: text,
});
export const setToggleExtended = (text: boolean) => ({
    type: SET_TOGGLE_toggleExtended,
    toggleExtended: text
})

export default choiseServicesReducer;