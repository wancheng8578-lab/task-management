'use client';

import { useTheme } from '@/contexts';
import { forwardRef, ReactNode } from 'react';
import { CSSProperties } from '@mui/material/styles';

type Text = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

const Component = forwardRef<HTMLSpanElement, Text>(
  ({ className, style, children }, ref) => {
    const theme = useTheme();
    return (
      <span
        className={className}
        ref={ref}
        style={{ color: theme.colors.text, ...style }}
      >
        {children}
      </span>
    );
  },
);

Component.displayName = `Text`;

export { Component };
