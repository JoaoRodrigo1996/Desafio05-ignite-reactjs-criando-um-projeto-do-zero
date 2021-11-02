import Link from 'next/link';

import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
          <img src="/images/Logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
