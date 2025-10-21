'use client';

import { ThemeProvider } from '@/contexts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HighOrderComponent } from '@/types';
import { useMemo, useState } from 'react';

const ContextProviders = ({ children }: HighOrderComponent) => {
  const [queryClient] = useState(() => new QueryClient());

  const value = useMemo(() => {
    return (
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    );
  }, [children, queryClient]);

  return value;
};

export { ContextProviders };
