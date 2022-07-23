import React from 'react';
import Link from 'next/link';

import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} inverted`}>
      <div>
        <div>
          <h3>Just another &lt;footer /&gt;</h3>
          <p>
            This is a personal website, so you won&apos;t find any imprint page
            here.
          </p>
          <p>No cookies. 🍪</p>
          <p>
            {' '}
            I use GDPR-friendly{' '}
            <a
              href="https://www.goatcounter.com/"
              title="GoatCounter is a great and easy web analytics tool without tracking of identifiable personal data, have a look!"
            >
              GoatCounter
            </a>{' '}
            to see how many people stop by{' '}
            <a
              href="https://manuelpuchta.goatcounter.com/"
              title="Have a look at the GoatCounter dashboard for this site"
            >
              here
            </a>
            .
          </p>
          <p>
            Hosted on{' '}
            <a
              href="https://uberspace.de"
              title="Uberspace hosting is awesome!"
            >
              Uberspace
            </a>
            .
          </p>
          <br />
          <p>
            Back to{' '}
            <Link href="/">
              <a title="Go to Home page">Home</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;