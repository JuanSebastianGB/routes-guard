import { sliceTypes, User, userInitialState } from '@/models';
import {
  getLocalStorage,
  removeItemFromLocalStorage,
  setLocalStorage,
} from '@/utilities';

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: sliceTypes.USER,
  initialState: getLocalStorage(sliceTypes.USER)
    ? getLocalStorage(sliceTypes.USER)
    : userInitialState,
  reducers: {
    createUser: (_, action): User => {
      setLocalStorage<User>(sliceTypes.USER, action.payload);
      return action.payload;
    },
    updateUser: (state, action): User => {
      const updatedUser = { ...state, ...action.payload };
      setLocalStorage(sliceTypes.USER, updatedUser);
      return updatedUser;
    },
    resetUser: (): User => {
      removeItemFromLocalStorage(sliceTypes.USER);
      return userInitialState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
