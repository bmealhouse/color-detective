import React, { createContext, ReactNode, useReducer } from "react";
import { CameraPhoto } from "@capacitor/core";

interface State {
  selectedPhoto?: CameraPhoto;
}

interface Action {
  type: string;
  payload: any;
}

const AppContext = createContext({
  state: {} as State,
  dispatch: (action: Action) => {},
});

const initialState: State = {};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SELECTED_PHOTO": {
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    }
  }

  return state;
};

interface Props {
  children: ReactNode;
}

function AppContextProvider({ children }: Props) {
  const fullInitialState = {
    ...initialState,
  };

  const [state, dispatch] = useReducer(reducer, fullInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

const AppContextConsumer = AppContext.Consumer;
export { AppContext, AppContextProvider, AppContextConsumer };
