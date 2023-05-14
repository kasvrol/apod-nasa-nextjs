"use client";
import { TitleContainerProps } from "../../utils/interface";
import React, { Fragment } from "react";
import styles from "../../styles/title.module.css";

const Title: React.FC<TitleContainerProps> = ({ imageTitle }) => {
    return (
        <Fragment>
            <h1 className={styles.imageTitle}>{imageTitle}</h1>
        </Fragment>
    );
};

export default Title;
