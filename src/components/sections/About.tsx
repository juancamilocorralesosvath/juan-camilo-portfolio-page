import { about, stackGroups, stackLabel } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { Chip } from '../ui/Chip';
import styles from './About.module.css';

export function About() {
  return (
    <section id="about" className="section">
      <div className={styles.grid}>
        <div>
          <SectionHeader
            label={about.label}
            titlePrefix={about.titlePrefix}
            titleAccent={about.titleAccent}
            titleSuffix={about.titleSuffix}
            size="m"
          />
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={styles.education}>{about.education}</p>
        </div>

        <div>
          <span className="eyebrow">{stackLabel}</span>
          <div className={styles.stackGroups}>
            {stackGroups.map((group) => (
              <div key={group.label} className={styles.stackGroup}>
                <span className={styles.stackLabel}>{group.label}</span>
                <div className={styles.chipRow}>
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
