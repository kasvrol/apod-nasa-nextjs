"use client";
import { Fragment, useEffect, useState } from "react";
import Text from "../components/text";
import Media from "../components/media";
import Date from "../components/date";
import Title from "../components/title";
import { LoadingForHome } from "../components/loading";
import Alert from "../components/alert";
import { ApiNasaGov } from "../middleware";
import styles from "../styles/home.module.css";

function Home() {
    const [data, setData] = useState<any>({});
    const [date, setDate] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [alert, setAlert] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const response: any = await ApiNasaGov(date);
            if (response) {
                const responseJson = await response.json();
                setLoading(false);
                setData(responseJson);
                setAlert(false);
            } else {
                setLoading(false);
                <Alert
                    title={"Erro 404"}
                    text={"A API não está respondendo com a data requisitada"}
                />;
            }
        })();
    }, [date]);

    const inputDay = (entry: any) => {
        setDate(entry);
    };

    const renderPage = (data: any) => {
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
                <Fragment>
                    <section className={styles.apodContainer}>
                        <Title imageTitle={data.title} />
                        <section className={styles.presentation}>
                            <Media
                                image={data.media_type}
                                imageEntry={data.url}
                                title={data.title}
                            />
                            <Text
                                explanation={data.explanation}
                                imageAuthor={data.copyright}
                                imageDate={data.date}
                                site={""}
                            />
                        </section>
                    </section>
                    <section className={data.dateChoice}>
                        <Date inputDay={inputDay} />
                    </section>
                </Fragment>
            );
        }
    };

    return (
        <div className={styles.home}>
            {loading ? <LoadingForHome /> : renderPage(data)}
        </div>
    );
}

export default Home;
