import React from 'react'

import { ToastContainer } from 'react-toastify';

import withUserService from '../../modules/users/hocs/withUserService'
import { UserService } from '../../modules/users/services/userService'

interface LayoutProps {
  userService: UserService
};

const Layout: React.FC<LayoutProps> = (props) => {
 // console.log(props.userService);
  return (
    <div className="app-layout">
     <ToastContainer/>
      {props.children}
    </div>
  )
}

export default withUserService(Layout);