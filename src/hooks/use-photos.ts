import { useState } from "react";
import {
  CameraPhoto,
  CameraResultType,
  CameraSource,
  Plugins,
} from "@capacitor/core";

export default function usePhotos() {
  const [photos, setPhotos] = useState<CameraPhoto[]>([]);

  async function addPhoto() {
    const photo = await Plugins.Camera.getPhoto({
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl,
      quality: 90,
    });
    setPhotos((previousPhotos) => [...previousPhotos, photo]);
    return photo;
  }

  return {
    photos,
    addPhoto,
  };
}
