import { createSlice } from '@reduxjs/toolkit'

//  a slice is a collection of Redux reducer logic and actions bundled together for a single feature of your application.

// a reducer is a function that determines how the state should change when an action occurs.
// state represents the current state of the slice.
// action — describes the requested operation and may carry data.

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {  
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += Number(action.payload)
    },
    reset(state){
        state.value =0
    }
  },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer