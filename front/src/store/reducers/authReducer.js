const init = false

export const authReducer = (state = init, action) => {
    switch (action.type) {
        case "SET_AUTH":
            state = {...state, auth: action.payload};
            return state;
        default:
            return state;
    }
}