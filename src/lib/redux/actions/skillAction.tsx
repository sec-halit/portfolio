import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'

export interface ISkillState {
    title?:string,
    icon?:string,
    items:ISkillItem[],
}
export enum SkillColumn{
    COLOUMN_1,
    COLOUMN_2,
    COLOUMN_3
}
export interface ISkillItem {
    title:string,
    column:SkillColumn
}
export const initialState: ISkillState= {
    title:"",
    icon:"",
    items:[]
}
const Actions:ValidateSliceCaseReducers<ISkillState, SliceCaseReducers<ISkillState>> ={
    setItems: (state:ISkillState,action: PayloadAction<ISkillItem[]>) => {
        state.items=action.payload.slice(0);
    },
    addItem: (state:ISkillState,action: PayloadAction<ISkillItem>) => {
        state.items.push(action.payload);
    }
}
export default Actions