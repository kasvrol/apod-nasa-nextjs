"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";

const Header: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [subtitle, setSubtitle] = useState(
        "Sobre o projeto anterior usando JQuery"
    );
    const [route, setRoute] = useState<string>("/previous-project");

    useEffect(() => {
        if (pathname === "/home") {
            setSubtitle("Sobre o projeto anterior usando JQuery");
            setRoute("/previous-project");
        } else {
            setSubtitle("Projeto em Next.js");
            setRoute("/home");
        }
    }, [pathname]);

    console.log("oii");

    return (
        <section className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>
                APOD NASA - Astronomy Picture Of the Day.
            </h1>
            <section className={styles.headerLink}>
                <p
                    className={styles.headerParagraph}
                    onClick={() => router.push(route)}
                >
                    {subtitle}
                </p>
            </section>
        </section>
    );
};

export default Header;
