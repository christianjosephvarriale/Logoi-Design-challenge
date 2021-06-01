import { APP_ACTIONS } from '../actions/types'

const initalState = {
    mobile: true,
    searchString: '', // if there was search functionality we may be able to use this
    room: {} // may want to store information on the room
}


const AppReducer = (state = initalState, action) => {
    switch (action.type) {
        case APP_ACTIONS.MOBILE_OFF:
            return {
                ...state,
                mobile: false
            }
        case APP_ACTIONS.MOBILE_ON:
            return {
                ...state,
                mobile: true
            }
        default:
            return {
                ...state
            }
    }
}

export default AppReducer;