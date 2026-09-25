import type { MouseEvent } from 'react';
import type { IndexItem } from '../../data/content';
import styles from './IndexRow.module.css';

interface IndexRowProps {
  item: IndexItem;
  onMouseEnter?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onMouseMove?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function IndexRow({ item, onMouseEnter, onMouseMove, onMouseLeave }: IndexRowProps) {
  return (
    <a
      className={styles.row}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className={styles.number}>{item.number}</span>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.meta}>{item.meta}</span>
      <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
