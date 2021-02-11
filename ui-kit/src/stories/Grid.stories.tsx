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
      <Column key={column} style={columnStyle} xs={1}>
        <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
          Column{column}
        </Text>
      </Column>
    ))}
  </Row>
);

export const Stretched = () => (
  <Row style={{ maxWidth: 1200 }}>
    {columns
      .filter((v) => v % 2 === 0)
      .map((column) => (
        <Column key={column} style={columnStyle}>
          <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
            Column{column}
          </Text>
        </Column>
      ))}
  </Row>
);

export const Direction = () => (
  <Row style={{ maxWidth: 1200 }} direction="column">
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
      <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
        lg=8 md=4, xs=2
      </Text>
    </Column>
    <Column style={columnStyle}>
      <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
        auto
      </Text>
    </Column>
    <Column lg={1} md={5} xs={8} style={columnStyle}>
      <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
        lg=1, md=5, xs=8
      </Text>
    </Column>
  </Row>
);

export const VariableWidth = () => (
  <Row style={{ maxWidth: 1200 }}>
    <Column lg="auto" style={{ ...columnStyle, width: 40 }}>
      <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
        width: 40px
      </Text>
    </Column>
    <Column style={columnStyle}>
      <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
        Column
      </Text>
    </Column>
    <Column style={columnStyle}>
      <Text style={{ width: '100%', textAlign: 'center', backgroundColor: colors.blue60 }}>
        Column
      </Text>
    </Column>
  </Row>
);
