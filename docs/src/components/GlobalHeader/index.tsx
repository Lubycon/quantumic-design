import React from 'react';
import { useRouter } from 'next/router';

const GlobalHeader = () => {
  const router = useRouter();
  const handleLogoClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <nav
      css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          display: 'flex',
          width: 1200,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 0',
        }}
      >
        <a href="/" onClick={handleLogoClick}>
          <img
            css={{ width: 100 }}
            src="https://d2x9jxyr47nlkc.cloudfront.net/logo/logo-color.svg"
          />
        </a>
      </div>
    </nav>
  );
};

export default GlobalHeader;
