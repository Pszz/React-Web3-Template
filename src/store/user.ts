import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'user',
  initialState: {
    name: 'Jack',
  },
  reducers: {
    setName(state, { payload }) {
      state.name = payload.name
    },
  },
})
