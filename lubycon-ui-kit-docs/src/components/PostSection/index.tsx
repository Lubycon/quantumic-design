import { colors, Text } from '@lubycon/ui-kit';
import React, { PropsWithChildren, ReactNode } from 'react';

const Title = ({ children }: PropsWithChildren<unknown>) => (
  <Text as="h2" typography="h5" fontWeight="bold" css={{ marginBottom: 24 }}>
    {children}
  </Text>
);

const Subtitle = ({ children }: PropsWithChildren<unknown>) => (
  <Text as="h3" typography="h6" fontWeight="bold" css={{ marginBottom: 8 }}>
    {children}
  </Text>
);

const Contents = ({ children }: PropsWithChildren<unknown>) => (
  <Text as="p" css={{ color: colors.gray80, marginBottom: 16 }}>
    {children}
  </Text>
);

interface Props {
  title: ReactNode;
}
const PostSection = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <section css={{ marginBottom: 72 }}>
      <div css={{ marginBottom: 24, display: 'block' }}>{title}</div>
      <div>{children}</div>
    </section>
  );
};

PostSection.Title = Title;
PostSection.Subtitle = Subtitle;
PostSection.Contents = Contents;

export default PostSection;
