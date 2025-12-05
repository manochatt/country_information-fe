import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { eventService, type Country } from "@/services/eventService";
import type { RootState } from "../store";

interface EventState {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk("event/fetchEvents", async () => {
  const response = await eventService.listEvent();
  console.log({ response });
  return response.data;
});

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch events";
      });
  },
});

export const selectCountries = (state: RootState) => state.event.countries;
export const selectLoading = (state: RootState) => state.event.loading;
export const selectError = (state: RootState) => state.event.error;

export default eventSlice.reducer;
