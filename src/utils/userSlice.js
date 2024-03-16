import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState : null,
  reducers: {
    addUser: (state,action) => {
      return action.payload
    },
    removeUser: (state,action) => {
      return null
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = counterSlice.actions

export default counterSlice.reducer