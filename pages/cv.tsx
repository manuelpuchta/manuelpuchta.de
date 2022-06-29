import React from 'react';

import Layout from '../components/layout';

const CV: React.FC = () => (
  <Layout
    metaData={{
      title: 'CV',
    }}
  >
    <section>
      <p>
        Location: Hamburg, Germany
        <br />
        Mail: hallo[at]manuelpuchta.de
        <br />
        Web:{' '}
        <a href="https://manuelpuchta.de" title="My website">
          https://manuelpuchta.de
        </a>
        <br />
        CV:{' '}
        <a
          href="https://manuelpuchta.de/cv/"
          title="Have a look at this CV within your browser"
        >
          https://manuelpuchta.de/cv/
        </a>
      </p>
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
          <strong>2012</strong> Media Informatics, Bachelor of Science (B.Sc.),{' '}
          <a
            href="https://www.hof-university.com"
            title="Link to the website of University of Applied Sciences Hof"
          >
            University of Applied Sciences Hof
          </a>
        </li>

        <li>
          <strong>2007</strong> Fachhochschulreife (in English: University of
          Applied Sciences entrance qualification), Staatliche Fachoberschule
          Hof
        </li>
      </ul>
    </section>
    <section>
      <h3>Work</h3>
      <ul>
        <li>
          <strong>(~2 years) Apr 2020 - Jun 2022</strong> Senior Web Developer @{' '}
          <a href="https://www.tomorrow.one" title="Tomorrow website">
            Tomorrow
          </a>
        </li>

        <li>
          <strong>(~3 years) May 2017 - Mar 2020</strong> Senior Web Developer @{' '}
          <a href="https://demodern.com" title="Demodern website">
            Demodern
          </a>{' '}
          - Creative Technologies
        </li>

        <li>
          <strong>(~5 years) Feb 2012 - Apr 2017</strong> Internship, (Junior)
          Web Developer @{' '}
          <a href="https://www.jvm.com" title="Jung von Matt website">
            Jung von Matt
          </a>
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
          <strong>Since 2020</strong> Web Engineering :: relaunching{' '}
          <a href="https://www.tomorrow.one" title="Tomorrow marketing website">
            tomorrow.one
          </a>{' '}
          marketing website, self-service pages and{' '}
          <a
            href="https://get.tomorrow.one/en-EU/start/"
            title="Tomorrow web sign up"
          >
            sign up
          </a>
          . To achieve scalability and maintainability I introduced a design
          system (component library) which powers almost all Tomorrow websites
          today.
          <br />
          <cite>
            TypeScript, React, Redux, styled-components, Next.js, Storybook,
            Jest, Testing Library, Node.js, Headless CMS, Kubernetes, docker,
            GitLab CI
          </cite>
        </li>

        <li>
          <strong>2019</strong> Web Engineering :: As part of a three to
          seven-person development team, we created a 3D{' '}
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
          <strong>2018</strong> Web Engineering :: As part of a two to
          five-person development team, we created an automotive retail
          experience for smart (Demodern){' '}
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
          <strong>2017</strong> Web Development :: As part of a three to
          five-person development team, we developed a campaign platform with
          several specials to support the Elbphilharmonie hall opening, project
          was called &quot;
          <a
            href="https://www.elbphilharmonie.de/en/mediatheque/next-door#!/"
            title="One of the developed campaign specials: Discover spots around the Elbphilharmonie"
          >
            Countdown Elbphilharmoni
          </a>
          e&quot; (Jung von Matt){' '}
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
          <strong>2016</strong> Frontend Development :: As part of a four-person
          development team, we developed a full screen video-like web
          application that allowed users to discover BMWs vision car
          interactively (custom Vanilla JS MVC application), called BMW VISION
          NEXT 100 special (Jung von Matt){' '}
          <a
            href="https://www.jvm.com/de/cases/bmw-100/"
            title="BMW Next 100 project site"
          >
            [more information]
          </a>
          <br />
          <cite>Vanilla JS, SCSS</cite>
        </li>

        <li>
          <strong>2015</strong> Frontend Development :: As part of a five-person
          development team, we developed a campaign platform (Django framework
          based) named &quot;
          <a href="https://kampagne.dfb.de" title="Current website state">
            DFB Ehrenrunde
          </a>
          &quot; (Jung von Matt)
          <br />
          <cite>AngularJS v1, Less</cite>
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
          <strong>Favourite tools, topics:</strong> JavaScript (ES Next,
          TypeScript / React, Redux), HTML5, CSS3 (SCSS, CSS in JS), Node.js,
          webpack, Babel, git feature-branch workflow, test-driven development
          (TDD) with Jest, CI/CD, DevOps, scalability, performance
        </li>
      </ul>
    </section>
    <section>
      <h3>Other</h3>
      <ul>
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

        <li>
          <strong>2016</strong> Web Development,{' '}
          <a href="http://trustthegirls.org/" title="TRUST THE GIRLS website">
            TRUST THE GIRLS
          </a>{' '}
          online platform (free time)
        </li>

        <li>
          <strong>2015</strong> Web Development, UX/UI-Design,{' '}
          <a href="http://querfeld.bio/" title="Querfeld website">
            Querfeld
          </a>{' '}
          website (free time)
        </li>
      </ul>
    </section>
    <p>Still here? Thank you!</p>
  </Layout>
);

export default CV;
