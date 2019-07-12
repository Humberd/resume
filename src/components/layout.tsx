import * as React from 'react';

import './reset.scss';
import './layout.scss';

export const Layout = ({children}) => {
  return (
      <main className="content">
        {children}
      </main>
  );
};

