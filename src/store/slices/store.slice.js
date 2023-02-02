import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: (sessionStorage['redux-store-folders']) ? JSON.parse(sessionStorage['redux-store-folders']).todos : [{id: 1, name: "rootDir", parentId: 0}],
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