import {ITool_User} from '../../components/IDataInterface/IDataInterface'

export interface ToolUserState {
    toolUser: ITool_User[];
    loading: boolean;
    error: null | string;
}
export enum ToolUserActionTypes {
    FETCH_ToolUser = 'FETCH_ToolS',
    FETCH_ToolUser_FIND_SUCCESS = 'FETCH_Tool_FIND_SUCCESS',
    FETCH_ToolUser_SUCCESS = 'FETCH_ToolUser_SUCCESS',
    FETCH_ToolUser_ERROR = 'FETCH_ToolUser_FETCH_ToolUser_ERROR',


    FETCH_ToolUser_REMOVE = 'FETCH_ToolUser_REMOVE',
    FETCH_ToolUser_REMOVE_SUCCESS = 'FETCH_ToolUser_REMOVE_SUCCESS',

    FETCH_ToolUser_FIND_IN_PROJECT_SUCCESS = 'FETCH_ToolUser_FIND_IN_PROJECT',
    
}
interface FetchToolUserAction {
    type: ToolUserActionTypes.FETCH_ToolUser;
}
interface FetchToolUserRemoveAction {
    type: ToolUserActionTypes.FETCH_ToolUser_REMOVE;
    id: number;
}

interface FetchToolUserRemoveSuccessAction {
    type: ToolUserActionTypes.FETCH_ToolUser_REMOVE_SUCCESS;
    payload: ITool_User[]
}

interface FetchToolUserSuccessAction {
    type: ToolUserActionTypes.FETCH_ToolUser_SUCCESS;
    payload: ITool_User[]
}
interface FetchToolUserErrorAction {
    type: ToolUserActionTypes.FETCH_ToolUser_ERROR;
    payload: string;
}

interface FetchToolUserFindSuccessAction {
    type: ToolUserActionTypes.FETCH_ToolUser_FIND_SUCCESS;
    payload: ITool_User;
}


interface FetchToolUserFindInProjectSuccessAction {
    type: ToolUserActionTypes.FETCH_ToolUser_FIND_IN_PROJECT_SUCCESS;
    payload: ITool_User[]
}

export type ToolUserAction = FetchToolUserAction |
                         FetchToolUserFindSuccessAction|
                         FetchToolUserErrorAction |
                         FetchToolUserSuccessAction|
                         FetchToolUserRemoveAction |
                         FetchToolUserRemoveSuccessAction | 
                         FetchToolUserFindInProjectSuccessAction