import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
import workAction, { initialState } from '../actions/workAction'
export const workReducer = createSlice({
    name: 'works',
    initialState,
    reducers: workAction
})
export const { setItems, addItem } = workReducer.actions
export default workReducer.reducer