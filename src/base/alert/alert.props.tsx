import React from 'react';

export interface AlertProps extends React.ComponentProps<'div'> {
  // ... alert props
  variant?: 'success' | 'error' | 'warning' | 'info';
}

export type AlertComponent = React.FunctionComponent<AlertProps>;
