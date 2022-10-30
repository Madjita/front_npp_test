import {ToolAction, ToolActionTypes} from "../../types/ToolRedux";
import {Dispatch} from "redux";
import axios from "axios";
import GetConnectionString from "../../../settings/settings";

export const fetchTools = () => {
    return async (dispatch: Dispatch<ToolAction>) => {
        try {

            const newLocal = '/api/tools';
            const response = await axios.get(GetConnectionString()+newLocal,
                                                { headers: {
                                                        'Content-Type': 'application/json',
                                                    }
                                                })

            dispatch({type: ToolActionTypes.FETCH_ToolS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ToolActionTypes.FETCH_ToolS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}