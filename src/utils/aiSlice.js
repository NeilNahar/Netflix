import { createSlice } from '@reduxjs/toolkit'

 const aiSlice = createSlice({
  name: 'ai',
  initialState:{searchShow:false},
  reducers: {
    toggleSearchShow: (state,action) => {
      state.searchShow = !state.searchShow
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleSearchShow } = aiSlice.actions

export default aiSlice.reducer