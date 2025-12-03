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

      <EducationSegment />
      <AccomplishmentsSegment />
      <OthersSegment />

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
      description: `Frontend engineer with 8+ years of experience building high-impact web and mobile applications. 
      Currently at Google, where I lead frontend development for a Cloud product. 
      Expert in React, Angular, and TypeScript with a proven track record of delivering scalable solutions 
      for millions of users. Comfortable across the full stack with hands-on backend experience in Java and Node.js. 
      Known for turning complex technical challenges into elegant, user-focused products.`,
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
          href: 'https://maps.app.goo.gl/FGbPR76L7mTc8xba8',
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
            from: '2023.10',
            to: 'current',
          },
          positions: ['Frontend Engineer'],
          company: {
            name: 'Google',
            icon: 'google.svg',
          },
          projects: [
            {
              name: 'Google Cloud - Flow Analyzer',
              technologies: ['TypeScript', 'Angular', 'Java', 'Bazel'],
              position: 'Frontend',
              description:
                `Led a team to successfully launch [Flow Analyzer](https://cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview), ` +
                `a new Google Cloud product that enables enterprise customers to visualize and analyze network traffic from VPC Flow Logs. ` +
                `Drove the frontend architecture and delivered critical troubleshooting capabilities used by cloud infrastructure teams worldwide.`,
            },
          ],
        },
        {
          date: {
            from: '2022.08',
            to: '2023.01',
          },
          positions: ['Senior Frontend Engineer'],
          company: {
            name: 'BioWink GmbH',
            icon: 'biowink.svg',
          },
          projects: [
            {
              name: 'Clue website',
              technologies: ['TypeScript', 'React', 'Gatsby'],
              position: 'Frontend',
              description:
                `Owned frontend development for [helloclue.com](https://helloclue.com), ` +
                `a high-traffic health encyclopedia serving millions of users globally. ` +
                `Delivered new features across a multi-language platform (5 languages) with thousands of Contentful-managed articles, ` +
                `and implemented seamless web payment integration.`,
            },
          ],
        },
        {
          date: {
            from: '2021.12',
            to: '2022.07',
          },
          positions: ['Senior Software Engineer'],
          company: {
            name: 'Deloitte',
            icon: 'deloitte.svg',
            iconSize: 'small',
          },
          projects: [
            {
              name: 'Call Center',
              technologies: ['TypeScript', 'React', 'Twilio'],
              position: 'Frontend and Backend',
              description:
                `Architected and delivered full-stack features for an enterprise call center platform, ` +
                `enabling automated phone call handling and workflow optimization. ` +
                `Built custom React plugins and serverless cloud functions that streamlined agent productivity.`,
            },
          ],
        },
        {
          date: {
            from: '2021.09',
            to: '2021.11',
          },
          positions: ['Senior Frontend Engineer'],
          company: {
            name: 'Plumettaz',
            icon: 'plumettaz.svg',
          },
          projects: [
            {
              name: 'OptiJet™',
              description:
                `Rescued a critical industrial product by resolving persistent performance issues. ` +
                `Engineered internationalization support, optimized 50-page PDF generation, and built real-time ` +
                `data visualization handling tens of thousands of data points—all while targeting legacy 2014 Android hardware.`,
              position: 'Frontend',
              technologies: ['React', 'JavaScript', 'TypeScript'],
            },
          ],
        },
        {
          date: {
            from: '2019.11',
            to: '2021.12',
          },
          positions: ['Technical Team Lead', 'Senior Frontend Engineer'],
          shortDescription:
            `Led a team of 8 engineers within a 30-person project. ` +
            `Drove frontend architecture decisions, designed and implemented core features, ` +
            `conducted code reviews, and delivered weekly stakeholder presentations.`,
          company: {
            name: 'SDI Media',
            icon: 'sdi.png',
          },
          projects: [
            {
              name: 'SPS - Single Production System',
              technologies: ['Angular', 'TypeScript', 'Jest'],
              position: 'Frontend',
              description:
                `Built an enterprise-grade production management platform from the ground up, ` +
                `enabling end-to-end order tracking and workflow automation for media localization services.`,
            },
          ],
        },
        {
          date: {
            from: '2017.04',
            to: '2019.10',
          },
          positions: ['Fullstack Engineer'],
          shortDescription:
            `Beyond core development, took ownership of technical recruitment—designing challenges and conducting interviews. ` +
            `Mentored interns and served as company ambassador at industry trade shows.`,
          company: {
            name: 'Acaisoft',
            icon: 'acaisoft.webp',
          },
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
                'Developed a centralized management portal enabling enterprise clients to monitor, group, and control access across multiple data backup systems.',
            },
            {
              name: 'Data backup portal',
              technologies: ['Angular', 'TypeScript'],
              position: 'Frontend',
              description:
                'Built a remote monitoring and configuration interface for enterprise data deduplication and replication servers.',
            },
            {
              name: 'Car sharing platform',
              technologies: [
                'React Native, Redux, Jest, Cucumber, JavaScript, Java, Kotlin',
              ],
              position: 'Mobile app',
              description:
                'Engineered a real-time mobile application for fleet management, featuring live worker tracking and intelligent job batching algorithms.',
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
                'Created a full-stack content management system for VR streaming with an integrated web-based VR player.',
            },
          ],
        },
        {
          date: {
            from: '2016.06',
            to: '2017.03',
          },
          positions: ['Frontend Developer'],
          company: {
            name: 'Transition Technologies',
            icon: 'tt.png',
          },
          projects: [
            {
              name: 'Social meetings app',
              technologies: ['Angular', 'TypeScript', 'AngularJS', 'Meteor'],
              position: 'Frontend',
              description:
                'Developed a Chrome extension that intelligently matches users seeking help with domain experts, facilitating knowledge-sharing meetings.',
            },
            {
              name: 'Skills management portal',
              technologies: ['AngularJS', 'JavaScript', 'Meteor'],
              position: 'Frontend and Backend',
              description:
                'Built a talent discovery platform enabling organizations to catalog employee skills and quickly identify the right experts for any challenge.',
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
