// src/components/Footer.tsx
import data from '@/data/portfolioData.json';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <p>&copy; {new Date().getFullYear()} {data.site.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;