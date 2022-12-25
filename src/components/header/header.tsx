import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function newFunction() {
    return (
        <header>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
