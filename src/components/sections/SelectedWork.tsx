import { selectedWork } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { IndexList } from '../ui/IndexList';

export function SelectedWork() {
  return (
    <section id="work" className="section">
      <SectionHeader
        label={selectedWork.label}
        titlePrefix={selectedWork.titlePrefix}
        titleAccent={selectedWork.titleAccent}
        titleSuffix={selectedWork.titleSuffix}
        sub={selectedWork.sub}
      />
      <IndexList items={selectedWork.items} />
    </section>
  );
}
