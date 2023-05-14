"use client";

import { TextContainerProps } from "../../utils/interface";
import styles from "../../styles/text.module.css";

const TextContainer: React.FC<TextContainerProps> = ({
    explanation,
    imageAuthor,
    imageDate,
    site,
}) => {
    const renderAuthor = (imageAuthor: string) => {
        if (imageAuthor) {
            return `Author: ${imageAuthor}`;
        }
    };

    const renderSite = () => {
        if (site) {
            return (
                <p>
                    Pode-se ver o repositório do antigo projeto em:{" "}
                    <a href={site}>{site}</a>
                </p>
            );
        }
    };

    return (
        <div className="TextContainer">
            <p className="explanation">{explanation}</p>
            {renderSite()}
            <h2 className="imageAuthor">{renderAuthor(imageAuthor)}</h2>
            <p className="imageDate">Date: {imageDate}</p>
        </div>
    );
};

export default TextContainer;
