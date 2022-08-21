import { createSlice } from '@reduxjs/toolkit';

const initialTodos = {
  items: [],
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
  },
});

export const todosActions = todoSlice.actions;

export default todoSlice;
