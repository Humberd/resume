import * as React from 'react';
import { Helmet } from 'react-helmet';

import './index.scss';
import '../fonts/style.css';
import { Header } from '../components/header';
import { Segment } from '../components/segments/segment';
import { PersonalInfo } from '../components/segments/personal-info';
import { WorkHistory } from '../components/segments/work-history';
import { Education } from '../components/segments/education';
import { Layout } from '../components/layout';
import { Accomplishments } from '../components/segments/accomplishments';
import { UnbreakableList } from '../components/unbreakableList';
import { Languages } from '../components/segments/languages';
import { Technologies } from '../components/segments/technologies';
import { PersonalProjects } from '../components/segments/personal-projects';
import { Footer } from '../components/footer';
import { Others } from '../components/segments/others';
import { Enjoyments } from '../components/segments/enjoyments';

const IndexPage = () => (
  <>
    <Meta
      title="Maciej Sawicki - Resume"
      description="Distinguished Frontend and Angular Expert. Delivers best quality features to make sure your business makes money."
      url="https://humberd.github.io/resume/"
      imageUrl="https://humberd.github.io/resume/meta/og-image.png"
    />
    <Layout>
      <HeaderSegment />

      <div className="columns">
        <ul>
          <li>
            <WorkHistorySegment />
          </li>
        </ul>

        <UnbreakableList>
          <li>
            <PersonalInfoSegment />
          </li>
          <li>
            <TechnologiesSegment />
          </li>
          <li>
            <LanguagesSegment />
          </li>
          <li>
            <EnjoymentsSegment />
          </li>
        </UnbreakableList>
      </div>

      {/* Artificial spacer so that printing works */}
      <div className="spacer" />
      <EducationSegment />
      <AccomplishmentsSegment />
      <OthersSegment />

      {/* Artificial spacer so that printing works */}
      <div className="spacer2" />
      <PersonalProjectsSegment />

      <FooterSegment />
    </Layout>
  </>
);

const Meta = ({ title, description, url, imageUrl }) => {
  if (description.length <= 100) {
    throw Error(
      `LinkedIn wants at least 100 characters of description. Otherwise it gets text from the beginning of the page. Currently it has ${description.length} characters`
    );
  }
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

const HeaderSegment = () => (
  <Header
    {...{
      name: 'Maciej Sawicki',
      downloadUrl:
        'https://github.com/Humberd/resume/raw/gh-pages/Maciej%20Sawicki%20-%20Resume.pdf',
      profession: 'Senior Frontend Engineer',
      description: `I'm an experienced engineer, who specializes in frontend development.
      I am fluent with both JavaScript and Typescript. I worked with a variety of technologies,
      the most notable being React, React Native and Angular. I worked on a variety of projects,
      both large and small, in some of which I expanded my knowledge of backend development in Java and Node.js.
      It makes me an ideal candidate to make a job done, regardless of the technology.
      `,
    }}
  />
);

const PersonalInfoSegment = () => (
  <Segment
    header={{
      icon: 'person.svg',
      title: 'Personal Info',
    }}
  >
    <PersonalInfo
      entries={[
        {
          title: 'Address',
          icon: 'place.svg',
          value: 'Warsaw, Poland',
          href: 'https://goo.gl/maps/fSBP7oMDgsZUzzmq6',
        },
        {
          title: 'Email',
          icon: 'email.svg',
          value: 'maciej.sawicki@protonmail.com',
          href: 'mailto:maciej.sawicki@protonmail.com',
        },
        {
          title: 'GitHub',
          icon: 'github.svg',
          value: 'github.com/Humberd',
          href: 'https://github.com/Humberd',
        },
        {
          title: 'LinkedIn',
          icon: 'linked-in.svg',
          value: 'linkedin.com/in/maciej-sawicki',
          href: 'https://www.linkedin.com/in/maciej-sawicki',
        },
      ]}
    />
  </Segment>
);

const TechnologiesSegment = () => (
  <Segment
    header={{
      icon: 'devices.svg',
      title: 'Technologies',
    }}
  >
    <Technologies
      entries={[
        {
          title: 'Frontend',
          technologies: [
            'Angular',
            'AngularJS',
            'React',
            'React Native',
            'RxJS',
            'Redux',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS',
            'SCSS',
          ],
        },
        {
          title: 'Backend',
          technologies: [
            'Spring',
            'Node.js',
            'RxJava',
            'Java',
            'Kotlin',
            'JavaScript',
            'TypeScript',
          ],
        },
        {
          title: 'DevOps',
          technologies: [
            'Git',
            'Azure DevOps',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Jenkins',
          ],
        },
      ]}
    />
  </Segment>
);

const LanguagesSegment = () => (
  <Segment
    header={{
      icon: 'flag.svg',
      title: 'Communication',
    }}
  >
    <Languages
      entries={[
        {
          name: 'Polish',
          level: 'Native',
        },
        {
          name: 'English',
          level: 'Fluent',
        },
      ]}
    />
  </Segment>
);

const EnjoymentsSegment = () => (
  <Segment
    header={{
      icon: 'toy.svg',
      title: 'Things I Enjoy',
    }}
  >
    <Enjoyments
      entries={['Singing & Playing Piano', 'Travelling', 'Running Marathons']}
    />
  </Segment>
);

const WorkHistorySegment = () => (
  <Segment
    header={{
      icon: 'work.svg',
      title: 'Experience',
    }}
  >
    <WorkHistory
      entries={[
        {
          date: {
            from: '2022.09',
            to: 'current'
          },
          positions: ['Senior Frontend Engineer'],
          company: 'BioWink GmbH',
          projects: [{
            name: 'Clue website',
            technologies: ['TypeScript', 'React', 'Gatsby'],
            position: 'Frontend',
            description: `I maintained and added features to a helloclue.com,
              an encyclopedia website for Period and Cycle tracking app.
              It consists of thousands of articles from Contentful, supports 5 languages
              and allows web payment.`
          }]
        },
        {
          date: {
            from: '2021.12',
            to: '2022.08'
          },
          positions: ['Senior Software Engineer'],
          company: 'Deloitte',
          projects: [{
            name: 'Call Center',
            technologies: ['TypeScript', 'React', 'Twilio'],
            position: 'Frontend and Backend',
            description: `I was responsible for implementing features in a Twilio-based software 
              for handling and automating phone calls.
              This included development of React plugin and cloud functions.`
          }]
        },
        {
          date: {
            from: '2019.11',
            to: '2021.12',
          },
          positions: ['Technical Team Lead', 'Senior Frontend Engineer'],
          shortDescription: `I was a Leader and a Developer in a team of 8 in a project of 30.
              My responsibilities were: frontend feature design and implementation,
              frontend core architecture, code reviews, reporting to the management and
              performing weekly presentations.`,
          company: 'SDI Media',
          projects: [
            {
              name: 'SPS - Single Production System',
              technologies: ['Angular', 'TypeScript', 'Jest'],
              position: 'Frontend',
              description: `Web system for managing end-to-end production orders.`,
            },
          ],
        },
        {
          date: {
            from: '2021.09',
            to: '2021.11',
          },
          positions: ['Senior Frontend Engineer'],
          company: 'Plumettaz',
          projects: [
            {
              name: 'OptiJet™',
              description: `I was hired to fix reoccurring problems with a product called OptiJet.
                 My goal was to implement and optimize: internationalization, generation of 50 pages long pdf, 
                 real-time charts displaying tens of thousands event data points.
                 The challenge I faced was that I had to make this work on a low-en Android tablet released in 2014.`,
              position: 'Frontend',
              technologies: ['React', 'JavaScript', 'TypeScript'],
            },
          ],
        },
        {
          date: {
            from: '2017.04',
            to: '2019.10',
          },
          positions: ['Fullstack Engineer'],
          shortDescription: `Apart from regular programming duties
              I was also responsible for: creating and reviewing frontend-related recruitment tasks, 
              performing interviews, training interns and representing the company in 
              trade show booths during several events.`,
          company: 'Acaisoft',
          projects: [
            {
              name: 'User management portal',
              technologies: [
                'Angular',
                'TypeScript',
                'Karma',
                'Jasmine',
                'Spring',
                'Java',
                'Cassandra',
                'Elasticsearch',
                'Kafka',
                'Docker',
              ],
              position: 'Frontend and Backend',
              description:
                'Web portal to group, monitor and manage access to data backup portals.',
            },
            {
              name: 'Data backup portal',
              technologies: ['Angular', 'TypeScript'],
              position: 'Frontend',
              description:
                'Data deduplication and replication platform allowing for remote monitoring and configuring a physical server.',
            },
            {
              name: 'Car sharing platform',
              technologies: [
                'React Native, Redux, Jest, Cucumber, JavaScript, Java, Kotlin',
              ],
              position: 'Mobile app',
              description:
                'Platform for managing car sharing fleet workers with real-time info and job batching.',
            },
            {
              name: 'VR Portal',
              technologies: [
                'Angular',
                'Node.js',
                'TypeScript',
                'MongoDB',
                'Docker',
              ],
              position: 'Frontend and Backend',
              description:
                'VR streaming content management portal with an embedded VR player.',
            },
          ],
        },
        {
          date: {
            from: '2016.06',
            to: '2017.03',
          },
          positions: ['Frontend Developer'],
          company: 'Transition Technologies',
          projects: [
            {
              name: 'Social meetings app',
              technologies: ['Angular', 'TypeScript', 'AngularJS', 'Meteor'],
              position: 'Frontend',
              description:
                'Chrome extension arranging meetings between people with problems and their potential solvers.',
            },
            {
              name: 'Skills management portal',
              technologies: ['AngularJS', 'JavaScript', 'Meteor'],
              position: 'Frontend and Backend',
              description:
                'Web application for managing user skills and finding the best people for a given problem.',
            },
          ],
        },
      ]}
    />
  </Segment>
);

const EducationSegment = () => (
  <Segment
    header={{
      icon: 'school.svg',
      title: 'Education',
    }}
  >
    <Education
      entries={[
        {
          date: {
            from: '2017.02',
            to: '2018.07',
          },
          degree: 'Master of Engineering: Software Engineering',
          school: 'Białystok University of Technology',
        },
        {
          date: {
            from: '2013.09',
            to: '2017.02',
          },
          degree: 'Bachelor of Engineering: Computer Science',
          school: 'Białystok University of Technology',
        },
        {
          date: {
            from: '2001.09',
            to: '2007.06',
          },
          degree: 'Diploma in Piano',
          school: 'State Music School in Białystok',
        },
      ]}
    />
  </Segment>
);

const AccomplishmentsSegment = () => (
  <Segment
    header={{
      icon: 'trophy.svg',
      title: 'Accomplishments',
    }}
  >
    <Accomplishments
      entries={[
        {
          name: 'HackYeah 2019',
          date: '2019.09',
          description: `
                During the biggest stationary hackathon in Europe our team created in 24 hours data categorizing portal, 
                which given a lot of uncategorized documents
                (such as tweets, blog posts, application logs, random data) groups them by similarity of discussed topics.
              `,
          url: 'external-resources/hackyeah-2019-winners.html',
          role: 'Frontend and Backend',
          places: ['1st in Data Categorizing Software'],
        },
        {
          name: 'Białystok IT Test 2017',
          date: '2017.11',
          description: `
                In the biggest IT-oriented test in the city students from all High Schools and Universities
                are challenged in 10 different categories, among which are programming languages, databases, data
                exploration and software engineering concepts.
              `,
          url: 'https://wi.pb.edu.pl/blog/2017/11/30/bialostocki-test-informatykow-wyniki/',
          places: [
            '3rd in Overall Classification',
            '1st in Mobile Development',
            '1st in Object Oriented Programming',
            '1st in Web Development',
            '4th in Java Language Skills',
          ],
        },
        {
          name: 'Białystok IT Test 2016',
          date: '2016.11',
          places: [
            '1st in Java Language Skills',
            '2nd in Object Oriented Programming',
          ],
        },
      ]}
    />
  </Segment>
);

const OthersSegment = () => (
  <Segment
    header={{
      icon: 'others.svg',
      title: 'Others',
    }}
  >
    <Others
      entries={[
        {
          name: 'Meet.js Białystok #30',
          role: 'Speaker',
          date: '2019.11',
          description: `
                During the lecture I talked about accessibility when building web pages.
                I created an app that looks and behaves nicely, but
                is completely inaccessible to the visually impaired users.
                By gradually adding ARIA attributes and using a narrator I showed that
                doing very little we can open our website to all the people with disabilities.
              `.trim(),
        },
      ]}
    />
  </Segment>
);

const PersonalProjectsSegment = () => (
  <Segment
    header={{
      icon: 'collections.svg',
      title: 'Personal Projects',
    }}
  >
    <PersonalProjects
      entries={[
        {
          name: 'Salary Comparator',
          href: 'https://github.com/Humberd/salary-comparator',
          technologies: ['Kotlin', 'Jetpack Compose'],
          description:
            'Android Application converting my salary expectations from one currency to another in a given time frame. For example USD/year to EUR/day.',
        },
        {
          name: 'Erepublik game bot',
          href: 'https://github.com/Humberd/headless-k-worker',
          technologies: [
            'TypeScript',
            'Node.js',
            'Nest',
            'MongoDB',
            'Kotlin',
            'Docker',
            'Kubernetes',
            'Azure DevOps',
          ],
          description:
            'Headless bot which automates periodic game tasks, a native Android app as a monitoring tool, and a backend server inbetween.',
        },
        {
          name: 'This Resume',
          href: 'https://github.com/Humberd/resume',
          technologies: ['React', 'TypeScript'],
          description:
            'This Resume has been generated from easily customizable web page.',
        },
        {
          name: 'Wykop++',
          href: 'https://github.com/Humberd/Wykop-plus-plus',
          technologies: ['RxJS', 'TypeScript'],
          description:
            'Browser extension, which puts additional functionalities on wykop.pl, such as: comments hiding, infinite scroll, etc.',
        },
      ]}
    />
  </Segment>
);

const FooterSegment = () => (
  <Footer
    consent={
      'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)'
    }
  />
);

export default IndexPage;
