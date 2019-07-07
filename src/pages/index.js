import React from 'react';

import Layout from '../components/layout';

import './index.scss';
import {Header} from '../components/header';

const IndexPage = () => (
    <Layout>
      <Header/>

      <div className="columns">
        <div className="column">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => (
              <div className="foobar">
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie
                niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
              </div>
          ))}
        </div>
        <div className="column">
          hello
        </div>
      </div>
    </Layout>
);

export default IndexPage;
