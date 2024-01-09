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
          <Link
            className={active === PageType.Index ? `${styles.active}` : null}
            href="/"
            title="Go to Home page"
          >
            Home{' '}
          </Link>
        </li>
        {/* <li>
          <Link
            className={active === PageType.Posts ? `${styles.active}` : null}
            href="/posts/"
            title="Go to Posts overview page"
          >
            Posts
          </Link>
        </li> */}
        <li>
          <Link
            className={active === PageType.Cv ? `${styles.active}` : null}
            href="/cv/"
            title="Go to CV page"
          >
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
