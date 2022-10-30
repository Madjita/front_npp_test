import {ToolUserAction, ToolUserActionTypes, ToolUserState} from "../../types/ToolUserRedux";

const initialState: ToolUserState = {
    toolUser: [],
    loading: false,
    error: null
}

export const toolUserReducer = (state = initialState, action: ToolUserAction): ToolUserState => {
    switch (action.type) {
        case ToolUserActionTypes.FETCH_ToolUser:
            return {loading: true, error: null, toolUser: []}
        case ToolUserActionTypes.FETCH_ToolUser_SUCCESS:
            return {loading: false, error: null, toolUser: action.payload}
        case ToolUserActionTypes.FETCH_ToolUser_FIND_SUCCESS:
            state.toolUser.push(action.payload)
            return {loading: false, error: null, toolUser: state.toolUser}
        case ToolUserActionTypes.FETCH_ToolUser_ERROR:
            return {loading: false, error: action.payload, toolUser: []}
        case ToolUserActionTypes.FETCH_ToolUser_FIND_IN_PROJECT_SUCCESS:
            return {loading: false, error: null, toolUser: action.payload}

        case ToolUserActionTypes.FETCH_ToolUser_REMOVE:
            return {loading: true, error: null, toolUser: state.toolUser.filter((item,index) => item.id !== action.id)}
        case ToolUserActionTypes.FETCH_ToolUser_REMOVE_SUCCESS:
            return {loading: false, error: null, toolUser: state.toolUser}
        default:
            return state
    }
}