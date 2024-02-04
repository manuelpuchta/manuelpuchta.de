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
        description: 'Here you can see what I do (did) for a living (so far).',
      }}
    >
      <div className={styles.cv}>
        <header>
          <h1>Manuel Puchta</h1>
          <aside>
            <p>Hamburg, Germany</p>
            <p>Mail: {email}</p>
            <p>
              Web: <a href="https://manuelpuchta.de">https://manuelpuchta.de</a>
            </p>
          </aside>
        </header>

        <section>
          <p>
            <strong>I&apos;m a Web Engineer.</strong> What I love to do:
            Building easy-to-use, responsive and accessible interfaces that put
            a smile on the face of people using them. Ensuring that everything
            scales well by designing and implementing the underlying
            architecture. Shipping frequently to live. Making a product better.
            Working in a team.
          </p>
        </section>

        <section className={styles.work}>
          <h2>Work experience</h2>

          <h3>
            Senior Frontend Developer @{' '}
            <a href="https://www.tk.de">Die Techniker</a>
          </h3>
          <p>
            <strong>(Now)</strong> Since Sep 2023 - Hamburg (Germany)
          </p>
          <p>Team: Web Squad</p>
          <p>
            <strong>Web Engineering:</strong> Working on{' '}
            <a href="https://www.tk.de">tk.de</a>.
          </p>
          <ul>
            <li>
              Collaborating within a cross-functional team, I contribute to the
              gradual redesign of a complex frontend user interface, ensuring
              adherence to accessibility best practices (
              <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a>).
            </li>
            <li>
              Within community of practices, I proactively help to maintain and
              update internal frameworks/component systems, for example to
              ensure security through Node.js LTS version updates.
            </li>
            <li>
              Prototyping/evaluating of a performant and reliabile new frontend
              tech stack.
            </li>
            <cite>
              TypeScript, Vanilla JS, React, HTML5, CSS3, SCSS, FreeMarker,
              GitHub
            </cite>
          </ul>

          <h3>
            Senior Software Developer (Frontend) @{' '}
            <a href="https://dkbcodefactory.com">DKB Code Factory</a>
          </h3>
          <p>
            <strong>(~0.5 years)</strong> Feb 2023 - Jul 2023, remote from
            Hamburg (Germany)
          </p>
          <p>Team: Business customers (trustee platform)</p>
          <p>
            <strong>Web Engineering:</strong> I was co-responsible for the
            development of a new web platform (Full stack with frontend focus)
            in a cross-functional team.
          </p>
          <ul>
            <li>
              In close collaboration with UX I initiated an MVP using Nuxt 3 to
              address a crucial business requirement associated with BaFin
              regulations.
            </li>
            <li>
              Empowered our team to actively contribute to the internal Design
              Systems (Vue 2 and 3).
            </li>
            <cite>
              TypeScript, Vue 3, Nuxt 3, Tailwind, Design System, Vitest,
              Node.js, GitLab CI/CD
            </cite>
          </ul>

          <h3>Sabbatical 🌴</h3>
          <p>
            Lots of time on the bike, recharging batteries, finding a new
            interesting job.
          </p>

          <h3>
            Senior Web Developer @{' '}
            <a href="https://www.tomorrow.one">Tomorrow</a>
          </h3>
          <p>
            <strong>(~2 years)</strong> Apr 2020 - Jun 2022, Hamburg (Germany)
          </p>
          <p>Teams: Customer Relationship and Growth</p>
          <p>
            <strong>Web Engineering:</strong> I planned and established a future
            proof web tech stack from scratch.
          </p>
          <ul>
            <li>
              Re-creation of <a href="https://www.tomorrow.one">tomorrow.one</a>{' '}
              marketing website, self-service pages and{' '}
              <a href="https://get.tomorrow.one/en-EU/start/">sign-up</a>{' '}
              process by implementing performant Next.js frontend solutions,
              coupled with a streamlined asset management for enhanced
              efficiency.
            </li>
            <li>
              Implemented a headless CMS (RESTful API), empowering marketing and
              product teams to achieve complete independence in creating and
              publishing content, along with campaign pages.
            </li>
            <li>
              To ensure scalability and maintenance, I collaborated with UX/UI
              designers to implement a design system from scratch that serves as
              the foundation for nearly all Tomorrow websites today (published
              as a private npm package to a self hosted Nexus repository).
            </li>
            <li>
              Stretched myself, teaching myself Kubernetes, Skaffold and GitLab
              CI/CD pipelines configuration to create dockerized web frontends
              (custom build, test and deployment processes).
            </li>
            <cite>
              TypeScript, React, Redux, styled-components, Next.js, Storybook,
              npm, Jest, Testing Library, Node.js, Headless CMS, Kubernetes,
              docker, GitLab CI
            </cite>
          </ul>

          <h3>
            Senior Web Developer @ <a href="https://demodern.com">Demodern</a> -
            Creative Technologies
          </h3>
          <p>
            <strong>(~3 years)</strong> May 2017 - Mar 2020, Hamburg (Germany)
          </p>
          <p>
            During my time at Demodern, I was part of a team that wanted to
            develop the most intuitive, visual compelling and performant web{' '}
            <a href="https://www.smart.com/de/de/modelle/eq-fortwo-coupe/konfigurator">
              car configurator
            </a>{' '}
            to date. It was so much fun!
          </p>
          <ul className={(styles.listHasMoreSpace, styles.hiddenForPrint)}>
            <li>
              <strong>Web Engineering:</strong> 3D{' '}
              <a href="https://www.smart.com/de/de/modelle/eq-fortwo-coupe/konfigurator">
                car configurator
              </a>{' '}
              application for smart.{' '}
              <a href="https://demodern.com/projects/smart-cc">
                [more information]
              </a>
              <br />
              <cite>
                React, Redux, styled-components, webpack, Jest, Jenkins, PCF
              </cite>
            </li>

            <li>
              <strong>Web Engineering:</strong> Automotive retail experience for
              smart.{' '}
              <a href="https://demodern.com/projects/smart-cities-retail-experience">
                [more information]
              </a>
              <br />
              <cite>React, Redux, SCSS, webpack</cite>
            </li>
          </ul>

          <h3>
            (Junior) Web Developer @{' '}
            <a href="https://www.jvm.com">Jung von Matt</a>
          </h3>
          <p>
            <strong>(~5 years)</strong> Feb 2012 - Apr 2017, Hamburg (Germany)
          </p>
          <p>
            I learned a lot during my time at Jung von Matt. Thanks to great
            colleagues and projects, I gained exceptional skills in responsive
            (mobile first) web development and was able to get to know a wide
            variety of tech stacks, always tailored to the respective client
            requirements.
          </p>
          <ul className={(styles.listHasMoreSpace, styles.hiddenForPrint)}>
            <li>
              <strong>Web Development:</strong> Campaign platform with several
              specials to support the Elbphilharmonie hall opening, project was
              called &quot;
              <a href="https://www.elbphilharmonie.de/en/mediatheque/next-door#!/">
                Countdown Elbphilharmonie
              </a>
              &quot;.{' '}
              <a href="https://www.jvm.com/en/cases/elbphilharmonie-grand-opening/">
                [more information]
              </a>
              <br />
              <cite>Django, AngularJS v1, SCSS with BEM</cite>
            </li>

            <li>
              <strong>Frontend Development:</strong> BMW VISION NEXT 100
              special, a full screen video-like web application that allowed
              users to discover BMWs vision car interactively (custom Vanilla JS
              MVC application).{' '}
              <a href="https://www.jvm.com/de/cases/bmw-100/">
                [more information]
              </a>
              <br />
              <cite>Vanilla JS, SCSS</cite>
            </li>

            <li>
              <strong>Frontend Development:</strong> &quot;
              <a href="https://kampagne.dfb.de">DFB Ehrenrunde</a>
              &quot; campaign platform (Django framework based).
              <br />
              <cite>AngularJS v1, Less</cite>
            </li>
          </ul>
        </section>

        <section>
          <h2>Studies</h2>
          <ul>
            <li>
              <strong>Media Informatics, Bachelor of Science</strong> (B.Sc.),{' '}
              <a href="https://www.hof-university.com">
                University of Applied Sciences Hof
              </a>
              , Germany.
              <br />
              <strong>2007 - 2012</strong>
            </li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>(Frontend) Web Engineering</strong> 10+ years of
              experience, writing clean and maintainable code.
            </li>

            <li>
              <strong>Technical Lead</strong> Software architecture, code
              review, communication, mentoring - I&apos;m always happy and
              curious to improve and reflect current workflows within the team
              and company in a collaborative way. I&apos;m a fan of flat
              hierarchies, transparency, self-management and empowerment.
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

        <section className={styles.hiddenForPrint}>
          <h2>Other Projects</h2>
          <ul>
            <li>
              2017 <strong>Web-Application Development</strong>, visitor
              selftest for Kanal phil harmonie II. by{' '}
              <a href="http://www.balticraw.org/kanal-spiel-harmonie-ii-groupshow/">
                BALTIC RAW ORG
              </a>{' '}
              at Elbphilharmonie Revisited exhibition, Deichtorhallen Hamburg
              (free time)
            </li>

            <li>
              2016 <strong>Web Development</strong>,{' '}
              <a href="http://trustthegirls.org/">TRUST THE GIRLS</a> online
              platform (free time)
            </li>

            <li>
              2015 <strong>Web Development</strong>,{' '}
              <a href="http://querfeld.bio/">Querfeld</a> website (free time)
            </li>
          </ul>
        </section>

        <section>
          <h2>Still here?</h2>
          <h3>Thank you.</h3>
          <p>Mail: {email}</p>
        </section>
      </div>
    </Layout>
  );
};

export default CV;
