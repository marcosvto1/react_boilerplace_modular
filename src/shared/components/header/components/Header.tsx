import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="header">
      <div className="header-content">
        <h3>{props.title}</h3>
        <div className="toolbar_user">
          Sair
      </div>
      </div>
    </div>
  );
}

export default Header;