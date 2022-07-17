import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'

export interface IWorkState {
    title?:string,
    icon?:string,
    items:IWorkItem[],
}
export interface IWorkItem {
    title:string,
    dateTitle:string,
    detail:string,
}
export const initialState: IWorkState= {
    title:"",
    icon:"",
    items:[]
}
const Actions:ValidateSliceCaseReducers<IWorkState, SliceCaseReducers<IWorkState>> ={
    setItems: (state:IWorkState,action: PayloadAction<IWorkItem[]>) => {
        state.items=action.payload.slice(0);
    },
    addItem: (state:IWorkState,action: PayloadAction<IWorkItem>) => {
        state.items.push(action.payload);
    }
}
export default Actions