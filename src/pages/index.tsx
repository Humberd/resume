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
import { UnbreakableSegments } from '../components/unbreakableSegments';
import { Languages } from '../components/segments/languages';
import { Technologies } from '../components/segments/technologies';
import { PersonalProjects } from '../components/segments/personal-projects';
import { Footer } from '../components/footer';
import { Others } from '../components/segments/others';

const IndexPage = () => (
    <>
      <Helmet>
        <html lang="en"/>
        <meta charSet="utf-8" />
        <title>Maciej Sawicki - Resume</title>
        <meta name="description" content="Web based Resume created in React allowing pdf printing." />
      </Helmet>
      <Layout>
        <HeaderSegment/>

        <div className="columns">
          <UnbreakableSegments>
            <PersonalInfoSegment/>
            <TechnologiesSegment/>
            <LanguagesSegment/>
          </UnbreakableSegments>
          <UnbreakableSegments>
            <WorkHistorySegment/>
          </UnbreakableSegments>
        </div>

        <EducationSegment/>
        <AccomplishmentsSegment/>
        <OthersSegment/>
        <PersonalProjectsSegment/>

        <FooterSegment/>
      </Layout>
    </>
);

const HeaderSegment = () => (
    <Header {...{
      name: 'Maciej Sawicki',
      profession: 'Frontend/Fullstack Engineer',
      description: '**Frontend/Fullstack Engineer** with Master of Engineering degree in Computer Science, mainly accustomed with and interested in **Angular**. Fluent with a great number of languages and technologies both on frontend and backend side. Able to create an application from top to bottom and expose it to the world.',
    }}/>
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
              title: 'Phone',
              icon: 'phone.svg',
              value: '+48 507 847 934',
              href: 'tel:+48507847934',
            },
            {
              title: 'Email',
              icon: 'email.svg',
              value: 'humberd2@gmail.com',
              href: 'mailto:humberd2@gmail.com',
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
                'Docker',
                'Kubernetes',
                'Azure DevOps',
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
              level: 'Advanced, FCE',
            },
          ]}
      />
    </Segment>
);


const WorkHistorySegment = () => (
    <Segment
        header={{
          icon: 'work.svg',
          title: 'Work History',
        }}
    >
      <WorkHistory
          entries={[
            {
              date: {
                from: '2019.11',
                to: 'Current',
              },
              position: 'Senior Frontend Engineer',
              company: 'SDI Media',
              projects: [
                {
                  name: 'Film localization workflow manager',
                  technologies: ['Angular', 'TypeScript', 'Jest'],
                  position: 'Frontend',
                  description: 'Web portal to manage film localizations starting with a client order and ending up with localized film.',
                },
              ],
            },
            {
              date: {
                from: '2017.04',
                to: '2019.10',
              },
              position: 'Fullstack Engineer',
              company: 'Acaisoft',
              projects: [
                {
                  name: 'User management portal',
                  technologies: ['Angular', 'TypeScript', 'Karma', 'Jasmine', 'Spring', 'Java', 'Cassandra', 'Elasticsearch', 'Kafka', 'Docker'],
                  position: 'Frontend and Backend',
                  description: 'Web portal to group, monitor and manage access to data backup portals.',
                },
                {
                  name: 'Data backup portal',
                  technologies: ['Angular', 'TypeScript'],
                  position: 'Frontend',
                  description: 'Data deduplication and replication platform allowing for remote monitoring and configuring a physical server.',
                },
                {
                  name: 'Car sharing platform',
                  technologies: ['React Native, Redux, Jest, Cucumber, JavaScript, Java, Kotlin'],
                  position: 'Mobile app',
                  description: 'Platform for managing car sharing fleet workers with real-time info and job batching.',
                },
                {
                  name: 'VR Portal',
                  technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'],
                  position: 'Frontend and Backend',
                  description: 'VR streaming content management portal with an embedded VR player.',
                },
              ],
            },
            {
              date: {
                from: '2016.08',
                to: '2017.03',
              },
              position: 'Frontend Developer',
              company: 'Transition Technologies',
              projects: [
                {
                  name: 'Social meetings app',
                  technologies: ['Angular', 'TypeScript'],
                  position: 'Frontend',
                  description: 'Chrome extension arranging meetings between people with problems and their potential solvers.',
                },
              ],
            },
            {
              date: {
                from: '2016.06',
                to: '2016.07',
              },
              position: 'Frontend Intern',
              company: 'Transition Technologies',
              projects: [
                {
                  name: 'Skills management portal',
                  technologies: ['AngularJS', 'JavaScript', 'Meteor'],
                  position: 'Frontend and Backend',
                  description: 'Web application for managing user skills and finding the best people for a given problem.',
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
              school: 'Białystok Univerisity of Technology',
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
              degree: 'Diploma',
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
                (such as tweets, blog posts, application logs, random data) groups them by similatiy of discussed topics.
              `,
              role: 'Frontend and Backend',
              places: [
                '1st in Data Categorizing Software',
              ],
            },
            {
              name: 'Białystok IT Test',
              date: '2017.11',
              description: `
                In the biggest IT-oriented test in the city students from all High Schools and Universities
                are challenged in 10 different categories, among which are programming languages, databases, data
                exploration and software engineering concepts.
              `,
              places: [
                '3rd in Overall Classification',
                '1st in Mobile Development',
                '1st in Object Oriented Programming',
                '1st in Web Development',
                '4th in Java Language Skills',
              ],
            },
            {
              name: 'Białystok IT Test',
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
                I crated an app that looks and behaves nicely, but
                is completely inaccessible to the visually imapired users.
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
              name: 'Erepublik game bot',
              href: 'https://github.com/Humberd/headless-k-worker',
              technologies: ['TypeScript', 'Node.js', 'Nest', 'MongoDB', 'Kotlin', 'Docker', 'Kubernetes', 'Azure DevOps'],
              description: 'Headless bot which automates periodic game tasks, a native Android app as a monitoring tool, and a backend server inbetween.',
            },
            {
              name: 'This Resume',
              href: 'https://github.com/Humberd/Resume',
              technologies: ['React', 'TypeScript'],
              description: 'This Resume has been generated from easily customizable web page.',
            },
            {
              name: 'Wykop++',
              href: 'https://github.com/Humberd/Wykop-plus-plus',
              technologies: ['RxJS', 'TypeScript'],
              description: 'Browser extension which puts additional functionalities on wykop.pl, such as: comments hiding, infinite scroll, etc.',
            },
            {
              name: 'MicroTwitter',
              href: 'https://github.com/Humberd/MicroTwitter',
              technologies: ['Angular', 'TypeScript', 'Spring', 'Kotlin', 'PostgreSQL', 'Docker', 'Jenkins'],
              description: 'A minimalistic Twitter clone with its core functionalities, such as: posting, commenting, liking, etc.',
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
