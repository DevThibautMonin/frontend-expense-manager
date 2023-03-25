import { createSlice } from "@reduxjs/toolkit"

const initialExpenseState = {
  items: [],
  formCategory: undefined,
  filterCategory: undefined
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
      state.items = state.items.filter(item => item.category === state.filterCategory)
    },
    deleteExpense(state, action) {
      const expenseId = action.payload.expenseId
      state.items = state.items.filter((item) => item.id !== expenseId && item.category === state.filterCategory)
    },
    changeFilterCategory(state, action) {
      state.filterCategory = action.payload.filterCategory
      state.items = state.items.filter((item) => item.category === state.filterCategory)
    },
    changeFormCategory(state, action) {
      state.formCategory = action.payload.formCategory
    }
  }
})

export const expenseActions = expenseSlice.actions
export const expenseReducers = expenseSlice.reducer
