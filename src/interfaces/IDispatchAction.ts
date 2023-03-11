import { AppContextActions } from "../actions/AppContextActions";

export interface IDispatchAction {
    type: AppContextActions;
    payload?: any;
}
