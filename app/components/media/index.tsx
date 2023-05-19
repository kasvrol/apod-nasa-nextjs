"use client";

import styles from "../../styles/media.module.css";
import ReactPlayer from "react-player";
import { Fragment, useEffect, useState } from "react";
import { LoadingForHome } from "../loading";
import { MediaProps } from "../../utils/interface";

const Media: React.FC<MediaProps> = ({ imageType, imageEntry, title }) => {
  const [viewImage, setViewImage] = useState<string>("");
  const [width, setWidth] = useState<string>("30vw");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (imageEntry) {
      setViewImage(imageEntry);
      setLoading(false);
    }
    if (window.innerWidth < 800) {
      setWidth("100vw");
    }else{
        setWidth("30vw");
    }
  }, [imageEntry]);

  const mediaType = (type: string) => {
    if (type === "image") {
      return (
        <img
          src={viewImage}
          className={styles.image}
          alt={`Imagem sobre ${title}`}
        />
      );
    } else {
      return (
        <ReactPlayer
          url={imageEntry}
          alt={`Vídeo sobre ${title}`}
          controls={true}
          className={styles.video}
          width={width}
          height="auto"
        />
      );
    }
  };

  return (
    <Fragment> {loading ? <LoadingForHome /> : mediaType(imageType)}</Fragment>
  );
};

export default Media;
