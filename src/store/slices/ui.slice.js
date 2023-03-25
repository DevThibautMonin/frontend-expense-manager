import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
  error: null, isLoading: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    setError(state, action) {
      state.error = {
        title: action.payload.title
      }
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    }
  }
})

export const uiActions = uiSlice.actions
export const uiReducers = uiSlice.reducer
