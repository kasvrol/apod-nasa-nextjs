"use client";
import Home from "./home/page";
import PreviousProject from "./previous-project/page";
import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";

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
