"use client";

import { useEffect, useState } from "react";
import Alert from "../components/alert";
import { LoadingForPreviousProject } from "../components/loading";

import styles from "../styles/previous-project.module.css";

function PreviousProject() {
    const [data, setData] = useState<any>(1);
    const [alert, setAlert] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (data === "") {
            setLoading(false);
            setAlert(false);
        } else {
            setLoading(false);
        }
    }, []);

    const renderPage = () => {
        if (alert) {
            return (
                <Alert
                    title={"Erro 404"}
                    text={
                        "A API não está respondendo com os dados sobre o projeto anterior"
                    }
                />
            );
        } else {
            return <p>oi</p>;
        }
    };

    return (
        <div className={styles.PreviousProject}>
            {loading ? <LoadingForPreviousProject /> : renderPage()}
        </div>
    );
}

export default PreviousProject;
