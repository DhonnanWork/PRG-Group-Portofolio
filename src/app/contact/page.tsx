// src/app/contact/page.tsx
import data from '@/data/portfolioData.json';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {data.contact.title}
        </h1>
        <p className={styles.description}>
          {data.contact.description}
        </p>
      </div>

      <div className={styles.contactGrid}>
        <Card>
          <CardHeader className={styles.contactCardHeader}>
            <Mail className={styles.contactIcon} />
            <div className={styles.contactInfo}>
              <CardTitle>Email</CardTitle>
              <p>{data.contact.email}</p>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className={styles.contactCardHeader}>
            <Phone className={styles.contactIcon} />
            <div className={styles.contactInfo}>
              <CardTitle>Telepon</CardTitle>
              <p>{data.contact.phone}</p>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}