'use client';

import { useState } from 'react';
import { TextBox, Table } from '@/component';
import { useListing } from '@/endpoints';

const Component = () => {
  const [username, setUsername] = useState(``);
  const testing = useListing({ id: username, enabled: true });

  return (
    <div className={``}>
      <TextBox value={username} onChangeValue={setUsername}></TextBox>
      <Table
        headers={[
          [
            {
              children: `Title`,
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
              children: item.id,
              className: `px-4 pt-3`,
            },
            {
              children: item.name,
              className: `px-4 pt-3`,
            },
          ];
        })}
      />
    </div>
  );
};

export default Component;
