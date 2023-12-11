export const authReducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_USER':
            return {
                ...state,
                currUser: action.payload

            };
        case 'SET_LOADING':
            return {
                ...state,
                loadingState: action.payload
            };
        case 'LOG_OUT':
            return {
                ...state,
                userID: false,
            };
        default: return state;
    }
};