import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
const JP = Noto_Sans_JP({ weight: "200", subsets: ["latin"] });

export const metadata = {
    icons: {
        icon: "./icon.png",
    },
    title: "APOD NASA",
    description: "Project APOD NASA using Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={JP.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
