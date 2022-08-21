import { createSlice } from '@reduxjs/toolkit';

const initialTodos = {
  items: [
    {
      title: 'have a nice day',
      label: 'fun',
      done: false,
      date: '8/21/2022, 2:46:05 PM',
    },
    {
      title: 'RAMONRA',
      label: 'uncategorized',
      done: false,
      date: '8/21/2022, 2:46:05 PM',
    },
    { title: 'FUN', label: 'fun', done: true, date: '8/21/2022, 2:46:05 PM' },
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
    removeItem(state, action) {
      console.log('remove item');
      const title = action.payload;
      state.items = state.items.filter((item) => item.title !== title);
    },
    removeItemWithLabel(state, action) {
      const label = action.payload;
      console.log(state.items[0].label === label);
      // removes all items with specified label
      // state.items = state.items.filter((item) => item.label !== label);

      state.items.map((item) => {
        return item.label === label
          ? (item.label = 'uncategorized')
          : item.label;
      });
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
    toggleTaskStatus(state, action) {
      const title = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      existingItem.done = !existingItem.done;
    },
  },
});

export const todosActions = todoSlice.actions;

export default todoSlice;
