"use client";

import { TextContainerProps } from "../../utils/interface";
import Link from "next/link";
import styles from "../../styles/text.module.css";
import { useEffect, useLayoutEffect, useState } from "react";

const TextContainer: React.FC<TextContainerProps> = ({
    explanation,
    imageAuthor,
    imageDate,
    imageType,
    site,
}) => {
    const [className, setClassName]=useState<string>("TextContainer")

    useEffect(() => {
        if(imageType!=="image"){
            setClassName("TextWithVideo")
        }
      },[imageType]);

    const renderAuthor = (imageAuthor: string) => {
        if (imageAuthor) {
            return `Autoria: ${imageAuthor}`;
        }
    };

    const renderSite = () => {
        if (site) {
            return (
                <p>
                    Pode-se ver o repositório do antigo projeto em:{" "}
                    <Link href={site}>{site}</Link>
                </p>
            );
        }
    };

    const renderExplanation = (explanation: string) => {
        if (explanation.indexOf("\n") !== -1) {
            const arrayExplanation = explanation.split("\n");
            return arrayExplanation.map((element: any, index: number) => {
                return <p key={index}>{element}</p>;
            });
        } else {
            return <p>{explanation}</p>;
        }
    };

    const renderDate = (date: string) => {
        if (date.indexOf("-") !== -1) {
            const arrayDate = date.split("-");
            const dateToString = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
            return dateToString;
        } else {
            return date;
        }
    };

    return (
        <div className={styles[className]}>
            {renderExplanation(explanation)}
            {renderSite()}
            <h2 className={styles.imageAuthor}>{renderAuthor(imageAuthor)}</h2>
            <p className={styles.imageDate}>Data: {renderDate(imageDate)}</p>
        </div>
    );
};

export default TextContainer;
