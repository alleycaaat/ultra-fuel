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
        
        default: return state;
    }
};