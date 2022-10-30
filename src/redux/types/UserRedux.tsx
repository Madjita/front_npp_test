import {IUser} from '../../components/IDataInterface/IDataInterface'

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USER_FIND_SUCCESS = 'FETCH_USER_FIND_SUCCESS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',


    FETCH_USER_REMOVE = 'FETCH_USER_REMOVE',
    FETCH_USERS_REMOVE_SUCCESS = 'FETCH_USERS_REMOVE_SUCCESS',

    FETCH_USERS_FIND_IN_PROJECT_SUCCESS = 'FETCH_USERS_FIND_IN_PROJECT',
    
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUserRemoveAction {
    type: UserActionTypes.FETCH_USER_REMOVE;
    id: number;
}

interface FetchUserRemoveSuccessAction {
    type: UserActionTypes.FETCH_USERS_REMOVE_SUCCESS;
    payload: IUser[]
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[]
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface FetchUserFindSuccessAction {
    type: UserActionTypes.FETCH_USER_FIND_SUCCESS;
    payload: IUser;
}


interface FetchUsersFindInProjectSuccessAction {
    type: UserActionTypes.FETCH_USERS_FIND_IN_PROJECT_SUCCESS;
    payload: IUser[]
}

export type UserAction = FetchUsersAction |
                         FetchUserFindSuccessAction|
                         FetchUsersErrorAction |
                         FetchUsersSuccessAction|
                         FetchUserRemoveAction |
                         FetchUserRemoveSuccessAction | 
                         FetchUsersFindInProjectSuccessAction