import { Reducer } from "redux"

const SET_TEXT = "SET_TEXT"

interface IMain {
    text: string | null
}

export const initialMainState: IMain = {
    text: null,
}

const mainReducer: Reducer<IMain> = (
    state = initialMainState,
    action
) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

export const setText = (text: string | null) => ({
    type: SET_TEXT,
    text: text
})

export default mainReducer
