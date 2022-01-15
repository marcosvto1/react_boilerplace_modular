import React from 'react';
import '../styles/SideMenu.css';

interface SideMenuType {
  open: boolean
  toogle: Function
}

export const SideMenu: React.FC<SideMenuType> = (props) => {
  return (
    <div className="side-menu">
      {props.children}
    </div>
  );
}

export default SideMenu;