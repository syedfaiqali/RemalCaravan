import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface Booking {
  id: string
  name: string
  email: string
  caravanId: string
  startDate: string
  endDate: string
  travelers: number
}

interface BookingState {
  selectedCaravan: string | null
  bookings: Booking[]
  loading: boolean
  error: string | null
}

const initialState: BookingState = {
  selectedCaravan: null,
  bookings: [],
  loading: false,
  error: null,
}

// Placeholder API call to demonstrate async integration with Axios.
export const fetchCaravans = createAsyncThunk('booking/fetchCaravans', async () => {
  const response = await axios.get('/api/caravans')
  return response.data
})

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    selectCaravan: (state, action: PayloadAction<string>) => {
      state.selectedCaravan = action.payload
    },
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaravans.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCaravans.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(fetchCaravans.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Failed to load caravans'
      })
  },
})

export const { selectCaravan, addBooking } = bookingSlice.actions
export default bookingSlice.reducer