import { createSlice } from '@reduxjs/toolkit';

type TSidebarBoolean = {
  isOpen: boolean;
};

const initialState: TSidebarBoolean = {
  isOpen: false,
};

export const sidebarBooleanSlice = createSlice({
  name: 'sidebarBoolean',
  initialState,
  reducers: {
    toggleSidebarBoolean: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebarBoolean } = sidebarBooleanSlice.actions;
