import React from 'react';

import { PageType } from '.';
import Layout from '../components/layout';
import styles from './cv.module.css';

const CV: React.FC = () => {
  const email = (
    <a href="mailto:hallo@manuelpuchta.de" title="Say hi!">
      hallo[at]manuelpuchta.de
    </a>
  );

  return (
    <Layout
      metaData={{
        identifier: PageType.Cv,
        title: 'CV',
      }}
    >
      <div className={styles.cv}>
        <header>
          <h1>Manuel Puchta</h1>
          <aside>
            <p>Hamburg, Germany</p>
            <p>Mail: {email}</p>
            <p>
              Web:{' '}
              <a href="https://manuelpuchta.de" title="My website">
                https://manuelpuchta.de
              </a>
            </p>
          </aside>
        </header>

        <section>
          <p>
            <strong>I&apos;m a Web Engineer.</strong> What I love to do:
            Building easy-to-use interfaces that put a smile on the face of
            people using them. Ensuring that everything scales well by designing
            and implementing the underlying architecture. Shipping frequently to
            live. Making a product better. Working in a team.
          </p>
        </section>

        <section className={styles.work}>
          <h2>Work</h2>
          <ul>
            <li>
              <h3>
                Senior Frontend Developer @{' '}
                <a href="https://www.tk.de" title="Die Techniker">
                  Die Techniker
                </a>
              </h3>
              <p>
                <strong>(Now)</strong> Since Sep 2023 - Hamburg (Germany)
              </p>
            </li>

            <li>
              <h3>
                Senior Software Developer (Frontend) @{' '}
                <a
                  href="https://dkbcodefactory.com"
                  title="DKB Code Factory website"
                >
                  DKB Code Factory
                </a>
              </h3>
              <p>
                <strong>(~0.5 years)</strong> Feb 2023 - Jul 2023, remote from
                Hamburg (Germany)
              </p>
              <p>
                Team: Business customers (Geschäftskund*innen), trustee platform
                (Verwalterplattform)
              </p>
              <p>
                Web Engineering :: I was co-responsible for the development of a
                new web platform (Full stack with Frontend focus) in a
                cross-functional team.
              </p>
              <ul>
                🧰{' '}
                <cite>
                  TypeScript, Nuxt 3, Tailwind, Vitest, Node.js, Headless CMS,
                  GitLab CI/CD
                </cite>
              </ul>
            </li>

            <li>
              <h3>Sabbatical 🌴</h3>
              <p>
                Lots of time on the bike, recharging batteries, finding a new
                interesting job.
              </p>
            </li>

            <li>
              <h3>
                Senior Web Developer @{' '}
                <a href="https://www.tomorrow.one" title="Tomorrow website">
                  Tomorrow
                </a>
              </h3>
              <p>
                <strong>(~2 years)</strong> Apr 2020 - Jun 2022, Hamburg
                (Germany)
              </p>
              <p>Teams: Customer Relationship and Growth</p>
              <p>
                Web Engineering :: I planned and established a future proof web
                tech stack from scratch.
              </p>
              <ul>
                <li>
                  <strong>
                    Relaunching{' '}
                    <a
                      href="https://www.tomorrow.one"
                      title="Tomorrow marketing website"
                    >
                      tomorrow.one
                    </a>
                  </strong>{' '}
                  marketing website, self-service pages and{' '}
                  <a
                    href="https://get.tomorrow.one/en-EU/start/"
                    title="Tomorrow web sign up"
                  >
                    sign up
                  </a>
                  .{' '}
                </li>
                <li>
                  To achieve scalability and maintainability I{' '}
                  <strong>introduced a design system</strong> which powers
                  almost all Tomorrow websites today (published as a private npm
                  package to a self hosted Nexus repository).
                </li>
                <li>
                  Created dockerized web frontend{' '}
                  <strong>deployments to Kubernetes</strong>.
                </li>
                🧰{' '}
                <cite>
                  TypeScript, React, Redux, styled-components, Next.js,
                  Storybook, npm, Jest, Testing Library, Node.js, Headless CMS,
                  Kubernetes, docker, GitLab CI
                </cite>
              </ul>
            </li>

            <li>
              <h3>
                Senior Web Developer @{' '}
                <a href="https://demodern.com" title="Demodern website">
                  Demodern
                </a>{' '}
                - Creative Technologies
              </h3>
              <p>
                <strong>(~3 years)</strong> May 2017 - Mar 2020, Hamburg
                (Germany)
              </p>
              <ul>
                <li>
                  2019 <strong>Web Engineering</strong> :: As part of a three to
                  seven-person development team we created a 3D{' '}
                  <a
                    href="https://www.smart.com/de/de/modelle/eq-fortwo-coupe/konfigurator"
                    title="New smart car configurator"
                  >
                    car configurator
                  </a>{' '}
                  application for smart.{' '}
                  <a
                    href="https://demodern.com/projects/smart-cc"
                    title="Project page @ Demodern"
                  >
                    [more information]
                  </a>
                  <br />
                  🧰{' '}
                  <cite>
                    React, Redux, styled-components, webpack, Jest, Jenkins, PCF
                  </cite>
                </li>

                <li>
                  2018 <strong>Web Engineering</strong> :: As part of a two to
                  five-person development team we created an automotive retail
                  experience for smart.{' '}
                  <a
                    href="https://demodern.com/projects/smart-cities-retail-experience"
                    title="Project page @ Demodern"
                  >
                    [more information]
                  </a>
                  <br />
                  🧰 <cite>React, Redux, SCSS, webpack</cite>
                </li>
              </ul>
            </li>

            <li>
              <h3>
                (Junior) Web Developer @{' '}
                <a href="https://www.jvm.com" title="Jung von Matt website">
                  Jung von Matt
                </a>
              </h3>
              <p>
                <strong>(~5 years)</strong> Feb 2012 - Apr 2017, Hamburg
                (Germany)
              </p>
              <ul>
                <li>
                  2017 <strong>Web Development</strong> :: As part of a three to
                  five-person development team we developed a campaign platform
                  with several specials to support the Elbphilharmonie hall
                  opening, project was called &quot;
                  <a
                    href="https://www.elbphilharmonie.de/en/mediatheque/next-door#!/"
                    title="One of the developed campaign specials: Discover spots around the Elbphilharmonie"
                  >
                    Countdown Elbphilharmonie
                  </a>
                  &quot;.{' '}
                  <a
                    href="https://www.jvm.com/en/cases/elbphilharmonie-grand-opening/"
                    title="Elbphilharmonie case site"
                  >
                    [more information]
                  </a>
                  <br />
                  🧰 <cite>Django, AngularJS v1, SCSS with BEM</cite>
                </li>

                <li>
                  2016 <strong>Frontend Development</strong> :: As part of a
                  four-person development team we developed a full screen
                  video-like web application that allowed users to discover BMWs
                  vision car interactively (custom Vanilla JS MVC application),
                  called BMW VISION NEXT 100 special.{' '}
                  <a
                    href="https://www.jvm.com/de/cases/bmw-100/"
                    title="BMW Next 100 project site"
                  >
                    [more information]
                  </a>
                  <br />
                  🧰 <cite>Vanilla JS, SCSS</cite>
                </li>

                <li>
                  2015 <strong>Frontend Development</strong> :: As part of a
                  five-person development team we developed a campaign platform
                  (Django framework based) named &quot;
                  <a
                    href="https://kampagne.dfb.de"
                    title="Current website state"
                  >
                    DFB Ehrenrunde
                  </a>
                  &quot;.
                  <br />
                  🧰 <cite>AngularJS v1, Less</cite>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Studies</h2>
          <ul>
            <li>
              2012 <strong>Media Informatics, Bachelor of Science</strong>{' '}
              (B.Sc.),{' '}
              <a
                href="https://www.hof-university.com"
                title="University of Applied Sciences Hof website"
              >
                University of Applied Sciences Hof
              </a>
              , Germany
            </li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>(Frontend) Web Engineering</strong> 9+ years of
              experience, writing clean and maintainable code.
            </li>

            <li>
              <strong>UX/UI Development</strong> I love to create easy-to-use
              interfaces and to work closely with the UX/UI Designers to create
              the best user journey.
            </li>

            <li>
              <strong>Prototyping</strong> I like to verify new product ideas
              through prototypes.
            </li>

            <li>
              <strong>Technical Project Management</strong> Project planning;
              stakeholder, client and service provider communication; my
              favourite agile process frameworks are Scrum and Kanban (with
              periodically team retrospectives).
            </li>

            <li>
              <strong>Technical Lead</strong> Software architecture, code
              review, communication, mentoring - I&apos;m always happy and
              curious to improve and reflect current workflows within the team
              and company in a collaborative way. I&apos;m a fan of flat
              hierarchies, transparency, self-management and empowerment.
            </li>

            <li>
              <strong>Working remotely</strong> I see a lot of advantages in
              remote work, especially when good communication and supportive
              processes are established within a company.
            </li>

            <li>
              <strong>Favourite tools, topics:</strong> JavaScript (ES Next,
              TypeScript / React, Redux), HTML5, CSS3 (SCSS, CSS in JS),
              Node.js, webpack, Babel, git feature-branch workflow, test-driven
              development (TDD) with Jest, CI/CD, DevOps, scalability,
              performance
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Projects</h2>
          <ul>
            <li>
              2017 <strong>Web-Application Development</strong>, visitor
              selftest for Kanal phil harmonie II. by{' '}
              <a
                href="http://www.balticraw.org/kanal-spiel-harmonie-ii-groupshow/"
                title="Kanal phil harmonie II. exhibition website"
              >
                BALTIC RAW ORG
              </a>{' '}
              at Elbphilharmonie Revisited exhibition, Deichtorhallen Hamburg
              (free time)
            </li>

            <li>
              2016 <strong>Web Development</strong>,{' '}
              <a
                href="http://trustthegirls.org/"
                title="TRUST THE GIRLS website"
              >
                TRUST THE GIRLS
              </a>{' '}
              online platform (free time)
            </li>

            <li>
              2015 <strong>Web Development</strong>,{' '}
              <a href="http://querfeld.bio/" title="Querfeld website">
                Querfeld
              </a>{' '}
              website (free time)
            </li>
          </ul>
        </section>

        <section>
          <h2>Still here?</h2>
          <h3>Thank you.</h3>
          <p>&rarr; {email}</p>
        </section>
      </div>
    </Layout>
  );
};

export default CV;
