import {ALL_TOPICS} from "./actionType"

const initState = {
    allTopic : []
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case ALL_TOPICS:
            return {...state, allTopic : action.payload}
            
        default :
         return state
    }
}

export {reducer}