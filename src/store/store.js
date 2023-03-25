import { configureStore } from "@reduxjs/toolkit"
import { expenseReducers } from "./slices/expense.slice"
import { uiReducers } from "./slices/ui.slice"

const store = configureStore({
  reducer: { expense: expenseReducers, ui: uiReducers }
})

export default store
