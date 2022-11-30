import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
import educationAction, { initialState } from '../actions/educationAction'
export const educationReducer = createSlice({
    name: 'educations',
    initialState,
    reducers: educationAction
})
export const { setItems, addItem } = educationReducer.actions
export default educationReducer.reducer