import { hero, images, CV_URL, EMAIL, LINKEDIN_URL, GITHUB_URL } from '../../data/content';
import { Button } from '../ui/Button';
import { EmailIcon, LinkedInIcon, GithubIcon } from '../ui/icons';
import styles from './Hero.module.css';

export function Hero() {
  const [roleBefore, roleAfter] = hero.role.split(' & ');

  return (
    <section id="top" className={`section ${styles.hero}`}>
      <h1 className={styles.name}>
        <span>{hero.nameLine1}</span>
        <span>{hero.nameLine2}</span>
      </h1>

      <p className={styles.role}>
        {roleBefore} <span className="accent">&amp;</span> {roleAfter}
      </p>

      <div className={styles.photoBlock}>
        <div className={styles.photoOutline} aria-hidden="true" />
        <div className={styles.imageWrap}>
          <img src={images.photoHero} alt="Portrait of Juan Camilo Corrales Osvath" />
        </div>
        <div className={styles.credCard}>
          <span className={styles.credEyebrow}>{hero.credential.eyebrow}</span>
          <span className={styles.credText}>{hero.credential.text}</span>
        </div>
      </div>

      <p className={styles.position}>{hero.position}</p>

      <div className={styles.cta}>
        <Button href={CV_URL} download="Juan-Camilo-Corrales-Osvath-CV.pdf" variant="primary">
          Download CV
        </Button>
      </div>

      <div className={styles.ghostRow}>
        <Button href={`mailto:${EMAIL}`} variant="ghost" icon={<EmailIcon />}>
          Email
        </Button>
        <Button href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" variant="ghost" icon={<LinkedInIcon />}>
          LinkedIn
        </Button>
        <Button href={GITHUB_URL} target="_blank" rel="noopener noreferrer" variant="ghost" icon={<GithubIcon />}>
          GitHub
        </Button>
      </div>
    </section>
  );
}
