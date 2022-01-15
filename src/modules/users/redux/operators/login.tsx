import { UserService } from "../../services/userService"
import * as actions from '../actionsCreators';

function login(username: string, password: string) {
  return async (dispatch: any, getState?: any) => {
    dispatch(actions.loggingIn());
    const result = await new UserService().login(username, password);
    if (result) {
      dispatch(actions.loggingInSuccess());
    } else {
      dispatch(actions.loggingInFailure('Falha a realizar login'));
    }
  }
}

export {
  login
}