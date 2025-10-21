import type { Metadata } from 'next';
import './globals.css';
import { ContextProviders } from '@/contexts';
import { AppBackground, SideBar } from '@/component';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: `Task Management`,
  description: `My Task Management`,
};

const Component = ({ children }: { children: ReactNode }) => {
  return (
    <ContextProviders>
      <html lang='en'>
        <body>
          <AppBackground>
            <SideBar />
            <main
              className={`no-scrollbar h-[100vh] w-full overflow-y-scroll p-10`}
            >
              {children}
            </main>
          </AppBackground>
        </body>
      </html>
    </ContextProviders>
  );
};

export default Component;
