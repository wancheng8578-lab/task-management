'use client';

import { useTheme } from '@/contexts';
import { ReactNode } from 'react';

type AppBackground = {
  children: ReactNode;
};

const Component = ({ children }: AppBackground) => {
  const theme = useTheme();

  return (
    <div
      className={`m-auto flex h-screen max-w-[126rem] flex-col`}
      style={{
        background: theme.colors.background,
      }}
    >
      <>{children}</>
    </div>
  );
};

Component.displayName = `AppBackground`;

export { Component };
