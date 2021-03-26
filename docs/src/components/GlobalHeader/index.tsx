import React from 'react';
import { Row, Column } from '@lubycon/ui-kit';
import Link from 'next/link';

const GlobalHeader = () => {
  return (
    <nav
      css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding: '12px 0',
      }}
    >
      <Row css={{ width: '100%', maxWidth: 1200 }}>
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
    </nav>
  );
};

export default GlobalHeader;
