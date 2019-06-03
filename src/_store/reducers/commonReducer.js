import { SET_LOADING } from "../actions/commonActions";

function commonReducer(state = false, action) {
    switch (action.type) {
        case SET_LOADING:
            return state.status;
        default:
            return state;
    }
}

export default commonReducer;