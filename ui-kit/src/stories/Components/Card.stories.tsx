import React from 'react';
import {
  Text,
  Button,
  Row,
  Column,
  Card,
  CardHeader,
  CardContent,
  CardImageContent,
  CardFooter,
  colors,
} from 'src';
import Icon from 'components/Icon';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Card',
} as Meta;

export const Default = () => {
  return (
    <div style={{ width: 240 }}>
      <Card>
        <CardHeader>제목</CardHeader>
        <CardContent>
          <Text
            style={{
              color: colors.gray70,
            }}
          >
            내용을 입력하세요.
            <br />
            내용을 입력하세요.
            <br />
            내용을 입력하세요.
            <br />
            내용을 입력하세요.
          </Text>
        </CardContent>
        <CardFooter>
          <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} role="button">
            <Text typography="caption" style={{ color: colors.gray60, marginRight: 5 }}>
              더보기
            </Text>
            <Icon name="arrow-forward" type="outline" color={colors.gray60} />
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export const ImageCard = () => {
  return (
    <Row style={{ width: 900 }}>
      <Column>
        <Card>
          <CardHeader>제목</CardHeader>
          <CardImageContent src="http://cogulmars.cafe24.com/img/04about_img01.png" alt="에비츄" />
          <CardFooter>
            <span
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              role="button"
            >
              <Text typography="caption" style={{ color: colors.gray60, marginRight: 5 }}>
                더보기
              </Text>
              <Icon name="arrow-forward" type="outline" color={colors.gray60} />
            </span>
          </CardFooter>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardHeader>춤추는 에비츄</CardHeader>
          <CardImageContent
            src="https://cdn.univ20.com/wp-content/uploads/2015/08/c4ca4238a0b923820dcc509a6f75849b.gif"
            alt="춤추는 에비츄"
          />
          <CardFooter justifyContent="flex-end">
            <Button size="small">더보기</Button>
          </CardFooter>
        </Card>
      </Column>
      <Column>
        <Card>
          <CardHeader>장보는 에비츄</CardHeader>
          <CardImageContent
            src="http://cogulmars.cafe24.com/img/04about_img04.png"
            alt="장보는 에비츄"
          />
        </Card>
      </Column>
    </Row>
  );
};
