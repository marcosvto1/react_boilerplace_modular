export type UserActionType = 
'LOGGING_IN' |
'LOGGING_IN_SUCCESS' |
'LOGGING_IN_FAILURE';

const LOGGING_IN: UserActionType = 'LOGGING_IN'; 
const LOGGING_IN_SUCCESS: UserActionType = 'LOGGING_IN_SUCCESS'; 
const LOGGING_IN_FAILURE: UserActionType = 'LOGGING_IN_FAILURE'; 

export {
  LOGGING_IN,
  LOGGING_IN_SUCCESS,
  LOGGING_IN_FAILURE
}