import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: (sessionStorage['redux-store-folders']) ? JSON.parse(sessionStorage['redux-store-folders']).todos : [],
  reducers: {
    createFolder(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        parentId: action.payload.parentId
      })
    }
  }
})

export const { createFolder } = todosSlice.actions
export default todosSlice.reducer