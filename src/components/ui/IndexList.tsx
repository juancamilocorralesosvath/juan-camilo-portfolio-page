import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useHoverPreview } from '../../hooks/useHoverPreview';
import type { IndexItem } from '../../data/content';
import { IndexRow } from './IndexRow';
import { HoverPreviewPanel } from './HoverPreviewPanel';
import styles from './IndexList.module.css';

export function IndexList({ items }: { items: IndexItem[] }) {
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const { activeId, position, onRowEnter, onRowMove, onRowLeave } = useHoverPreview();

  const activeItem = items.find((item) => item.id === activeId) ?? null;

  return (
    <div className={styles.list}>
      {items.map((item) =>
        canHover ? (
          <IndexRow
            key={item.id}
            item={item}
            onMouseEnter={(e) => onRowEnter(item.id, e)}
            onMouseMove={onRowMove}
            onMouseLeave={onRowLeave}
          />
        ) : (
          <IndexRow key={item.id} item={item} />
        ),
      )}
      {canHover && <HoverPreviewPanel item={activeItem} position={position} />}
    </div>
  );
}
