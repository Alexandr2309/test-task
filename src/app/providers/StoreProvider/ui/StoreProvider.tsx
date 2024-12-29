import { FCC } from "@/shared/lib";
import { StateSchema } from "../config/stateSchema";
import { createReduxStore } from "../config";
import { Provider } from "react-redux";

export interface StoreProviderProps {
  initialState?: StateSchema;
}

export const StoreProvider: FCC<StoreProviderProps> = ({children, initialState }) => {
  const store = createReduxStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}