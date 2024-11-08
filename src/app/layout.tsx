import { ReactNode } from "react";
import "@/styles/globals.css";
import TopHeader from "@/app/components/TopHeader";
import Header from "@/app/components/Header";
import QueryProvider from "@/app/providers/QueryProvider"; // QueryProvider bileşenini içe aktardık

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/travel.ico" sizes="any"/>
            <title>TravelGo - Explore the World</title>
        </head>
        <body>
        <QueryProvider>
            <TopHeader/>
            <Header/>
            <main>{children}</main>
        </QueryProvider>
        </body>
        </html>
    );
}
