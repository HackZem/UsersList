import { AppContextActions } from '../actions/AppContextActions';
import { IDispatchAction } from '../interfaces/IDispatchAction';
import { defaultStateType, IContext, defaultState } from './Context';
import { IItem } from '../interfaces/IItem';
import { v4 as uuidv4 } from 'uuid';


export const Reducer = (state: IContext = defaultState, action: IDispatchAction): defaultStateType => {

    let tmpState = {...state};

    switch (action.type) {

        case AppContextActions.ToggleTheme:
            tmpState.theme.themeName = state.theme.themeName === 'light' ? 'dark' : 'light';
            break;

        case AppContextActions.CreateNewItem:
            const newItem: IItem = {
                id: uuidv4(),
                isEditing: true
            }
            tmpState.users.items = [newItem, ...state.users.items];
            break;

        case AppContextActions.DeleteItem:
            tmpState.users.items = state.users.items.filter(({ id }) => id !== action.payload.id)
            break;

        case AppContextActions.ToggleIsEditing:
            tmpState.users.items = state.users.items.map(
                (item) => item.id === action.payload.id
                    ? { ...item, isEditing: !item.isEditing }
                    : item
            )
            break;

        case AppContextActions.EditItem:
            tmpState.users.items = state.users.items.map(
                (item) => item.id === action.payload.id
                    ? { ...item, ...action.payload, isEditing: false }
                    : item
            )
            break;

        default:
            throw new Error();
    }

    return tmpState;
}