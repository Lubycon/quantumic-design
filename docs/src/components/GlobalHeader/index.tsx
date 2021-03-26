import React from 'react';
import { Row, Column, Container, colors } from '@lubycon/ui-kit';
import Link from 'next/link';

const GlobalHeader = () => {
  return (
    <nav
      css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding: '12px 0',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <Row css={{ width: '100%' }}>
          <Column>
            <Link href="/">
              <a>
                <img
                  css={{ width: 100 }}
                  src="https://d2x9jxyr47nlkc.cloudfront.net/logo/logo-color.svg"
                />
              </a>
            </Link>
          </Column>
        </Row>
      </Container>
    </nav>
  );
};

export default GlobalHeader;
