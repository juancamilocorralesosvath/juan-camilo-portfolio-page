import { createPortal } from 'react-dom';
import type { IndexItem } from '../../data/content';
import styles from './HoverPreviewPanel.module.css';

interface HoverPreviewPanelProps {
  item: IndexItem | null;
  position: { left: number; top: number };
}

export function HoverPreviewPanel({ item, position }: HoverPreviewPanelProps) {
  return createPortal(
    <div
      className={styles.panel}
      data-visible={item !== null}
      style={{ left: position.left, top: position.top }}
      aria-hidden="true"
    >
      {item && (
        <>
          <div className={styles.frame}>
            <div className={styles.chrome}>
              <span className={styles.chromeDot} />
              <span className={styles.chromeDot} />
              <span className={styles.chromeDot} />
            </div>
            <img className={styles.image} src={item.previewImage} alt="" />
          </div>
          <div className={styles.caption}>
            <span className={styles.captionTitle}>{item.title}</span>
            <span className={styles.captionMeta}>{item.meta}</span>
          </div>
        </>
      )}
    </div>,
    document.body,
  );
}
