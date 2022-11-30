import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
import skillAction, { initialState } from '../actions/skillAction'
export const skillReducer = createSlice({
    name: 'skills',
    initialState,
    reducers: skillAction
})
export const { setItems, addItem } = skillReducer.actions
export default skillReducer.reducer