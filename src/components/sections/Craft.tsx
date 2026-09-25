import { craft } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { IndexList } from '../ui/IndexList';
import styles from './Craft.module.css';

export function Craft() {
  return (
    <section id="craft" className={`section ${styles.craft}`}>
      <SectionHeader
        label={craft.label}
        titlePrefix={craft.titlePrefix}
        titleAccent={craft.titleAccent}
        titleSuffix={craft.titleSuffix}
        sub={craft.sub}
      />
      <IndexList items={craft.items} />
    </section>
  );
}
