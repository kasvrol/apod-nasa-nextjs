"use client";

import { useEffect, useState } from "react";
import Alert from "../components/alert";
import Text from "../components/text";
import Title from "../components/title";
import Media from "../components/media";
import previousProject from "./previous-project.json";
import { LoadingForPreviousProject } from "../components/loading";

import styles from "../styles/previous-project.module.css";

function PreviousProject() {
    const [data, setData] = useState<any>(previousProject);
    const [alert, setAlert] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const response = previousProject;
        if (response) {
            setLoading(false);
            setData(response);
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
            return (
                <section className={styles.About}>
                    <Title imageTitle={data.title} />
                    <section className={styles.presentation}>
                        <Media
                            image={"image"}
                            imageEntry={data.url}
                            title={data.title}
                        />
                        <Text
                            explanation={data.explanation}
                            imageAuthor={data.copyright}
                            imageDate={data.date}
                            site={data.site}
                        />
                    </section>
                </section>
            );
        }
    };

    return (
        <div className={styles.PreviousProject}>
            {loading ? <LoadingForPreviousProject /> : renderPage()}
        </div>
    );
}

export default PreviousProject;
