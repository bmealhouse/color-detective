import React, { useContext } from "react";
import { RouteComponentProps } from "react-router";
import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addSharp } from "ionicons/icons";
import usePhotos from "../hooks/use-photos";
import { AppContext } from "../state";
import "./main.css";

export default function Main({ history }: RouteComponentProps) {
  const { photos, addPhoto } = usePhotos();
  const { dispatch } = useContext(AppContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonRouterLink
                  onClick={() => {
                    dispatch({ type: "SET_SELECTED_PHOTO", payload: photo });
                    history.push("/color-detective");
                  }}
                >
                  <IonImg src={photo.dataUrl} />
                </IonRouterLink>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab
          className="ion-margin-bottom ion-margin-end"
          vertical="bottom"
          horizontal="end"
          slot="fixed"
        >
          <IonFabButton
            onClick={async () => {
              const photo = await addPhoto();
              dispatch({ type: "SET_SELECTED_PHOTO", payload: photo });
              history.push("/color-detective");
            }}
          >
            <IonIcon icon={addSharp} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
