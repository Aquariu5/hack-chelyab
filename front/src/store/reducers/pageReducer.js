const initialState = {
    page: "Главная"
}

export const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PAGE':
            return {...state, page: action.payload}
        default: 
            return state;
    }
}