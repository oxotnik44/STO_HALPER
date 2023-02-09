import { Reducer } from "redux"

const SET_TEXT = "SET_TEXT"

interface IServiceInfo {
    logoService: string | null
    nameService: string | null
    expandedService: string | null
    locationService: string | null
    begindayService: string | null
    enddayService: string | null
    phoneService: string | null
    webService: string | null
    whatsappService: string | null
}

export const initialMainState: IServiceInfo = {
    logoService: "Logo.png",
    nameService: "Bogatkova",
    expandedService: "true",
    locationService: "Bogatkova",
    begindayService: "8:00",
    enddayService: "20:00",
    phoneService: "89133999060",
    webService: "www.stogtfo.ru",
    whatsappService: "89139999060",
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
