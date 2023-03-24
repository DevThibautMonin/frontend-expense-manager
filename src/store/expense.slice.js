import { createSlice } from "@reduxjs/toolkit"

const initialExpenseState = {
  items: []
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState: initialExpenseState,
  reducers: {
    getExpenses(state, action) {
      state.items = action.payload.items
    },
    createExpense(state, action) {
      const newExpense = action.payload.expense
      state.items.push(newExpense)
    },
    deleteExpense(state, action) {
      const expenseId = action.payload.expenseId
      state.items = state.items.filter((item) => item.id !== expenseId)
    }
  }
})

export const expenseActions = expenseSlice.actions
export const expenseReducers = expenseSlice.reducer
