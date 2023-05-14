"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
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

    return (
        <section className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>
                APOD NASA - Astronomy Picture Of the Day.
            </h1>
            <section className={styles.headerLink}>
                <Link href={route}>{subtitle}</Link>
            </section>
        </section>
    );
};

export default Header;
