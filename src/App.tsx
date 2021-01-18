import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppContextProvider } from "./state";
import Main from "./pages/main";
import ColorDetective from "./pages/color-detective";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";

export default function App() {
  return (
    <IonApp>
      <AppContextProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/main" component={Main} />
            <Route exact path="/color-detective" component={ColorDetective} />
            <Route exact path="/" render={() => <Redirect to="/main" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </AppContextProvider>
    </IonApp>
  );
}
