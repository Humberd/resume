import * as React from 'react';

import Layout from '../components/layout';

import './index.scss';
import { Header } from '../components/header';
import { Segment } from '../components/segments/segment';

const IndexPage = () => (
    <Layout>
      <Header/>

      <div className="columns">
        <div className="column">
          <Segment header={{
            icon: 'person.svg',
            title: 'Personal Info'
          }}>
            hello
          </Segment>
        </div>
        <div className="column">
          hello
        </div>
      </div>
    </Layout>
);

export default IndexPage;
