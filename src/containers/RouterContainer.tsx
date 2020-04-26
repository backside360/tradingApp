import React, { useState } from 'react';
import { useInjection } from '../services/Injection';

interface IProps<IParams> {
  path: string;
  render: (params: IParams) => React.ReactNode;
}

function compareTemplate<IParams>(
  template: string,
  path: string
): [boolean, IParams] {
  const params: any = {};
  const splittedTemplate = template.split('/');
  const splittedPath = path.split('/');
  let result: boolean = true;

  splittedTemplate.forEach((elem, i) => {
    if (elem[0] !== ':' && elem !== splittedPath[i]) {
      result = false;
      return;
    }
    if (elem[0] === ':') {
      const isQuestionSymbol = elem[elem.length - 1] === '?';
      params[elem.slice(1, isQuestionSymbol ? elem.length - 1 : undefined)] =
        splittedPath[i];
      return;
    }
  });

  return [result, params];
}

export function RouterContainer<IParams = any>({
  path,
  render,
}: IProps<IParams>): React.ReactElement | null {
  const { router } = useInjection();
  const [history, setHistory] = useState(router.getState());

  React.useEffect(
    () => router.subscribe(() => setHistory(router.getState())),
    []
  );

  const [isRoutesMatched, params] = compareTemplate<IParams>(
    path,
    history.path
  );

  return isRoutesMatched ? <>{render(params)}</> : null;
}
