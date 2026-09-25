import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface BaseProps {
  variant?: 'primary' | 'ghost';
  fullWidth?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type Props =
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function Button({ variant = 'ghost', fullWidth, icon, children, className, ...rest }: Props) {
  const classes = [styles.btn, styles[variant], fullWidth ? styles.fullWidth : '', className]
    .filter(Boolean)
    .join(' ');

  if (rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
