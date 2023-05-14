"use client";
import Image from "next/image";
import Home from "./home/page";
import PreviousProject from "./previous-project/page";
import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function Page() {
    const pathname = usePathname();
    const [page, setPage] = useState(<Home />);

    useEffect(() => {
        if (pathname === "/home") {
            setPage(<Home />);
        } else {
            setPage(<PreviousProject />);
        }
    }, [pathname]);

    return <Fragment>{page}</Fragment>;
}
