import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import DeleteUserReducer from './reducer-delete-user';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    deletedUser: DeleteUserReducer
});

export default allReducers;