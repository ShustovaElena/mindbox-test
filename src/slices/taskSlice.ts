import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { ITask } from '../types';

interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [
    {
        label: 'Создать приложение',
        isDone: false,
    }
  ],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
})

export const { addTask } = tasksSlice.actions;

export const selectCount = (state: RootState) => state.tasks;

export default tasksSlice.reducer;