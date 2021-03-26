import { Row, Column, Container } from '@lubycon/ui-kit';
import GlobalHeader from 'components/GlobalHeader';
import GlobalSidebar from 'components/GlobalSidebar';
import React, { PropsWithChildren } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const BasicLayout = ({ children }: PropsWithChildren<unknown>) => {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

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
              }}
            >
              <GlobalSidebar />
            </Column>
            <Column>{children}</Column>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BasicLayout;
