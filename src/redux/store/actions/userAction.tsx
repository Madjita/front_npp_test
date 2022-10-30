import {UserAction, UserActionTypes} from "../../types/UserRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString from "../../../settings/settings";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
           // dispatch({type: UserActionTypes.FETCH_USERS})


            const newLocal = '/api/users';
            const response = await axios.get(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })

            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}