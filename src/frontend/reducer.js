import { configureStore, createSlice } from "@reduxjs/toolkit";
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const toDos = createSlice({
  name: "toDosReducer",
  initialState: {
    todos: [
      { id: 0, text: "오늘 할 일1", completed: true, date: "2021-07-26" },
      { id: 1, text: "오늘 할 일2", completed: false, date: "2021-07-27" },
      { id: 2, text: "오늘 할 일3", completed: false, date: "2021-07-28" },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: nextTodoId(state.todos) });
    },
    remove: (state, action) => {
      return state.filter((toDos) => toDos.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
