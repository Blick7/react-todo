import { createSlice } from '@reduxjs/toolkit';

const initialTodos = {
  items: [
    { title: 'have a nice day', label: 'fun', done: false },
    { title: 'RAMONRA', label: 'uncategorized', done: false },
    { title: 'FUN', label: 'fun', done: true },
  ],
  labels: ['uncategorized', 'fun'],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodos,
  reducers: {
    addItem(state, action) {
      console.log('add item');
      const item = action.payload;
      state.items.push({
        ...item,
      });
    },
    removeItem(state) {
      console.log('remove item');
    },
    addLabel(state, action) {
      const label = action.payload;
      state.labels.push(label);
    },
    removeLabel(state, action) {
      console.log('remove label');
      const label = action.payload;
      state.labels = state.labels.filter((item) => item !== label);
    },
  },
});

export const todosActions = todoSlice.actions;

export default todoSlice;
