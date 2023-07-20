import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>

                    <title>@riyuzenn — home</title>
<meta name="title" content="@riyuzenn — home" />
<meta name="description" content="average unmotivated dev" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://riyuzenn.tech" />
<meta property="og:title" content="@riyuzenn — home" />
<meta property="og:description" content="average unmotivated dev" />
<meta property="og:image" content="https://n.riyuzenn.tech/preview.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://riyuzenn.tech" />
<meta property="twitter:title" content="@riyuzenn — home" />
<meta property="twitter:description" content="average unmotivated dev" />
<meta property="twitter:image" content="https://n.riyuzenn.tech/preview.png" />

                    
                    <link
                        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
