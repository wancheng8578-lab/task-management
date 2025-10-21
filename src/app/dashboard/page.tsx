'use client';

import { PieChart, Text, TaskManagementList, CardContainer } from '@/component';
import { CONSTANTS } from '@/commons';
import { useTheme } from '@/contexts';

const Component = () => {
  const theme = useTheme();

  const grouped = Object.groupBy(
    CONSTANTS.TASK_MANAGEMENT_LIST,
    (task) => task.status,
  );

  const statusList = Object.entries(grouped).map(([label, group]) => {
    return {
      label,
      value: group?.length || 0,
    };
  });

  return (
    <div className={``}>
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-5`}>
        <CardContainer>
          <div className={`flex flex-col gap-4`}>
            <Text>{`Total Task`}</Text>
            <Text>{statusList.length}</Text>
          </div>
        </CardContainer>
        {statusList.map((item, index) => {
          return (
            <CardContainer key={index}>
              <div className={`flex flex-col gap-4`}>
                <Text>{item.label}</Text>
                <Text>{item.value}</Text>
              </div>
            </CardContainer>
          );
        })}
      </div>
      <div
        className={`mt-4 rounded-lg border-transparent bg-white px-2 py-4 shadow`}
      >
        <PieChart chartData={statusList}></PieChart>
      </div>
      <TaskManagementList />
    </div>
  );
};

export default Component;
