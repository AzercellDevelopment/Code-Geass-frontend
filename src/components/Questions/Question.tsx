import React from 'react';

import { QuestionTitle } from './QuestionTItle';
import { TextQuestion } from './TextQuestion';

export enum QuestionType {
  checkbox,
  radio,
  text,
}

export type Question = {
  id: number;
  title: string;
  type: QuestionType;
  options?: string[];
  coefficient: number;
  penalty?: number;
};

type QuestionProps = Question & {
  order: number;
};

export const QuestionComponent: React.FC<QuestionProps> = ({
  title,
  order,
  penalty,
  coefficient,
  type,
  ...props
}) => {
  const [value, setValue] = React.useState<string | string[]>('');

  return (
    <div className="space-y-4">
      <QuestionTitle title={title} order={order} />
      <div>
        <div className="flex justify-end mb-4 space-x-4">
          {penalty && (
            <span>
              Penalty: <span className="text-primary">{penalty}</span>
            </span>
          )}
          <span>
            Coefficient: <span className="text-primary">{coefficient}</span>
          </span>
        </div>
        {type === QuestionType.text && (
          <TextQuestion value={value as string} onChange={setValue} />
        )}
      </div>
    </div>
  );
};
