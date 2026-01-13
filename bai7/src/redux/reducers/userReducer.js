const initialState = {
    currentUser: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};
