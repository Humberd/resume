import * as React from 'react';

import Layout from '../components/layout';

import './index.scss';
import { Header } from '../components/header';
import { Segment } from '../components/segments/segment';
import { PersonalInfo } from '../components/segments/personal-info';

const IndexPage = () => (
    <Layout>
      <Header/>

      <div className="columns">
        <div className="column">
          <Segment header={{
            icon: 'person.svg',
            title: 'Personal Info'
          }}>
            <PersonalInfo info={[
              {
                title: 'Address',
                value: 'Białystok'
              },
              {
                title: 'Phone',
                value: '+48 507 847 934'
              },
              {
                title: 'Email',
                value: 'humberd2@gmail.com'
              },
              {
                title: 'GitHub',
                value: 'github.com/Humberd',
                href: 'https://github.com/Humberd'
              }
            ]}/>
          </Segment>
        </div>
        <div className="column">
          hello
        </div>
      </div>
    </Layout>
);

export default IndexPage;
