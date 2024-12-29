import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../const/initialState";
import { Coords } from "@/model/coords/model/types/coords";
import { rootReducer } from "@/app/providers/StoreProvider";

export const coordsSlice = createSlice({
  name: 'coords',
  initialState,
  reducers: {
    changeCoords: (state, {payload: coords}: PayloadAction<Coords>) => {
      state.currentCoords = coords;
    }
  }
})

export const { actions: coordsActions } = coordsSlice
export const { reducer: coordsReducer } = coordsSlice

coordsSlice.injectInto(rootReducer);