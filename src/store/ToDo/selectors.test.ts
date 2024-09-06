/* eslint-disable @typescript-eslint/no-explicit-any */
import reducer from './reducer';
import { selectAllTasks } from './selectors';

describe('test selectAllTasks', () => {
    it('should return all tasks', () => {
        const newTask = {
            id: '12345',
            name: 'my task',
            completed: false,
        };

        const state = reducer(
            {
                tasks: {
                    byId: {
                        [newTask.id]: newTask,
                    },
                    ids: [newTask.id],
                },
            },
            {} as any
        );

        const allTasks = selectAllTasks({
            ToDo: state,
            LoggedInUser: {
                info: {
                    id: '',
                    first_name: '',
                    last_name: '',
                    gender: 'Male',
                    email_address: '',
                    token: '',
                },
                token: '',
            },
        });

        expect(allTasks.length).toBe(1);
        expect(allTasks[0]).toMatchObject(newTask);
    });
});
