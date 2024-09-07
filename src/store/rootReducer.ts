import { combineReducers } from 'redux';
// import Map from './Map/reducer';
import ToDo from './ToDo/reducer';
import LoggedInUser from './LoggedInUser/reducer';
import IsLoading from './IsLoading/reducer';

export default combineReducers({
    ToDo,
    LoggedInUser,
    IsLoading,
});
