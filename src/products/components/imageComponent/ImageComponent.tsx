import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import style from "./ImageComponent.module.css";

interface ImageComponentProps {
  src: string;
  hash: string;
}

export const ImageComponent = ({ src, hash }: ImageComponentProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      {imageLoaded && <img className={style.profileImage} src={src} />}
    </>
  );
};
