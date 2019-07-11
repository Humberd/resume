import React from 'react';

import Layout from '../components/layout';

import './index.scss';
import {Header} from '../components/header';
import {Segment} from '../components/segment';

const IndexPage = () => (
    <Layout>
      <Header/>

      <div className="columns">
        <div className="column">
          <Segment></Segment>
        </div>
        <div className="column">
          hello
        </div>
      </div>
    </Layout>
);

export default IndexPage;
