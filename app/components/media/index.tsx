"use client";

import styles from "../../styles/media.module.css";
import ReactPlayer from "react-player";
import { MediaProps } from "../../utils/interface";

const Media: React.FC<MediaProps> = ({ image, imageEntry, title }) => {
    const mediaType = (image: string) => {
        if (image === "image") {
            return (
                <img
                    src={imageEntry}
                    className={styles.image}
                    alt={`Imagem sobre ${title}`}
                />
            );
        } else {
            return (
                <ReactPlayer url={imageEntry} alt={`Vídeo sobre ${title}`} />
            );
        }
    };

    return <>{mediaType(image)}</>;
};

export default Media;
