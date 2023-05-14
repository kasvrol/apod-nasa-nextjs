import styles from "../../styles/footer.module.css";

function Footer() {
    return (
        <section className={styles.footerContainer}>
            <h3 className={styles.footerParagraph}>
                APOD NASA - Astronomy Picture Of the Day • Projeto criado com
                fins didáticos.
            </h3>
        </section>
    );
}

export default Footer;
