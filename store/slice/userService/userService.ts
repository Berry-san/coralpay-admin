'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types';
import { sessionStorageName } from '@/app/config';

let sessionStorageState;
if (typeof window !== 'undefined') {
  sessionStorageState = sessionStorage.getItem(sessionStorageName);
}

interface UserState {
  user: Partial<User>;
}

const initialState: UserState = sessionStorageState
  ? {
      user: { ...JSON.parse(sessionStorageState) }
    }
  : {
      user: {
        isAuthenticated: false
      }
    };

const userServiceSlice = createSlice({
  name: 'userService',
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...action.payload
      };
      sessionStorage.setItem(sessionStorageName, JSON.stringify(state.user));
    },
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...action.payload
      };
      sessionStorage.setItem(sessionStorageName, JSON.stringify(state.user));
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state?.user) {
        state.user = { ...state.user, ...action.payload };
        sessionStorage.setItem(sessionStorageName, JSON.stringify(state.user));
      }
    },
    logoutUser: (state) => {
      state.user = {
        ...{
          isAuthenticated: false
        }
      };
      sessionStorage.setItem(sessionStorageName, JSON.stringify(state.user));
      sessionStorage.removeItem('cac');
    }
  }
});

export const { setUser, updateUser, logoutUser, setUserToken } = userServiceSlice.actions;

export default userServiceSlice.reducer;
