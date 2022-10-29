import React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  // ... button props
}

export type ButtonComponent = React.FunctionComponent<ButtonProps>;
