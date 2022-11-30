import { PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'

export const initialState = {
    location: "",
    phone: "",
    email: "",
    profileUrl: "",
    fullName: "",
    tagName: ""
}
export type IInfoState = typeof initialState
const Actions: ValidateSliceCaseReducers<IInfoState, SliceCaseReducers<IInfoState>> = {
    setItems: (state: IInfoState, action: PayloadAction<IInfoState>) => {
        let { email, phone, location, profileUrl, tagName, fullName } = action.payload;
        state.email = email
        state.phone = phone
        state.location = location
        state.profileUrl = profileUrl
        state.tagName = tagName
        state.fullName = fullName
    },
    addItem: (state: IInfoState, action: PayloadAction<IInfoState>) => {
        let { email, phone, location, profileUrl, tagName, fullName } = action.payload;
        state.email = email
        state.phone = phone
        state.location = location
        state.profileUrl = profileUrl
        state.tagName = tagName
        state.fullName = fullName
    }
}
export default Actions