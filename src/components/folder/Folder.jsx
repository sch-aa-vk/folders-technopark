import React from 'react';
import './folder.css';

export function Folder(folder) {
  return(
    <div className='folder'>
      <p>{folder.name}</p>
    </div>
  )
}