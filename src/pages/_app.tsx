import type { AppProps } from 'next/app'
import {ClientApolloProvider} from "@/app/apollo";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ClientApolloProvider>
            <Component {...pageProps} />
        </ClientApolloProvider>
    )
}