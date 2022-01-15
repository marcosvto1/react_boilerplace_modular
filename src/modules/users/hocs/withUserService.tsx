import React from 'react';
import { UserService } from '../services/userService';

function withUserService (WrapperComponent: any) {
  const HOC: React.FC = (props) => (
    <WrapperComponent 
      {...props}
      userService={UserService}
    />
  );
  return HOC
}

export default withUserService;