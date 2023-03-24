import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
  error: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    setError(state, action) {
      state.error = {
        title: action.payload.title
      }
    }
  }
})

export const uiActions = uiSlice.actions
export const uiReducers = uiSlice.reducer
