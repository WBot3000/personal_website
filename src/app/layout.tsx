import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

//const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Mono({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: {
    template: 'WBot3000.com | %s',
    default: 'WBot3000.com',
  },
  description: "Personal website for WBot3000",
};

export default function RootLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navigation/>
                <main className="flex min-h-screen flex-col items-center p-4 overflow-x-hidden">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
