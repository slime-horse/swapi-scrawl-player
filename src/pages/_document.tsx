import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=News+Cycle:wght@700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body className="inter">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}