import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes";

function riyu({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <div className="bg-[#000] text-[#a0a0a0]">
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default riyu;
