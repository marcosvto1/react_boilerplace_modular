import * as actions from './actionsTypes';
import { UsersActions } from './actionsCreators';
import initialUsersState, { UsersState } from './states';

function users (state: UsersState = initialUsersState, action: UsersActions): UsersState {
  switch (action.type as actions.UserActionType) {
    case actions.LOGGING_IN:
      return {
        ...state,
        isFetchingUser: true,
        error: ''
      }
    case actions.LOGGING_IN_FAILURE:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false
      }
    case actions.LOGGING_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetchingUser: false
      }
    default:
      return state;
  }
}

export default users;
