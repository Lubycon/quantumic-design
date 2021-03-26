import GlobalHeader from 'components/GlobalHeader';
import GlobalSidebar from 'components/GlobalSidebar';
import React, { PropsWithChildren } from 'react';

const BasicLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <GlobalHeader />
      <GlobalSidebar />
      <main>{children}</main>
    </>
  );
};

export default BasicLayout;
