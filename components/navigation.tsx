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
          >
            Home{' '}
          </Link>
        </li>
        {/* <li>
          <Link
            className={active === PageType.Posts ? `${styles.active}` : null}
            href="/posts/"
          >
            Posts
          </Link>
        </li> */}
        <li>
          <Link
            className={active === PageType.Cv ? `${styles.active}` : null}
            href="/cv/"
          >
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
