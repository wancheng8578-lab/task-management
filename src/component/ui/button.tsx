'use client';

import { forwardRef, ReactNode } from 'react';
import { Button } from '@mui/material';
import { CSSProperties } from '@mui/material/styles';

type Button = {
  className?: string;
  variant?: `text` | `contained` | `outlined`;
  children: ReactNode;
  type?: `button` | `submit`;
  onClick?: () => void;
  style?: CSSProperties;
  isDisabled?: boolean;
  color?:
    | `inherit`
    | `primary`
    | `secondary`
    | `success`
    | `error`
    | `info`
    | `warning`;
};

const Component = forwardRef<HTMLButtonElement, Button>(
  (
    {
      variant = `outlined`,
      children,
      onClick,
      type = `button`,
      color = `primary`,
      className,
      style,
    }: Button,
    ref,
  ) => {
    return (
      <Button
        sx={style}
        className={className}
        ref={ref}
        type={type}
        variant={variant}
        color={color}
        onClick={onClick}
      >
        <>{children}</>
      </Button>
    );
  },
);

Component.displayName = `Button`;

export { Component };
