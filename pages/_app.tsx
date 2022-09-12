import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes";

function riyu({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default riyu;
