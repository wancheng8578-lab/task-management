'use client';

import { Card, CardContent } from '@mui/material';
import { ReactNode } from 'react';
import { CSSProperties } from '@mui/material/styles';

type Calendar = {
  style?: CSSProperties;
  children: ReactNode;
};

const Component = ({ style, children }: Calendar) => {
  return (
    <Card sx={{ ...style }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export { Component };
