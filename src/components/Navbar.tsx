// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import data from '@/data/portfolioData.json';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link href="/" className={styles.brand}>
                    {data.site.name}
                </Link>
                <div className={styles.navLinks}>
                    {data.site.navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const linkClass = `${styles.navLink} ${isActive ? styles.active : ''}`;
                        return (
                            <Link key={link.name} href={link.href} className={linkClass}>
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;