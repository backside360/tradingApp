import React from 'react';

type IProps = {
  component: React.ElementType;
  fallback?: string;
  [rest: string]: any;
};

export function AsyncComponent({
  component: Component,
  fallback = 'Loading...',
  ...props
}: IProps): React.ReactElement {
  return (
    <React.Suspense fallback={fallback}>
      <Component {...props} />
    </React.Suspense>
  );
}
