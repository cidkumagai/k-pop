import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetOfficeSchema } from '../graphql/types';
import type { RootState } from './app/store';

interface KpopState {
  officeData?: GetOfficeSchema[];
}

const initialState: KpopState = {
  officeData: undefined,
};

export const kpopSlice = createSlice({
  name: 'kpops',
  initialState,
  reducers: {
    addOfficeData: (state: KpopState, action: PayloadAction<GetOfficeSchema[]>) => {
      state.officeData = action.payload
    }
  },
  extraReducers: () => {},
});

export const { addOfficeData } = kpopSlice.actions;
export const selectKpop = (state: RootState) => state.kpop;
export default kpopSlice.reducer;