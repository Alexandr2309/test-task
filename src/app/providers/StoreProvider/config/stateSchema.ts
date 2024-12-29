import { AsyncThunkErrorPayload, rtkApi } from "@/shared/api";
import { AxiosInstance } from "axios";
import { MarkersSchema } from "@/model/markers";
import { CoordsSchema } from "@/model/coords/model";

export interface PrimaryStateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface LazyStateSchema {
  markers: MarkersSchema;
  coords: CoordsSchema
}

export type StateSchema = PrimaryStateSchema & Partial<LazyStateSchema>;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<Reject> {
  rejectValue: Reject;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type DefaultThunkConfig = ThunkConfig<AsyncThunkErrorPayload | undefined>;
