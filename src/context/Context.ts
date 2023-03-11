import { createContext } from "react";
import { IItem } from "../interfaces/IItem";


export interface IContext {

   theme: {
    themeName: string;
    toggleTheme: ()=>void;
   },
   users: {
    items: IItem[];
    createNewItem: ()=>void;
    deleteItem: (id: string)=>void;
    toggleIsEditing: (id: string)=>void;
    editItem: (payload: IItem)=>void;
   },
   registration: {
    name: string;
    dob: string;
   }
  }

  export const defaultState: IContext = {
    theme: {
        themeName: 'dark',
        toggleTheme: ()=>{},
       },
    users: {
        items: [],
        createNewItem: ()=>{},
        deleteItem: (id: string)=>{},
        toggleIsEditing: (id: string)=>{},
        editItem: (payload: IItem)=>{},
       },
    registration: {
        name: '',
        dob: '',
       }
  }
  export type defaultStateType = typeof defaultState

export const Context = createContext<IContext>(defaultState)