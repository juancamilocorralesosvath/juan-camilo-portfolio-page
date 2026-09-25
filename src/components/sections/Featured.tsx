import { featured, images } from '../../data/content';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import styles from './Featured.module.css';

function BrowserFrame({ className, src, alt }: { className: string; src: string; alt: string }) {
  return (
    <div className={`${styles.frame} ${className}`}>
      <div className={styles.frameChrome}>
        <span className={styles.frameDot} />
        <span className={styles.frameDot} />
        <span className={styles.frameDot} />
      </div>
      <img src={src} alt={alt} />
    </div>
  );
}

export function Featured() {
  return (
    <section id="featured" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.decor} aria-hidden="true">
          <span className={`${styles.ring} ${styles.ring1}`} />
          <span className={`${styles.ring} ${styles.ring2}`} />
          <span className={`${styles.ring} ${styles.ring3}`} />
          <span className={styles.glow} />
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <div className={styles.badgeRow}>
              <span className="eyebrow">{featured.label}</span>
              <Badge>{featured.badge}</Badge>
            </div>

            <h3 className={styles.title}>{featured.title}</h3>
            <p className={styles.lead}>{featured.lead}</p>

            <dl className={styles.definitions}>
              {featured.definitions.map((def) => (
                <div className={styles.defRow} key={def.term}>
                  <dt className={styles.defTerm}>{def.term}</dt>
                  <dd className={styles.defDetail}>{def.detail}</dd>
                </div>
              ))}
              <div className={styles.defRow}>
                <dt className={styles.defTerm}>{featured.stackLabel}</dt>
                <dd className={styles.chipRow}>
                  {featured.stack.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </dd>
              </div>
            </dl>

            <Button href={featured.ctaHref} target="_blank" rel="noopener noreferrer" variant="primary">
              {featured.ctaLabel}
            </Button>
          </div>

          <div className={styles.shots}>
            <div className={styles.desktopShots}>
              <BrowserFrame className={styles.frameLanding} src={images.pastoralLandingDesktop} alt="PastoralApp landing page" />
              <BrowserFrame className={styles.frameDashboard} src={images.pastoralDashboardDesktop} alt="PastoralApp dashboard" />
            </div>
            <div className={styles.mobileShots}>
              <div className={`${styles.phoneFrame} ${styles.phoneHome}`}>
                <img src={images.pastoralMobileHome} alt="PastoralApp mobile home screen" />
              </div>
              <div className={`${styles.phoneFrame} ${styles.phoneCourse}`}>
                <img src={images.pastoralMobileCourse} alt="PastoralApp mobile course screen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
