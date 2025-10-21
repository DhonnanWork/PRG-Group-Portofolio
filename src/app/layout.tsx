// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Portfolio Kelompok 5",
    description: "Portfolio hasil kerja Kelompok 5",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <Navbar />
                <main style={{ flexGrow: 1 }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}