import { useHttpRequest, useReactQuery, MOCK } from '@/endpoints';

const useListing = ({ enabled = false, id = `` }) => {
  const httpRequest = useHttpRequest();

  return useReactQuery().useQuery(
    [`TESTING`, id],
    async () => {
      try {
        const body = id ? { id } : {};

        const result: typeof MOCK.phone = await httpRequest.get({
          url: `https://api.restful-api.dev/objects`,
          body: body,
          headers: {},
        });

        return {
          status: result.status,
          data: {
            list: result.data.map((item) => {
              return {
                id: item.id,
                name: item.name,
              };
            }),
          },
        };
      } catch (error) {
        throw error;
      }
    },
    { enabled },
  );
};

export { useListing };
