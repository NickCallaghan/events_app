import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <main className={inter.className}>
                <h1>About</h1>
                <p>
                    <Image
                        src="/thirteen.svg"
                        width={300}
                        height={300}
                        alt="alt"
                    />
                    Magna velit exercitation amet occaecat laborum anim qui ea
                    ipsum dolore sint. Do anim veniam dolore do est sunt ullamco
                    est labore ex. Tempor anim consectetur dolor reprehenderit
                    aute. Voluptate veniam dolore nulla do dolore quis.
                    Consequat culpa aliqua aliquip Lorem reprehenderit irure.
                </p>

                <button type="submit">Click Me</button>
            </main>
        </>
    );
}
