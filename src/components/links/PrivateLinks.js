import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom';
import { isPathAllowed } from '../../utils/Common';

const PrivateLinks = (props) => {

  const path = useResolvedPath(props.to);
  const isAllowed = isPathAllowed(path.pathname);
  return <NavLink {...props}/>
}

export default PrivateLinks;