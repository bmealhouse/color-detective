import "@capacitor-community/text-to-speech";
import React, { useContext, useRef, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSlides,
  IonSlide,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Plugins } from "@capacitor/core";
import { AppContext } from "../state";
import { hslToText, rgbaToHsl } from "../utils";
import "./color-detective.css";

let currentScale = 1;
const canvas = document.createElement("canvas") as HTMLCanvasElement;

const slideOpts = {
  zoom: {
    maxRatio: 2.5,
  },
  on: {
    zoomChange(scale: number) {
      currentScale = scale;
    },
  },
};

export default function ColorDetective() {
  const {
    state: { selectedPhoto },
  } = useContext(AppContext);

  const [color, setColor] = useState("");
  const headerRef = useRef<HTMLIonHeaderElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  if (!selectedPhoto) {
    return null;
  }

  const handleIonSlideTap = (tapEvent: any) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const img = imgRef.current!;
    const scaledWidth = img.width * currentScale;
    const scaledHeight = img.height * currentScale;

    const header = headerRef.current!;
    const { height: headerHeight } = header.getBoundingClientRect();

    const tapOffsetX = Math.round((screenWidth - scaledWidth) / 2);
    const tapOffsetY = Math.round(
      (screenHeight + headerHeight - scaledHeight) / 2
    );

    let scaleOffsetX = 0;
    let scaleOffsetY = 0;

    const container = containerRef.current!;
    if (container.style.transform.includes("translate3d")) {
      const [tx, ty] = container.style.transform
        .replace("translate3d(", "")
        .replace(/px/g, "")
        .split(", ");

      scaleOffsetX = Number(tx);
      scaleOffsetY = Number(ty);
    }

    const touchX = tapEvent.detail.pageX - tapOffsetX - scaleOffsetX;
    const touchY = tapEvent.detail.pageY - tapOffsetY - scaleOffsetY;

    if (touchX < 0 || touchX > scaledWidth) {
      setColor("");
      return;
    }

    if (touchY < 0 || touchY > scaledHeight) {
      setColor("");
      return;
    }

    canvas.width = scaledWidth;
    canvas.height = scaledHeight;

    const context = canvas.getContext("2d")!;
    context.drawImage(img, 0, 0, scaledWidth, scaledHeight);
    const { data: rgba } = context.getImageData(touchX, touchY, 1, 1);

    const hsl = rgbaToHsl(rgba);
    const colorName = hslToText(hsl);

    Plugins.TextToSpeech.speak({
      text: colorName,
      locale: "en_US",
      speechRate: 0.75, // speechRate - speech rate (1.0 is the normal speech rate, lower values slow down the speech, greater values accelerate it)
      pitchRate: 1, // pitchRate - pitch rate (1.0 is the normal pitch rate, smaller value lowers the tone and greater value increases it)
      volume: 1.0,
      // category: "ambient",
    });

    setColor(colorName);
  };

  return (
    <IonPage>
      <IonHeader ref={headerRef}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Select Color</IonTitle>
          <IonText className="ion-margin-end" color="medium" slot="end">
            {color}
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides options={slideOpts} onIonSlideTap={handleIonSlideTap}>
          <IonSlide>
            <div ref={containerRef} className="swiper-zoom-container">
              <img ref={imgRef} src={selectedPhoto.dataUrl} alt="selected" />
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
}
