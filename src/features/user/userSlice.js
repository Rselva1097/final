import { createSlice } from '@reduxjs/toolkit';

const initialState={
  user:'selva',
  theme:'dark'
}
 
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{

  }
});

console.log('user slice obj is : ',userSlice,'user slice reducer is : ',userSlice.reducer);


console.log('user slice actions is : ',userSlice.actions);

export default userSlice.reducer;
