import React, { CSSProperties } from 'react';
import { Column, Row } from 'components/Grid';
import Text from 'components/Text';
import { Meta } from '@storybook/react/types-6-0';
import { colors } from 'src/constants/colors';

export default {
  title: 'Lubycon UI Kit/Grid',
  subcomponents: { Column, Row },
} as Meta;

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const columnStyle: CSSProperties = {
  border: `1px solid ${colors.blue50}`,
  backgroundColor: colors.blue40,
  height: 100,
  color: colors.gray10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Default = () => (
  <Row style={{ maxWidth: 1200 }}>
    {columns.map((column) => (
      <Column key={column} style={columnStyle}>
        <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
          Column{column}
        </Text>
      </Column>
    ))}
  </Row>
);

export const Responsive = () => (
  <Row style={{ maxWidth: 1200 }}>
    <Column lg={8} md={4} xs={2} style={columnStyle}>
      lg=8 md=4, xs=2
    </Column>
    <Column style={columnStyle}>auto</Column>
    <Column lg={1} md={5} xs={8} style={columnStyle}>
      lg=1, md=5, xs=8
    </Column>
  </Row>
);

export const VariableWidth = () => (
  <Row style={{ maxWidth: 1200 }}>
    <Column lg="auto" style={{ ...columnStyle, width: 40 }}>
      width: 40px
    </Column>
    <Column style={columnStyle}>Column</Column>
    <Column style={columnStyle}>Column</Column>
  </Row>
);
