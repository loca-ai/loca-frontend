import { Map, fromJS} from 'immutable';

/* Immutable */
const USER_DATA = 'USER_DATA';
const LOGGING_IN = 'LOGGING_IN';
const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
const EDITING_ACCOUNT = 'EDITING_ACCOUNT';
const STORE_RESET = 'STORE_RESET';

/* Actions */
export const setUser = (userData) => ({'type': USER_DATA, 'userData': userData})
export const setUserLoggingIn = (status) => ({'type': LOGGING_IN, 'status': status})
export const setUserCreating = (status) => ({'type': CREATING_ACCOUNT, 'status': status})
export const setUserEditing = (status) => ({'type': EDITING_ACCOUNT, 'status': status})
export const setStoreReset = () => ({'type': STORE_RESET});

/* Initial State */
const initialState = Map({
    resetting: false,
    user: Map(),
    loggingIn: false,
    creatingAccount: false,
    editingAccount: false
});

/* Reducer */
const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return state.merge({user: fromJS(action.userData)})
        case LOGGING_IN:
            return state.merge({loggingIn: action.status})
        case CREATING_ACCOUNT:
            return state.merge({creatingAccount: action.status})
        case EDITING_ACCOUNT:
        return state.merge({editingAccount: action.status})
        case STORE_RESET:
            return state.merge(initialState);
        default:
            return state;
    }
};

export default userReducer;
