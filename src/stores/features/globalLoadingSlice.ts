import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface GlobalLoadingState {
  isLoading: boolean;
  loadingCount: number;
}

const initialState: GlobalLoadingState = {
  isLoading: false,
  loadingCount: 0,
};

export const globalLoadingSlice = createSlice({
  name: "globalLoading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingCount += 1;
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.loadingCount -= 1;
      if (state.loadingCount === 0) {
        state.isLoading = false;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { startLoading, stopLoading, setLoading } =
  globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
