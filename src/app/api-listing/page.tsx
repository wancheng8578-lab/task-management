'use client';

import { useState } from 'react';
import { TextBox, Table, Text } from '@/component';
import { useListing } from '@/endpoints';

const Component = () => {
  const [username, setUsername] = useState(``);
  const testing = useListing({ id: username, enabled: true });

  return (
    <div className={``}>
      <TextBox
        value={username}
        label={`Filter Id`}
        onChangeValue={setUsername}
      ></TextBox>
      <Table
        className={`mt-4`}
        headers={[
          [
            {
              children: `Id`,
              className: `px-4 pt-3`,
            },
            {
              children: `Status`,
              className: `px-4 pt-3`,
            },
          ],
        ]}
        content={(testing.data?.data.list || []).map((item) => {
          return [
            {
              children: <Text>{item.id}</Text>,
              className: `px-4 pt-3`,
            },
            {
              children: <Text>{item.name}</Text>,
              className: `px-4 pt-3`,
            },
          ];
        })}
      />
    </div>
  );
};

export default Component;
