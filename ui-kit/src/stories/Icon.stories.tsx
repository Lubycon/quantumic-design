import React from 'react';
import { Icon, Text } from 'src';
import { IconType } from 'src/components/Icon';
import { Meta } from '@storybook/react/types-6-0';
import { ColorProperty, colors } from 'src/constants/colors';
import { Fragment } from 'react';

export default {
  title: 'Lubycon UI Kit/Icon',
  component: Icon,
} as Meta;

const Spacer = () => {
  return <div style={{ height: 20 }} />;
};

const icons = ['code', 'accessibility', 'alarm', 'airplane'];
export const Default = () => {
  return (
    <div>
      <Text>
        아이콘 이름은
        <a href="https://github.com/Lubycon/lubycon-icons" target="_blank" rel="noreferrer">
          https://github.com/Lubycon/lubycon-icons
        </a>
        를 참고하세요.
      </Text>
      <br />
      <div>
        {icons.map((icon) => (
          <Fragment key={icon}>
            <Icon name={icon} size={30} />
            <Spacer />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const colorKeys = Object.keys(colors);
export const Color = () => {
  return (
    <>
      {colorKeys.map((key) => {
        const colorKey = key as ColorProperty;
        return (
          <Fragment key={colorKey}>
            <div style={{ display: 'flex' }}>
              <Icon name="apps" size={30} color={colors[colorKey]} />
              <Icon name="apps" size={30} color={colors[colorKey]} type="outline" />
              <Icon name="apps" size={30} color={colors[colorKey]} type="sharp" />
            </div>
            <Spacer />
          </Fragment>
        );
      })}
    </>
  );
};

const types: IconType[] = ['filled', 'outline', 'sharp'];

export const Types = () => {
  return (
    <>
      {types.map((type) => (
        <Fragment key={type}>
          <Text>{type}</Text>
          <br />
          <Icon name="accessibility" size={50} color={colors.blue50} type={type} />
          <Spacer />
        </Fragment>
      ))}
    </>
  );
};
