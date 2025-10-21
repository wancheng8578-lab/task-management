'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts';
import { Text } from '@/component';

type SubItems = {
  href: string;
  title: string;
  image_unfocused?: string;
  image_focused?: string;
};

type Childrens = {
  href: string;
  title: string;
  image_unfocused?: string;
  image_focused?: string;
};

type Feature = {
  href: string;
  title: string;
  image_unfocused: string;
  image_focused: string;
  subItems: SubItems[];
  childrens: Childrens[];
};

const ACCESS = [
  {
    href: `/dashboard`,
    title: `Home`,
    image_focused: ``,
    image_unfocused: ``,
    subItems: [],
    childrens: [],
  },
  {
    href: `/api-listing`,
    title: `Api`,
    image_focused: ``,
    image_unfocused: ``,
    subItems: [],
    childrens: [],
  },
] as Feature[];

// const getAccessList = (type: string) => {
//   return ACCESS[type as keyof typeof ACCESS];
// };

const Component = memo(() => {
  const pathname = usePathname();
  const theme = useTheme();

  // const list: Feature[] = getAccessList(user?.type ?? ``) || [];
  const sideBarItems: Feature[] = ACCESS;

  const selectedSideBarItem = ACCESS.find(({ href, subItems, childrens }) => {
    return (
      href === pathname ||
      subItems.find(({ href: href1 }) => {
        return href1 === pathname;
      }) ||
      childrens.find(({ href: href2 }) => {
        return href2 === pathname;
      })
    );
  });

  if (!selectedSideBarItem) {
    return null;
  }

  type SideBarItem = {
    isFocused: boolean;
    title: string;
    image_unfocused?: string;
    image_focused?: string;
  };

  const renderItemComponent = ({ isFocused, title }: SideBarItem) => {
    return (
      <div key={title} className={`cursor-pointer rounded-xl p-2`}>
        <div
          className='flex items-center rounded-md p-2'
          style={{
            ...(isFocused && {
              backgroundColor: theme.colors.background,
            }),
          }}
        >
          <span className={`select-none`}>{title}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`no-scrollbar flex h-[4rem] w-[100vw] items-center justify-between px-4 shadow`}
      style={{
        backgroundColor: theme.colors.onBackground,
      }}
    >
      <div className={`flex items-center gap-2`}>
        <Text className={`font-bold`} style={{ color: theme.colors.primary }}>
          {`Hi`}
        </Text>
      </div>
      <div className={`flex`}>
        {sideBarItems.map(({ href, title, image_unfocused, image_focused }) => {
          const isFocused = pathname === href;

          return (
            <Link key={title} className={``} href={href} onClick={() => {}}>
              {renderItemComponent({
                isFocused,
                title,
                image_unfocused,
                image_focused,
              })}
            </Link>
          );
        })}
      </div>
    </div>
  );
});

Component.displayName = `SideBar`;

export { Component };
