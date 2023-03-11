import { ReactNode, useCallback, useReducer } from "react";
import { Context, defaultState } from "./Context";
import { AppContextActions } from "../actions/AppContextActions";
import { IItem } from "../interfaces/IItem";
import { Reducer } from "./Reducer";

interface IProps {
    children: ReactNode;
}

export const Provider = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(Reducer, defaultState)

    const toggleTheme = useCallback(() =>
        dispatch({ type: AppContextActions.ToggleTheme }), [dispatch]);

    const createNewItem = useCallback(() =>{
        dispatch({ type: AppContextActions.CreateNewItem })}, [dispatch]);

    const deleteItem = useCallback((id: string) =>
        dispatch({ type: AppContextActions.DeleteItem, payload: { id } }), [dispatch]);

    const toggleIsEditing = useCallback((id: string) =>
        dispatch({ type: AppContextActions.ToggleIsEditing, payload: { id } }), [dispatch]);

    const editItem = useCallback((payload: IItem) =>
        dispatch({ type: AppContextActions.EditItem, payload }), [dispatch]);

    return (
        <Context.Provider
            value={{
                theme: {
                 themeName: state.theme.themeName,
                 toggleTheme,
               },
               users: {
                items: state.users.items,
                createNewItem,
                deleteItem,
                toggleIsEditing,
                editItem,
               },
               registration: {
                name: '',
                dob: '',
               }}}>
            {children}
        </Context.Provider>
    )
}
