import {configureStore, createSlice} from '@reduxjs/toolkit';

const defaultTasks = [
    {id: '1', title:'go to the beach', state:'TASK_INBOX'},
    {id: '2', title:'eat lunch with satoshi nakamoto', state:'TASK_INBOX'},
    {id: '3', title:'refill the fish tank', state:'TASK_INBOX'},
    {id: '4', title:'go to bed early', state:'TASK_INBOX'},
];

const TaskBoxData = {
    tasks: defaultTasks,
    status: 'idle',
    error: null,
}

// we can build the redux store

const TasksSlice = createSlice({
    name:'taskbox',
    initialState:TaskBoxData,
    reducers:{
        updateTaskState: (state, action) => {
            const {id, newTaskState} = action.payload;
            const task = state.tasks.findIndex((task)=> task.id === id);
            if(task >= 0) {
                state.tasks[task].state = newTaskState
            }
        },
    },
});

export const {updateTaskState} = TasksSlice.actions;

const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    }
})

export default store; 