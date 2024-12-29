import { combineSlices, ReducersMapObject } from "@reduxjs/toolkit";
import { rtkApi } from "@/shared/api";
import { LazyStateSchema, PrimaryStateSchema } from "./stateSchema";

const primaryReducers: ReducersMapObject<PrimaryStateSchema> = {
  [rtkApi.reducerPath]: rtkApi.reducer
}

export const rootReducer = combineSlices(primaryReducers)
  .withLazyLoadedSlices<LazyStateSchema>();