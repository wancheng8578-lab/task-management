/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { type ClassValue, clsx } from 'clsx';
import dayjs, { ConfigType } from 'dayjs';
import { twMerge } from 'tailwind-merge';

export const stringify = (object: any) => {
  return JSON.stringify(object);
};

export const convertObjectToUrlParameters = (obj: object) => {
  const str = [];

  for (const key in obj) {
    if (Array.isArray(obj[key as keyof typeof obj])) {
      (obj[key as keyof typeof obj] as string[]).forEach((item) => {
        str.push(`${key}[]=${item}`);
      });
    } else if (Object.prototype.hasOwnProperty.call(obj, key)) {
      str.push(
        encodeURIComponent(key) +
          `=` +
          encodeURIComponent(obj[key as keyof typeof obj]),
      );
    }
  }

  return str.join(`&`);
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const convert = (dateParam: ConfigType, fromFormat?: string) => {
  let dateString = dateParam;

  if (typeof dateString === `string`) {
    dateString = dateString.replace(/-/g, `/`);
  }

  const date = dayjs(dateString, fromFormat);

  return date;
};

export const format = (
  dateParam: ConfigType,
  toFormat = `YYYY MMM DD hh:mm:ss`,
  fromFormat?: string,
) => {
  const date = convert(dateParam, fromFormat);
  return date.format(toFormat);
};

export const isEmpty = (value: any, isAllowZeroNumber?: boolean) => {
  if (
    `${value}`.trim() === `` ||
    value === null ||
    value === undefined ||
    (!isAllowZeroNumber && (value === 0 || value === `0`)) ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === `object` &&
      Object.entries(value).length === 0 &&
      value.constructor === Object)
  ) {
    return true;
  }

  return false;
};
