import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label: string;
  titlePrefix: string;
  titleAccent: string;
  titleSuffix?: string;
  sub?: string;
  size?: 'l' | 'm';
}

export function SectionHeader({
  label,
  titlePrefix,
  titleAccent,
  titleSuffix = '',
  sub,
  size = 'l',
}: SectionHeaderProps) {
  return (
    <div>
      <span className="eyebrow">{label}</span>
      <h2 className={`${styles.title} ${size === 'l' ? styles.titleL : styles.titleM}`}>
        {titlePrefix}
        <span className={styles.accent}>{titleAccent}</span>
        {titleSuffix}
      </h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  );
}
