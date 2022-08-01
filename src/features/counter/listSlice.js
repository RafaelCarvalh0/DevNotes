import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    { title: 'Primeira Nota', body: 'Testando 1,2,3...' }
  ]
};

let newList = [...state.list];

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    ADD_NOTE: (state = initialState, action) => {
      alert('Oi')
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
//export const { setMessage } = counterSlice.reducer

export default listSlice.reducer