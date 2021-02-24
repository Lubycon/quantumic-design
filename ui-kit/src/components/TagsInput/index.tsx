import React, { useEffect, useState, KeyboardEvent, useCallback, ReactText, useRef } from 'react';
import classnames from 'classnames';
import { colors, SemanticColor } from 'constants/colors';
import { closeCircle } from 'ionicons/icons';
import Icon from '../Icon';
import Input from '../Input';
import Tag, { TagType } from '../Tag';

const tagTypes: Array<SemanticColor | 'default'> = [
  'default',
  'informative',
  'positive',
  'negative',
  'notice',
];

interface Label {
  label: string;
  type: TagType;
}

interface Props {
  defaultValue?: Label[];
  hasDeleteButton?: boolean;
  onChange?: (labels: Label[]) => void;
}

const hasLabel = (labels: Label[], targetLabel: string) =>
  labels.find(({ label }) => label === targetLabel) != null;

const TagsInput = ({ defaultValue, hasDeleteButton, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [key, setKey] = useState(0);
  const [draftLabel, setDraftLabel] = useState('');
  const [labels, setLabels] = useState(defaultValue ?? []);

  const hasTags = labels.length > 0;
  const isExistDraftLabel = draftLabel.length > 0;

  const handleKeydown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && isExistDraftLabel && !hasLabel(labels, draftLabel)) {
        setLabels((labels) => [
          ...labels,
          {
            label: draftLabel,
            type: tagTypes[key % tagTypes.length],
          },
        ]);
        setDraftLabel('');
        setKey((value) => value + 1);
      } else if (e.key === 'Backspace' && isExistDraftLabel === false) {
        setLabels((labels) => labels.slice(0, labels.length - 1));
      }
    },
    [draftLabel]
  );

  const handleDeleteTag = useCallback((deletedLabel: ReactText) => {
    setLabels((labels) => labels.filter(({ label }) => label !== deletedLabel));
  }, []);

  const handleAllDeleteButtonClick = useCallback(() => {
    setLabels([]);
  }, []);

  useEffect(() => {
    onChange?.(labels);
  }, [labels]);

  useEffect(() => {
    /**
     * @NOTE 2바이트 전각문자 입력 버그 때문에 keydown 이벤트 핸들러가 2번 호출되는 버그가 있음
     * "하이"를 입력하고 엔터를 치면 핸들러가 2번 호출되며 "하이"와 문장의 마지막 글자인 "이"가 인자로 들어옴
     * 그래서 key를 강제로 증가시키며 Forced Rerendering을 유도하고 다시 인풋에 포커싱을 잡아줌
     */
    inputRef.current?.focus();
  }, [key]);

  return (
    <div className="lubycon-tags-input">
      <Input
        ref={inputRef}
        key={key}
        left={
          <>
            {labels.map(({ label, type }, index) => (
              <Tag
                key={index}
                className="lubycon-tags-input__tag"
                onDelete={hasDeleteButton ? handleDeleteTag : undefined}
                type={type}
              >
                {label}
              </Tag>
            ))}
          </>
        }
        className={classnames('lubycon-tags-input__input', 'lubycon-input--focused', {
          'lubycon-tags-input__input--have-labels': labels.length > 0,
        })}
        right={
          hasTags ? (
            <a
              className="lubycon-tags-input__all-delete-button"
              onClick={handleAllDeleteButtonClick}
            >
              <Icon icon={closeCircle} type="filled" color={colors.gray50} size={22} />
            </a>
          ) : null
        }
        onChange={(e) => setDraftLabel(e.target.value)}
        value={draftLabel}
        onKeyDown={handleKeydown}
      />
    </div>
  );
};

export default TagsInput;
