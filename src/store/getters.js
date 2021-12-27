import state from "./state"

export const HOSPITAL__INIT = () =>{
    return state.searchResult.map((item) =>{
        return item.hosp_name
    })
}

export const rc__init = () => {
    for(let i=0; i<state.rcData.length; i++) {
        state.rcData[i].rate = [state.rcData[i].rate, (100 - state.rcData[i].rate)]
    }
    return state.rcData
}