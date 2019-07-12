import * as React from 'react';

import Layout from '../components/layout';

import './index.scss';
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
          position: 'Frontend Engineer',
          company: 'Acaisoft',
          projects: [
            {
              name: 'VR Portal',
              technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'],
              description: 'VR streaming content management portal with an embedded VR player.'
            }
          ]
        },
        {
          date: {
            from: '2016.07',
            to: '2017.03'
          },
          position: 'Frontend Developer',
          company: 'Transition Technologies',
          projects: [
          ]
        }
      ]}
      />
    </Segment>
);

export default IndexPage;
