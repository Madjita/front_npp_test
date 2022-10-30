import {UserAction, UserActionTypes, UserState} from "../../types/UserRedux";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USER_FIND_SUCCESS:
            state.users.push(action.payload)
            return {loading: false, error: null, users: state.users}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        case UserActionTypes.FETCH_USERS_FIND_IN_PROJECT_SUCCESS:
            return {loading: false, error: null, users: action.payload}

        case UserActionTypes.FETCH_USER_REMOVE:
            return {loading: true, error: null, users: state.users.filter((item,index) => item.id !== action.id)}
        case UserActionTypes.FETCH_USERS_REMOVE_SUCCESS:
            return {loading: false, error: null, users: state.users}
        default:
            return state
    }
}