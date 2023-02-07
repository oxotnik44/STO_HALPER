import { Reducer } from "redux"

const SET_TEXT = "SET_TEXT"

interface IServiceInfo {
    logoService: string | null
    nameService: string | null
    expandedService: boolean | null
    locationService: string | null
    begindayService: string | null
    enddayService: string | null
    phoneService: string | null
    webService: string | null
    whatsappService: string | null
}

export const initialMainState: IServiceInfo = {
    logoService: null,
    nameService: "null",
    expandedService: null,
    locationService: null,
    begindayService: null,
    enddayService: null,
    phoneService: null,
    webService: null,
    whatsappService: null,
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
