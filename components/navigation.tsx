import React from 'react';
import Link from 'next/link';

import { PageType } from '../pages';
import styles from './navigation.module.css';

type NavigationProps = {
  active?: PageType;
};

const Navigation: React.FC<NavigationProps> = ({ active }: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a
              className={active === PageType.Index ? `${styles.active}` : null}
              title="Go to Home page"
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts/">
            <a
              className={active === PageType.Posts ? `${styles.active}` : null}
              title="Go to Posts overview page"
            >
              Posts
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cv/">
            <a
              className={active === PageType.Cv ? `${styles.active}` : null}
              title="Go to CV page"
            >
              CV
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
