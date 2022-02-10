import React from 'react';
import Image from 'next/image';

import Layout from '../components/layout';
import { imageLoader } from '../lib/imageLoader';

const CV: React.FC = () => (
  <Layout
    metaData={{
      title: 'CV',
    }}
  >
    <section>
      <Image
        className="banana-split"
        loader={imageLoader}
        src={'images/banana-split.jpg'}
        alt="Portrait of Manuel Puchta, while eating ice cream in sunny south tyrol."
        width={400}
        height={266}
      />
      <ul>
        <li>Location: Hamburg</li>
        <li>Mail: hallo[at]manuelpuchta.de</li>
        <li>
          Web:{' '}
          <a href="https://manuelpuchta.de" title="My website.">
            https://manuelpuchta.de
          </a>
        </li>
      </ul>
    </section>
    <section>
      <p>
        Born on the 18th of April 1986 in Hof, Germany.
        <br />
        German citizenship
      </p>
    </section>
    <section>
      <h3>Studies</h3>
      <ul>
        <li>
          <strong>2007</strong> Fachhochschulreife, Staatliche Fachoberschule
          Hof
        </li>
        <li>
          <strong>2012</strong> Medieninformatik, Bachelor of Science (B.Sc.),
          University of Applied Sciences Hof
        </li>
      </ul>
    </section>
    <section>
      <h3>Work</h3>
      <ul>
        <li>
          <strong>2012 - 2017</strong> Internship, (Junior) Web Developer @ Jung
          von Matt
        </li>
        <li>
          <strong>2017 - 2020</strong> Senior Web Developer @ Demodern -
          Creative Technologies
        </li>
        <li>
          <strong>Since 2020</strong> Senior Web Developer @ Tomorrow
        </li>
      </ul>
      <p>
        I&apos;ve been working with clients such as BMW, Bosch, DFB,
        Elbphilharmonie, Mercedes-Benz, smart and more.
      </p>
    </section>
    <section>
      <h3>Selected projects</h3>
      <ul>
        <li>
          <strong>2015</strong> Frontend Development ::{' '}
          <a href="https://kampagne.dfb.de" title="Current website state">
            DFB Ehrenrunde
          </a>{' '}
          website (Jung von Matt){' '}
          <a
            href="http://awardserver.de/2015/DFB_Ehrenrunde/"
            title="DFB Ehrenrunde award site"
          >
            [more information]
          </a>
          <br />
          <cite>AngularJS v1, Less</cite>
        </li>
        <li>
          <strong>2016</strong> Frontend Development :: BMW VISION NEXT 100
          special (Jung von Matt){' '}
          <a
            href="http://awardserver.de/2016/BMWNEXT100/"
            title="BMW Next 100 award site"
          >
            [more information]
          </a>
          <br />
          <cite>Vanilla JS, SCSS</cite>
        </li>
        <li>
          <strong>2016</strong> Web Development :: Countdown Elbphilharmonie
          <a
            href="https://www.elbphilharmonie.de/en/mediatheque/next-door#!/"
            title="One of the developed campaign specials: Discover spots around the Elbphilharmonie"
          >
            campaign
          </a>{' '}
          platform (Jung von Matt){' '}
          <a
            href="https://www.jvm.com/en/cases/elbphilharmonie-grand-opening/"
            title="Elbphilharmonie case site"
          >
            [more information]
          </a>
          <br />
          <cite>Django, AngularJS v1, SCSS with BEM</cite>
        </li>
        <li>
          <strong>2018</strong> Web Engineering :: automotive retail experience
          for smart (Demodern){' '}
          <a
            href="https://demodern.com/projects/smart-cities-retail-experience"
            title="Project page @ Demodern"
          >
            [more information]
          </a>
          <br />
          <cite>React, Redux, SCSS</cite>
        </li>
        <li>
          <strong>2019</strong> Web Engineering :: 3D{' '}
          <a
            href="https://www.smart.com/de/de/modelle/eq-fortwo-coupe/konfigurator"
            title="New smart car configurator"
          >
            car configurator
          </a>{' '}
          application for smart (Demodern){' '}
          <a
            href="https://demodern.com/projects/smart-cc"
            title="Project page @ Demodern"
          >
            [more information]
          </a>
          <br />
          <cite>React, Redux, styled-components, Jest, Jenkins, PCF</cite>
        </li>
        <li>
          <strong>Since 2020</strong> Web Engineering :: relaunching{' '}
          <a href="https://www.tomorrow.one" title="Tomorrow website">
            tomorrow.one
          </a>{' '}
          marketing website, self-service pages and the web sign up. To achieve
          scalability and maintainability I introduced a design system
          (component library) which powers almost all Tomorrow websites today.
          <br />
          <cite>
            TypeScript, React, Redux, styled-components, Next.js, Storybook,
            Jest, Testing Library, Node.js, Headless CMS, Kubernetes, docker,
            GitLab CI
          </cite>
        </li>
      </ul>
    </section>
    <section>
      <h3>Skills</h3>
      <ul>
        <li>
          <strong>(Frontend) Web Engineering</strong> 9+ years of experience,
          writing clean and maintainable code.
        </li>
        <li>
          <strong>UX/UI Development</strong> I love to create easy-to-use
          interfaces and to work closely with the UX/UI Designers to create the
          best user journey.
        </li>
        <li>
          <strong>Prototyping</strong>
        </li>
        <li>
          <strong>Technical Project Management</strong> Project planning, client
          and service provider communications - My favourite agile process
          frameworks are Scrum and Kanban (with periodically team
          retrospectives).
        </li>
        <li>
          <strong>Technical Lead</strong> Software architecture, code review,
          communication, mentoring - I&apos;m always happy and curious to
          improve and reflect current workflows within the team and company in a
          collaborative way. I&apos;m a fan of flat hierarchies, transparency,
          self-management and empowerment.
        </li>
        <li>
          <strong>Working remotely</strong>
        </li>
        <li>
          <strong>Favourite tools, topics:</strong> React, Redux, CSS (SCSS),
          styled-components, BEM, HTML5, Node.js, webpack, git feature-branch
          workflow, test-driven development (TDD), CI/CD, DevOps, scalability,
          performance
        </li>
      </ul>
    </section>
    <section>
      <h3>Other</h3>
      <ul>
        <li>
          <strong>2015</strong> Web Development, UX/UI-Design,{' '}
          <a href="http://querfeld.bio/" title="Querfeld website">
            Querfeld
          </a>{' '}
          website (free time)
        </li>
        <li>
          <strong>2016</strong> Web Development,{' '}
          <a href="http://trustthegirls.org/" title="TRUST THE GIRLS website">
            TRUST THE GIRLS
          </a>{' '}
          online platform (free time)
        </li>
        <li>
          <strong>2017</strong> Web-Application Development, visitor selftest
          for Kanal phil harmonie II. by{' '}
          <a
            href="http://www.balticraw.org/kanal-spiel-harmonie-ii-groupshow/"
            title="Kanal phil harmonie II."
          >
            BALTIC RAW ORG
          </a>{' '}
          at Elbphilharmonie Revisited exhibition, Deichtorhallen Hamburg (free
          time)
        </li>
      </ul>
    </section>
    <p>Still here? Thank you!</p>
  </Layout>
);

export default CV;
