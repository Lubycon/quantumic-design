import { colors, Text } from '@lubycon/ui-kit';
import React, { PropsWithChildren, ReactNode } from 'react';

const Title = ({ children }: PropsWithChildren<unknown>) => (
  <Text typography="h5" fontWeight="bold" css={{ marginBottom: 24, display: 'block' }}>
    {children}
  </Text>
);

const Contents = ({ children }: PropsWithChildren<unknown>) => (
  <Text typography="h6" css={{ color: colors.gray80 }}>
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
PostSection.Contents = Contents;

export default PostSection;
