import * as React from 'react';

import Layout from '../components/layout';

import './index.scss';
import '../fonts/style.css';
import { Header } from '../components/header';
import { Segment } from '../components/segments/segment';
import { PersonalInfo } from '../components/segments/personal-info';
import { WorkHistory } from '../components/segments/work-history';

const IndexPage = () => (
    <Layout>
      <Header/>

      <div className="columns">
        <div className="column">
          <PersonalInfoSegment/>
        </div>
        <div className="column">
          <WorkHistorySegment/>
        </div>
      </div>
    </Layout>
);

const PersonalInfoSegment = () => (
    <Segment header={{
      icon: 'person.svg',
      title: 'Personal Info'
    }}>
      <PersonalInfo info={[
        {
          title: 'Address',
          value: 'Białystok, Poland'
        },
        {
          title: 'Phone',
          value: '+48 507 847 934'
        },
        {
          title: 'Email',
          value: 'humberd2@gmail.com',
          href: 'mailto:humberd2@gmail.com'
        },
        {
          title: 'GitHub',
          value: 'github.com/Humberd',
          href: 'https://github.com/Humberd'
        },
        {
          title: 'LinkedIn',
          value: 'linkedin.com/in/maciej-sawicki',
          href: 'https://www.linkedin.com/in/maciej-sawicki'
        }
      ]}/>
    </Segment>
);


const WorkHistorySegment = () => (
    <Segment header={{
      icon: 'work.svg',
      title: 'Work History'
    }}>
      <WorkHistory history={[
        {
          date: {
            from: '2017.04',
            to: 'Current'
          },
          position: 'Fullstack Engineer',
          company: 'Acaisoft',
          projects: [
            {
              name: 'User management portal',
              technologies: ['Angular', 'TypeScript', 'Karma', 'Jasmine', 'Spring', 'Java', 'Cassandra', 'Kafka', 'Docker'],
              position: 'Frontend and Backend',
              description: 'A portal to group, monitor and manage access to data backup portals.'
            },
            {
              name: 'Data backup portal',
              technologies: ['Angular', 'TypeScript'],
              position: 'Frontend',
              description: 'Data deduplication and replication platform that also allows to remotely monitor and configure a physical server.'
            },
            {
              name: 'Car sharing platform',
              technologies: ['React Native, Redux, Jest, Cucumber, JavaScript, Java, Kotlin'],
              position: 'Mobile app',
              description: 'Platform for managing car sharing fleet workers with real-time info and job batching.'
            },
            {
              name: 'VR Portal',
              technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'],
              position: 'Frontend and Backend',
              description: 'VR streaming content management portal with an embedded VR player.'
            }
          ]
        },
        {
          date: {
            from: '2016.08',
            to: '2017.03'
          },
          position: 'Frontend Developer',
          company: 'Transition Technologies',
          projects: [
            {
              name: 'Social meetings app',
              technologies: ['Angular', 'TypeScript'],
              position: 'Frontend',
              description: 'A Chrome extension that arranges meetings between people with problems and people who can solve them.'
            }
          ]
        },
        {
          date: {
            from: '2016.06',
            to: '2016.08'
          },
          position: 'Frontend Intern',
          company: 'Transition Technologies',
          projects: [
            {
              name: 'Skills management portal',
              technologies: ['AngularJS', 'JavaScript', 'Meteor'],
              position: 'Frontend and Backend',
              description: 'A web application that manages user skills and finds the best people for a given problem.'
            }
          ]
        }
      ]}
      />
    </Segment>
);

export default IndexPage;
