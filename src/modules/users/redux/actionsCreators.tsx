import * as actions from './actionsTypes'; 

export type UsersActions = { [key: string]: actions.UserActionType | any };

function loggingIn(): UsersActions {
  return {
    type: actions.LOGGING_IN
  }
}

function loggingInSuccess(): UsersActions {
  return {
    type: actions.LOGGING_IN_SUCCESS
  }
}

function loggingInFailure(error: string): UsersActions {
  return {
    type: actions.LOGGING_IN_FAILURE
  }
}

export {
  loggingIn,
  loggingInFailure,
  loggingInSuccess
};