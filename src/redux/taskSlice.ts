import { createSlice } from "@reduxjs/toolkit";

export interface TasksInterface {
  isGettingTasks: boolean;
  tasks: Array<{}>;
}

const initialState: TasksInterface = {
  isGettingTasks: false,
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    getAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    clearTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addNewTask, getAllTasks, clearTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
