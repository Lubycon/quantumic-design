import React from 'react';
import { Accordion } from 'src';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Accordion',
} as Meta;

export const Default = () => {
  return (
    <>
      <Accordion
        label="👀 텍스트가 숨겨져 있어요"
        onChange={(v) => console.log(`onChange: ${v}`)}
        onOpen={() => console.log('handleOpen')}
        onClose={() => console.log('handleClose')}
      >
        아코디언이 펼쳐지면 아래에 내용이 나옵니다.
        <br />
        아코디언이 펼쳐지면 아래에 내용이 나옵니다.
        <br />
        아코디언이 펼쳐지면 아래에 내용이 나옵니다.
        <br />
      </Accordion>
      <Accordion label="🔥 이미지가 숨겨져 있어요">
        <img
          src="http://cogulmars.cafe24.com/img/04about_img01.png"
          alt="귀여운 에비츄"
          width="300"
        />
      </Accordion>
      <Accordion label="제목을 입력하세요">
        아코디언이 펼쳐지면 아래에 내용이 나옵니다.
        <br />
        아코디언이 펼쳐지면 아래에 내용이 나옵니다.
        <br />
        아코디언이 펼쳐지면 아래에 내용이 나옵니다.
        <br />
      </Accordion>
    </>
  );
};
