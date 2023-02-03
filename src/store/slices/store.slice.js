import { createSlice } from '@reduxjs/toolkit';

const foldersSlice = createSlice({
  name: 'folders',
  initialState: (sessionStorage['redux-store-folders']) ? JSON.parse(sessionStorage['redux-store-folders']).folders : [{id: 1, name: "rootDir", parentId: null}],
  reducers: {
    createFolder: (state, action) => {
      state.push(action.payload);
    },
    renameFolder: (state, action) => {
      state.map((item) => 
        item.id === action.payload.id ? item.name = action.payload.name : item
      )
    },
    deleteFolder: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
})

export const { createFolder, deleteFolder, renameFolder } = foldersSlice.actions
export default foldersSlice.reducer