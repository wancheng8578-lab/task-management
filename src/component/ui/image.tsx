'use client';

import { utils } from '@/lib';
import NextImage from 'next/image';
import { CSSProperties, Ref, forwardRef } from 'react';

type Image = {
  className?: string;
  style?: CSSProperties;
  alt: string;
  source: string;
};

const Component = forwardRef(
  ({ className, style, alt, source }: Image, ref: Ref<HTMLImageElement>) => {
    if (utils.isEmpty(source)) {
      return <div className={className}></div>;
    }

    return (
      <NextImage
        ref={ref}
        className={utils.cn(
          `w-full select-none object-contain`,
          source === `` && `invisible`,
          className,
        )}
        style={style}
        alt={alt}
        src={source}
        unoptimized
        priority={true}
        width={0}
        height={0}
      />
    );
  },
);

Component.displayName = `Image`;

export { Component };
