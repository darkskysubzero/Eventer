import Link from 'next/link'
import React from 'react'
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link className={styles.logo} href="/" replace={true}>Eventer</Link>
                <nav className={styles.links}>
                    <Link href="/events">All Events</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
