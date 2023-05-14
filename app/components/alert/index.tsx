import styles from "../../styles/alert.module.css";
import { AlertProps } from "../../utils/interface";

const Alert: React.FC<AlertProps> = ({ title, text }) => {
    return (
        <section className={styles.Alert}>
            <h3 className={styles.AlertTitle}>{title}</h3>
            <section>
                <p className={styles.AlertText}>{text}</p>
                <p className={styles.AlertContact}>
                    Caso o erro persista, envie um email para
                    santosak1999@gmail.com
                </p>
            </section>
        </section>
    );
};

export default Alert;
