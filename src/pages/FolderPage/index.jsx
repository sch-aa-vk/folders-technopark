import './style.scss';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ContextMenuMain } from '../../layouts/ContextMenu/ContextMenuMain';
import { PageContent } from '../../layouts/PageContent';

export const FolderPage = () => {

  const { folderId } = useParams() || 0;
  const parent = +folderId;

  const [showContextmenu, setShowContextmenu] = useState(false);
  const [isFolder, setIsFolder] = useState(null);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  function handleContextMenu(e) {
    e.preventDefault();
    setPageX(e.pageX > 1350 ? 1350 : e.pageX);
    setPageY(e.pageY > 700 ? 700 : e.pageY);
    if (e.target.className === 'folder' || e.target.className === 'folder-item') {
      const folder = e.target.dataset.folder;
      setIsFolder(folder)
    } else setIsFolder(null);

    if (!showContextmenu) {
      setShowContextmenu(true);
    } else {
      setShowContextmenu(false);
    }
  }

  function handleContextMenuClick() {
    setShowContextmenu(false);
  }

  return (
    <div className='body' onContextMenu={(e) => handleContextMenu(e)} onClick={(e) => handleContextMenuClick(e)}>
      <PageContent parent={parent}/>
      {showContextmenu ? <ContextMenuMain pageX={pageX} pageY={pageY} isFolder={isFolder} /> : <></>}
    </div>
  )
}