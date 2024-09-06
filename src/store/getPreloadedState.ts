import { initialToDoState } from './ToDo/reducer';
import { PartialRootState } from './configureStore';

const getPreloadedState = (): PartialRootState => {
    const userInfo = localStorage.getItem('user');
    return {
        ToDo: {
            ...initialToDoState,
        },
        LoggedInUser: {
            info: userInfo ? JSON.parse(userInfo) : undefined,
            token: localStorage.getItem('token'),
        },
    };
};

export default getPreloadedState;
