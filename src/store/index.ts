import { configureStore } from '@reduxjs/toolkit'
import UserModule from './user'

export default configureStore({
  reducer: {
    user: UserModule.reducer,
  },
})
