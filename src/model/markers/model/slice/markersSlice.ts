import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../const";
import { Marker } from "../types";
import { rootReducer } from "@/app/providers/StoreProvider";


export const markersSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {
    addMarker: (state, {payload: marker}: PayloadAction<Marker>) => {
      state.markers.push(marker);
    },
    deleteMarker: (state, {payload: markerId}: PayloadAction<Marker['id']>) => {
      state.markers.filter(marker => marker.id !== markerId);
    },
    dropState: () => initialState,
  }
})

export const { actions: markerAction } = markersSlice
export const { reducer: markerReducer } = markersSlice

markersSlice.injectInto(rootReducer);