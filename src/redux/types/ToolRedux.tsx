import {ITool} from '../../components/IDataInterface/IDataInterface'

export interface ToolState {
    tools: ITool[];
    loading: boolean;
    error: null | string;
}
export enum ToolActionTypes {
    FETCH_ToolS = 'FETCH_ToolS',
    FETCH_Tool_FIND_SUCCESS = 'FETCH_Tool_FIND_SUCCESS',
    FETCH_ToolS_SUCCESS = 'FETCH_ToolS_SUCCESS',
    FETCH_ToolS_ERROR = 'FETCH_ToolS_FETCH_ToolS_ERROR',


    FETCH_Tool_REMOVE = 'FETCH_Tool_REMOVE',
    FETCH_ToolS_REMOVE_SUCCESS = 'FETCH_ToolS_REMOVE_SUCCESS',

    FETCH_ToolS_FIND_IN_PROJECT_SUCCESS = 'FETCH_ToolS_FIND_IN_PROJECT',
    
}
interface FetchToolsAction {
    type: ToolActionTypes.FETCH_ToolS;
}
interface FetchToolRemoveAction {
    type: ToolActionTypes.FETCH_Tool_REMOVE;
    id: number;
}

interface FetchToolRemoveSuccessAction {
    type: ToolActionTypes.FETCH_ToolS_REMOVE_SUCCESS;
    payload: ITool[]
}

interface FetchToolsSuccessAction {
    type: ToolActionTypes.FETCH_ToolS_SUCCESS;
    payload: ITool[]
}
interface FetchToolsErrorAction {
    type: ToolActionTypes.FETCH_ToolS_ERROR;
    payload: string;
}

interface FetchToolFindSuccessAction {
    type: ToolActionTypes.FETCH_Tool_FIND_SUCCESS;
    payload: ITool;
}


interface FetchToolsFindInProjectSuccessAction {
    type: ToolActionTypes.FETCH_ToolS_FIND_IN_PROJECT_SUCCESS;
    payload: ITool[]
}

export type ToolAction = FetchToolsAction |
                         FetchToolFindSuccessAction|
                         FetchToolsErrorAction |
                         FetchToolsSuccessAction|
                         FetchToolRemoveAction |
                         FetchToolRemoveSuccessAction | 
                         FetchToolsFindInProjectSuccessAction