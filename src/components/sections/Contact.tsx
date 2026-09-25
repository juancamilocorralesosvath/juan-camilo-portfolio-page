import { contact, CV_URL, EMAIL, LINKEDIN_URL, GITHUB_URL } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { LinkedInIcon, GithubIcon, ArrowUpRightIcon, ArrowUpIcon } from '../ui/icons';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.top}>
        <div>
          <SectionHeader
            label={contact.label}
            titlePrefix={contact.titlePrefix}
            titleAccent={contact.titleAccent}
          />

          <a className={styles.emailLink} href={`mailto:${EMAIL}`}>
            {EMAIL}
            <ArrowUpRightIcon />
          </a>

          <div className={styles.ctaRow}>
            <Button href={CV_URL} download="Juan-Camilo-Corrales-Osvath-CV.pdf" variant="primary">
              Download CV
            </Button>
            <div className={styles.ghostPair}>
              <Button href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" variant="ghost" icon={<LinkedInIcon />}>
                LinkedIn
              </Button>
              <Button href={GITHUB_URL} target="_blank" rel="noopener noreferrer" variant="ghost" icon={<GithubIcon />}>
                GitHub
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.availability}>
          <span className="eyebrow">{contact.availability.label}</span>
          <p className={styles.location}>{contact.availability.location}</p>
          <p className={styles.note}>{contact.availability.note}</p>
        </div>
      </div>

      <div className={styles.footerBar}>
        <span>{contact.footer}</span>
        <a className={styles.backToTop} href="#top">
          Back to top
          <ArrowUpIcon />
        </a>
      </div>
    </section>
  );
}
