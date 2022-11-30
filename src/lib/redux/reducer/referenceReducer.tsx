import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
import referenceAction, { initialState } from '../actions/referenceAction'
export const referenceReducer = createSlice({
    name: 'references',
    initialState,
    reducers: referenceAction
})
export const { setItems, addItem } = referenceReducer.actions
export default referenceReducer.reducer