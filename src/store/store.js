import { configureStore } from "@reduxjs/toolkit"
import { expenseReducers } from "./expense.slice"

const store = configureStore({
  reducer: { expense: expenseReducers }
})

export default store
