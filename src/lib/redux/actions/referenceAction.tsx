import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'
import { IWorkItem } from './workAction';

export interface IReferenceState {
    title?: string,
    icon?: string,
    items: IReferenceItem[],
}
export interface IReferenceItem extends IWorkItem {
    phone?: string
}
export const initialState: IReferenceState = {
    title: "",
    icon: "",
    items: []
}
const Actions: ValidateSliceCaseReducers<IReferenceState, SliceCaseReducers<IReferenceState>> = {
    setItems: (state: IReferenceState, action: PayloadAction<IReferenceItem[]>) => {
        state.items = action.payload.slice(0);
    },
    addItem: (state: IReferenceState, action: PayloadAction<IReferenceItem>) => {
        state.items.push(action.payload);
    }
}
export default Actions