import {ToolAction, ToolActionTypes, ToolState} from "../../types/ToolRedux";

const initialState: ToolState = {
    tools: [],
    loading: false,
    error: null
}

export const toolReducer = (state = initialState, action: ToolAction): ToolState => {
    switch (action.type) {
        case ToolActionTypes.FETCH_ToolS:
            return {loading: true, error: null, tools: []}
        case ToolActionTypes.FETCH_ToolS_SUCCESS:
            return {loading: false, error: null, tools: action.payload}
        case ToolActionTypes.FETCH_Tool_FIND_SUCCESS:
            state.tools.push(action.payload)
            return {loading: false, error: null, tools: state.tools}
        case ToolActionTypes.FETCH_ToolS_ERROR:
            return {loading: false, error: action.payload, tools: []}
        case ToolActionTypes.FETCH_ToolS_FIND_IN_PROJECT_SUCCESS:
            return {loading: false, error: null, tools: action.payload}

        case ToolActionTypes.FETCH_Tool_REMOVE:
            return {loading: true, error: null, tools: state.tools.filter((item,index) => item.id !== action.id)}
        case ToolActionTypes.FETCH_ToolS_REMOVE_SUCCESS:
            return {loading: false, error: null, tools: state.tools}
        default:
            return state
    }
}