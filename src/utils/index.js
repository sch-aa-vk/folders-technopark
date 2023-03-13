import store from '../store/store';
import { createFolder } from '../store/slices/store.slice';

export const createFolderHandler = (parentId, value) => {
  store.dispatch(createFolder({
    id: store.getState().folders.length + 1,
    name: value,
    parentId: parentId
  }));
}