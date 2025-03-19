import {
    configureStore, 
    createSlice,
    createAsyncThunk} from '@reduxjs/toolkit';

// the initial state of our store when the app loads
const TaskBoxData = {
    tasks: [],
    status: 'idle',
    error: null,
}

export const fetchTasks = createAsyncThunk('todos/fetchTodos', async ()=> {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    const data = await response.json();
    const result = data.map((task)=> ({
        id: `${task.id}`,
        title: task.title,
        state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX'
    }));
    return result;
});

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
    extraReducers(builder) {
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.tasks = [];
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.tasks = action.payload;
        })
        .addCase(fetchTasks.rejected, (state) => {
            state.status = 'failed';
            state.error = 'something went wrong';
            state.tasks = [];
        });
    }
});

export const {updateTaskState} = TasksSlice.actions;

const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    }
})

export default store; 