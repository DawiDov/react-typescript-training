import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import mainReducer from './mainReducer'

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// For then using it wherever you'd call Dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
