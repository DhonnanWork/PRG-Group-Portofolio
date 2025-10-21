// src/app/projects/page.tsx
import data from '@/data/portfolioData.json';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';

export default function ProjectsPage() {
  return (
    <main className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {data.projects.title}
        </h1>
        <p className={styles.description}>
          {data.projects.description}
        </p>
      </div>

      <div className={styles.projectGrid}>
        {data.projects.items.map((project) => (
          <Card key={project.title} className={styles.projectCard}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={styles.techContainer}>
                <h4 className={styles.techTitle}>Teknologi:</h4>
                <div className={styles.techList}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Lihat Proyek <ArrowUpRight className={styles.linkIcon} />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}