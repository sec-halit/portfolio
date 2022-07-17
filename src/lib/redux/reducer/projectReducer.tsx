import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
import projectAction, { initialState } from '../actions/projectAction';
export const projectReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: projectAction
})
export const { setItems,addItem } = projectReducer.actions
export default projectReducer.reducer