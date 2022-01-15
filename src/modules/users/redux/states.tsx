import { User } from "../models/user";

export interface UsersState {
  user: User | {},
  isAuthenticated: boolean,
  isFetchingUser: boolean,
  isFetchingUserSuccess: boolean,
  isFetchingUserFailure: boolean,
  error: string
};

const initialUsersState: UsersState = {
  user: {},
  isAuthenticated: false,
  isFetchingUser: false,
  isFetchingUserSuccess: false,
  isFetchingUserFailure: false,

  error: ''
}

export default initialUsersState;