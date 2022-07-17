import { configureStore } from '@reduxjs/toolkit'
import  workReducer from '../reducer/workReducer'
import  skillReducer from '../reducer/skillReducer'
import  educationReducer from '../reducer/educationReducer'
import  projectReducer from '../reducer/projectReducer'
import  referenceReducer from '../reducer/referenceReducer'
import  infoReducer from '../reducer/infoReducer'
export const store = configureStore({
    reducer: {
        infos: infoReducer,
        works: workReducer,
        skills:skillReducer,
        educations:educationReducer,
        projects:projectReducer,
        references:referenceReducer,
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch