import { useMemo } from 'react';
import { utils } from '@/lib';

const defaultHeaders = {
  Accept: `application/json`,
};

const newAbortSignal = (timeoutMs: number) => {
  const abortController = new AbortController();
  setTimeout(() => {
    return abortController.abort();
  }, timeoutMs || 0);

  return abortController.signal;
};

export const get = async <T>({ url = ``, body = {}, headers = {} }) => {
  return new Promise<{
    status: number;
    data: T;
  }>((resolve, reject) => {
    setTimeout(async () => {
      try {
        const result = await fetch(
          `${url}?${utils.convertObjectToUrlParameters(body)}`,
          {
            method: `GET`,
            headers: {
              ...defaultHeaders,
              'Content-Type': `application/json`,
              ...headers,
            },
            signal: newAbortSignal(60 * 1000),
          },
        );

        const resultJson = await result.json();
        const responseCode = result.status;

        if (responseCode === 200) {
          resolve({
            status: responseCode,
            data: resultJson,
          });
        } else {
          reject({
            status: responseCode,
            title: `Oops...`,
            data: resultJson,
          });
        }
      } catch (error) {
        const status = 999;

        reject({
          status,
          title: `Oops...`,
          response: { message: error },
        });
      }
    }, 1000);
  }).finally(() => {});
};

export const post = async <T>({
  url = ``,
  body,
  headers = {},
  shouldStringify = true,
}: {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  headers: object;
  shouldStringify?: boolean;
}) => {
  return new Promise<{
    status: number;
    data: T;
    message: string;
    current_date_time: string;
  }>((resolve, reject) => {
    setTimeout(async () => {
      try {
        const result = await fetch(`${url}`, {
          method: `POST`,
          headers: {
            ...defaultHeaders,
            ...(shouldStringify && { 'Content-Type': `application/json` }),
            ...headers,
          },
          body: shouldStringify ? JSON.stringify(body) : body,
          signal: newAbortSignal(60 * 1000),
        });

        const resultJson = await result.json();
        const responseCode = result.status;

        const { current_date_time, data, message } = resultJson;

        if (responseCode === 200) {
          resolve({ status: responseCode, data, message, current_date_time });
        } else {
          reject({
            status: responseCode,
            title: `Oops...`,
            message,
            data,
          });
        }
      } catch (error) {
        const status = 999;

        reject({
          status,
          title: `Oops...`,
          response: { message: error },
        });
      }
    }, 1000);
  }).finally(() => {});
};

const useHttpRequest = () => {
  const HTTPRequest = useMemo(() => {
    return {
      get,
      post,
    };
  }, []);

  return HTTPRequest;
};

export { useHttpRequest };
