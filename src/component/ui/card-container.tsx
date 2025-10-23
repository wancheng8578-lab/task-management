'use client';

import { Card, CardContent } from '@mui/material';
import { ReactNode } from 'react';
import { CSSProperties } from '@mui/material/styles';
import { useTheme } from '@/contexts';

type Calendar = {
  style?: CSSProperties;
  children: ReactNode;
  className?: string;
};

const Component = ({ style, children, className }: Calendar) => {
  const theme = useTheme();

  return (
    <Card
      className={className}
      sx={{ backgroundColor: theme.colors.containerBackground, ...style }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export { Component };
