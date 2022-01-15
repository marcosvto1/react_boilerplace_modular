import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import users from '../../../modules/users/redux/reducer';

export function configureStore() {
  return createStore(users,applyMiddleware(thunk));
} 
