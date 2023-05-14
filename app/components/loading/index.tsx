import ReactLoading from "react-loading";
import planet01 from "../../../public/planet01.png";
import Image from "next/image";
import { RingLoader, CircleLoader } from "react-spinners";
import styles from "../../styles/loading.module.css";

export const LoadingForHome = () => {
    return (
        <div className={styles.loading}>
            <RingLoader color="rgba(79, 15, 113, 1)" size={300} />
            <h2>Loading...</h2>
        </div>
    );
};

export const LoadingForPreviousProject = () => {
    return (
        <div className={styles.loading}>
            <CircleLoader color="rgba(79, 15, 113, 1)" size={300} />
            <h2>Loading...</h2>
        </div>
    );
};
