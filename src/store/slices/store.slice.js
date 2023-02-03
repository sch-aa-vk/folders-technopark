import { createSlice } from '@reduxjs/toolkit';

const foldersSlice = createSlice({
  name: 'folders',
  initialState: (sessionStorage['redux-store-folders']) ? JSON.parse(sessionStorage['redux-store-folders']).folders : [{id: 1, name: "rootDir", parentId: null}],
  reducers: {
    createFolder(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        parentId: action.payload.parentId
      })
    },
    deleteFolder(state, action) {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
})

export const { createFolder, deleteFolder } = foldersSlice.actions
export default foldersSlice.reducer