import { StateSchema, ThunkExtraArg } from "./stateSchema";
import { api, rtkApi } from "@/shared/api";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";


export const createReduxStore = (
  initialState?: StateSchema,
) => {
  const extraArgument: ThunkExtraArg = { api };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: import.meta.env.DEV,
    middleware: getDefaultMiddleware => {
      const extraMiddleware = [
        rtkApi.middleware,
      ]

      return  getDefaultMiddleware({thunk: { extraArgument }}).concat(extraMiddleware)
    },
  })

  setupListeners(store.dispatch);

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type State = ReturnType<ReturnType<typeof createReduxStore>['getState']>;