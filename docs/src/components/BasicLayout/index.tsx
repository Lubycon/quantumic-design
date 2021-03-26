import { Row, Column, Container } from '@lubycon/ui-kit';
import GlobalHeader from 'components/GlobalHeader';
import GlobalSidebar from 'components/GlobalSidebar';
import React, { PropsWithChildren, useState, useEffect, useRef } from 'react';

const BasicLayout = ({ children }: PropsWithChildren<unknown>) => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const contentsHeight = `calc(100vh - ${headerHeight}px)`;

  useEffect(() => {
    if (headerRef.current != null) {
      const rect = headerRef.current.getBoundingClientRect();
      setHeaderHeight(rect.height);
    }
  }, [headerRef.current]);

  return (
    <div>
      <header
        ref={headerRef}
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
        }}
      >
        <GlobalHeader />
      </header>
      <div
        css={{
          paddingTop: headerHeight,
        }}
      >
        <Container>
          <Row>
            <Column
              as="aside"
              xs="auto"
              css={{
                width: 375,
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
                overflowY: 'scroll',
                height: '100%',
              }}
            >
              <GlobalSidebar />
            </Column>
            <Column
              css={{
                overflowY: 'scroll',
              }}
            >
              {children}
            </Column>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BasicLayout;
