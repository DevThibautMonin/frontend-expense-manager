import { configureStore } from "@reduxjs/toolkit"
import { expenseReducers } from "./expense.slice"
import { uiReducers } from "./ui.slice"

const store = configureStore({
  reducer: { expense: expenseReducers, ui: uiReducers }
})

export default store
