import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Dog Contest Form",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className={poppins.className}>
                <div className="flex justify-center leading-relaxed bg-gradient-to-b from-sky-100 to-sky-200 text-slate-800">
                    <div className="container md:p-6 p-4 min-h-screen">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
