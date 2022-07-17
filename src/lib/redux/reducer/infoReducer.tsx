import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
import infoAction, { initialState } from '../actions/infoAction'
export const infoReducer = createSlice({
    name: 'infos',
    initialState,
    reducers: infoAction
})
export const { setItems,addItem } = infoReducer.actions
export default infoReducer.reducer