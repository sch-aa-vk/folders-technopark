import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export const Breadcrumps = ({items}) => {
  return (
    <div className='breadcrumps'>
      {items.map((item) => (
        <Link to={`/${item.parentId || ''}`} key={item.name} className='breadcrumps_link'>/ {item.name}</Link>
      ))}
    </div>
  );
};