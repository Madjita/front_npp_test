
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/redusers/rootReducer";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector