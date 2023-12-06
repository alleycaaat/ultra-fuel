export const authReducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_USER': {
            return {
                ...state,
                currUser: action.payload
            };
        }
        default: return state;
    }
};