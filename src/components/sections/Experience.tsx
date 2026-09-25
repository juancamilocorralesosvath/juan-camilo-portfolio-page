import { experience, experienceHeader } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className={styles.grid}>
        <SectionHeader
          label={experienceHeader.label}
          titlePrefix={experienceHeader.titlePrefix}
          titleAccent={experienceHeader.titleAccent}
          titleSuffix={experienceHeader.titleSuffix}
        />

        <div className={styles.timeline}>
          {experience.map((entry) => (
            <div key={entry.role} className={`${styles.entry} ${entry.current ? styles.current : ''}`}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.date}>{entry.date}</span>
              <h3 className={styles.role}>{entry.role}</h3>
              <span className={styles.company}>{entry.company}</span>
              <ul className={styles.bullets}>
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
