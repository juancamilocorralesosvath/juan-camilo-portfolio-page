import styles from './Badge.module.css';

export function Badge({ children, dot }: { children: string; dot?: boolean }) {
  return (
    <span className={styles.badge}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
