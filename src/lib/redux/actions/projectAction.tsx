import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'
import { ISkillItem } from './skillAction';

export interface IProjectState {
    title?:string,
    icon?:string,
    items:IProjectItem[],
}
export enum SkillColumn{
    COLOUMN_1,
    COLOUMN_2,
    COLOUMN_3
}
export interface IProjectItem extends ISkillItem {
}
export const initialState: IProjectState= {
    title:"",
    icon:"",
    items:[]
}
const Actions:ValidateSliceCaseReducers<IProjectState, SliceCaseReducers<IProjectState>> ={
    setItems: (state:IProjectState,action: PayloadAction<IProjectItem[]>) => {
        state.items=action.payload.slice(0);
    },
    addItem: (state:IProjectState,action: PayloadAction<IProjectItem>) => {
        state.items.push(action.payload);
    }
}
export default Actions