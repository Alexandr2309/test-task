import { StateSchema } from "@/app/providers/StoreProvider";
import { initialState } from "../const";

export const getMarkers = (state: StateSchema) => state.markers?.markers ?? initialState.markers;