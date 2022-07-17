import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'
import { IWorkItem } from './workAction';

export interface IEducationState {
    title?:string,
    icon?:string,
    items:IEducationItem[],
}
export interface IEducationItem extends IWorkItem {
}
export const initialState: IEducationState= {
    title:"",
    icon:"",
    items:[]
}
const Actions:ValidateSliceCaseReducers<IEducationState, SliceCaseReducers<IEducationState>> ={
    setItems: (state:IEducationState,action: PayloadAction<IEducationItem[]>) => {
        state.items=action.payload.slice(0);
    },
    addItem: (state:IEducationState,action: PayloadAction<IEducationItem>) => {
        state.items.push(action.payload);
    }
}
export default Actions