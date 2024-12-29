import { StateSchema } from "@/app/providers/StoreProvider";
import { initialState } from "../const/initialState";

export const getCurrentCoords = (state: StateSchema) => state.coords?.currentCoords ?? initialState.currentCoords