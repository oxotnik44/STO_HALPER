import { Reducer } from "redux"

const SET_TEXT = "SET_TEXT"

interface IServiceInfo {
    logoService: string | null
    nameService: string | null
    expandedService: boolean | null
}

export const initialMainState: IServiceInfo = {
    logoService: null,
    nameService: null,
    expandedService: null,
}


const serviceInfoReducer: Reducer<IServiceInfo> = (
    state = initialMainState,
    action
) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                logoService: action.logoService
            }
        default:
            return state
    }
}

export const setText = (text: string | null) => ({
    type: SET_TEXT,
    text: text
})

export default serviceInfoReducer
