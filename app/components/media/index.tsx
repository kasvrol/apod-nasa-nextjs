"use client";

import styles from "../../styles/media.module.css";
import ReactPlayer from "react-player";
import { LoadingForHome } from "../loading";
import { MediaProps } from "../../utils/interface";

const Media: React.FC<MediaProps> = ({ image, imageEntry, title }) => {
    const [viewImage, setViewImage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        if(imageEntry){
        setViewImage(imageEntry)
        setLoading(false);
    }
    }, [imageEntry]);
    
    const mediaType = (image: string) => {
        if (image === "image") {
            return (
                <img
                    src={viewImage}
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

    return <> {loading ? <LoadingForHome /> : mediaType(image)}</>;
};

export default Media;
