import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Table, TableHead, TableBody, TableRow, TableCell } from 'src';

export default {
  title: 'Lubycon UI Kit/Table',
} as Meta;

const header = ['제목', '제목', '제목', '제목', '제목'];
const contents = ['내용', '내용을 입력하세요', '내용', '내용을 입력하세요', '내용'];
const iterator = [undefined, undefined, undefined, undefined, undefined, undefined];

export const Default = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {header.map((name, i) => (
            <TableCell key={`th-${i}`}>{name}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {iterator.map((v, rowIdx) => (
          <TableRow key={`tbody-row-${rowIdx}`}>
            {contents.map((content, contentIdx) => (
              <TableCell key={`td-${contentIdx}`}>{content}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
