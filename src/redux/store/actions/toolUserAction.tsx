import {ToolUserAction, ToolUserActionTypes} from "../../types/ToolUserRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString from "../../../settings/settings";
import { ITool_User } from "../../../components/IDataInterface/IDataInterface";

export const fetchToolUser = () => {
    return async (dispatch: Dispatch<ToolUserAction>) => {
        try {
            dispatch({type: ToolUserActionTypes.FETCH_ToolUser})


            const newLocal = '/api/toolUser';
            const response = await axios.get(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })

            dispatch({type: ToolUserActionTypes.FETCH_ToolUser_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToolUserActionTypes.FETCH_ToolUser_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const fetchToolUser_Put = (newItem: ITool_User) => {
    return async (dispatch: Dispatch<ToolUserAction>) => {
        try {
           // dispatch({type: UserActionTypes.FETCH_USERS})

            const json = JSON.stringify(newItem);

            const newLocal = '/api/toolUser';
            const response = await axios.put(GetConnectionString()+newLocal,json,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    
                                                })

            //dispatch({type: ToolUserActionTypes.FETCH_ToolUser_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToolUserActionTypes.FETCH_ToolUser_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const fetchToolUser_Delete = (deleteItem: ITool_User) => {
    return async (dispatch: Dispatch<ToolUserAction>) => {
        try {
           // dispatch({type: UserActionTypes.FETCH_USERS})

            const json = JSON.stringify(deleteItem);

            const newLocal = '/api/toolUser';
            const response = await axios.delete(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    data: json
                                                })

            //dispatch({type: ToolUserActionTypes.FETCH_ToolUser_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToolUserActionTypes.FETCH_ToolUser_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}