'use client';

import { CONSTANTS } from '@/commons';
import { Button, CalendarPicker, Dropdown, Modal, Table, TextBox } from '..';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  FilterAltOff as FilterAltOffIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { utils } from '@/lib';
import { NewTask } from '@/types';

const assigneeOptions = [
  { label: `Alice`, value: `Alice` },
  { label: `Bob`, value: `Bob` },
  { label: `Frank`, value: `Frank` },
  { label: `Noah`, value: `Noah` },
];

const statusOptions = [
  { label: `New`, value: `New` },
  { label: `In Progress`, value: `In Progress` },
  { label: `Reviewing`, value: `Reviewing` },
  { label: `Completed`, value: `Completed` },
];

export const urgencyOptions = [
  { label: `Low`, value: `Low` },
  { label: `Medium`, value: `Medium` },
  { label: `High`, value: `High` },
];

export const typeOptions = [
  { label: `Design`, value: `Design` },
  { label: `Content`, value: `Content` },
  { label: `Development`, value: `Development` },
  { label: `Legal`, value: `Legal` },
  { label: `Marketing`, value: `Marketing` },
  { label: `Reporting`, value: `Reporting` },
  { label: `IT`, value: `IT` },
  { label: `HR`, value: `HR` },
  { label: `Finance`, value: `Finance` },
  { label: `Customer Support`, value: `Customer Support` },
  { label: `Management`, value: `Management` },
];

const quickFilters = [
  {
    label: `Title`,
    value: `title`,
    list: [],
  },
  {
    label: `Status`,
    value: `status`,
    list: statusOptions,
  },
  {
    label: `Assignee`,
    value: `assignee`,
    list: assigneeOptions,
  },
  {
    label: `Urgency`,
    value: `object`,
    list: urgencyOptions,
  },
  {
    label: `Due Date`,
    value: `date`,
    list: [],
  },
];

const Component = () => {
  const [isModalCreateTaskVisible, setIsModalCreateTaskVisible] =
    useState(false);
  const [formMode, setFormMode] = useState({ label: ``, value: `` });
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [quickFilter, setQuickFilter] = useState({
    filterType: { label: ``, value: `` },
    filterValue: { label: ``, value: `` },
  });

  const FormViewMode = { label: `View Task`, value: `view` };
  const FormCreateMode = { label: `Create Task`, value: `create` };
  const FormEditMode = { label: `Edit Task`, value: `edit` };

  const [taskList, setTaskList] = useState<NewTask[]>(
    CONSTANTS.TASK_MANAGEMENT_LIST,
  );

  const itemSchema = z.object({
    label: z.string(),
    value: z.string().min(1, `Required`),
  });

  const taskSchema = z.object({
    title: z.string().min(1, `Required`),
    description: z.string().min(1, `Required`),
    status: itemSchema,
    type: itemSchema,
    dueDate: z.string().min(1, `Required`),
    assignee: itemSchema,
    urgency: itemSchema,
  });

  type TaskFormValues = z.infer<typeof taskSchema>;

  const currentTime = dayjs().format(`YYYY-MM-DD`);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: ``,
      description: ``,
      status: { label: ``, value: `` },
      type: { label: ``, value: `` },
      dueDate: currentTime,
      assignee: { label: ``, value: `` },
      urgency: { label: ``, value: `` },
    },
  });

  const onSubmit = (data: TaskFormValues) => {
    const newTasks = [...taskList];

    if (editIndex >= 0) {
      newTasks[editIndex] = {
        title: data.title,
        description: data.description || ``,
        status: data.status.value || ``,
        type: data.type.value || ``,
        dueDate: data.dueDate || ``,
        assignee: data.assignee.value || ``,
        urgency: data.urgency.value || ``,
      };
      setEditIndex(-1);
    } else {
      newTasks.push({
        title: data.title,
        description: data.description || ``,
        status: data.status.value || ``,
        type: data.type.value || ``,
        dueDate: data.dueDate || ``,
        assignee: data.assignee.value || ``,
        urgency: data.urgency.value || ``,
      });
    }

    setTaskList(newTasks);
    reset();

    setIsModalCreateTaskVisible(false);
  };

  const populateData = (item: NewTask) => {
    const objectFields = [`assignee`, `type`, `urgency`, `status`];

    Object.entries(item).forEach(([key, value]) => {
      if (objectFields.includes(key)) {
        setValue(key as keyof TaskFormValues, {
          label: ``,
          value,
        });
      } else {
        setValue(key as keyof TaskFormValues, value);
      }
    });
  };

  return (
    <>
      <div className='mt-4'>
        <div className={`mb-4 flex flex-wrap items-center justify-between`}>
          <div className={`my-2 flex flex-wrap items-center gap-2`}>
            <Dropdown
              style={{ minWidth: 200 }}
              list={quickFilters}
              label='Filter Type'
              value={quickFilter.filterType}
              onChangeValue={(item) => {
                setQuickFilter((prev) => {
                  return {
                    ...prev,
                    filterType: item,
                    filterValue: { label: ``, value: `` },
                  };
                });
              }}
            />
            {!utils.isEmpty(
              quickFilters.find((item) => {
                return item.value === quickFilter.filterType.value;
              })?.list,
            ) ? (
              <Dropdown
                style={{ minWidth: 200 }}
                list={
                  quickFilters.find((item) => {
                    return item.value === quickFilter.filterType.value;
                  })?.list || []
                }
                label='Filter Value'
                value={quickFilter.filterValue}
                onChangeValue={(item) => {
                  setQuickFilter((prev) => {
                    return {
                      ...prev,
                      filterValue: item,
                    };
                  });
                }}
              />
            ) : (
              <TextBox
                className={`min-w-[20rem]`}
                label='Filter Value'
                value={quickFilter.filterValue.value}
                onChangeValue={(value) => {
                  setQuickFilter((prev) => {
                    return {
                      ...prev,
                      filterValue: { label: ``, value },
                    };
                  });
                }}
              />
            )}
            {!utils.isEmpty(quickFilter.filterValue.value) && (
              <IconButton
                style={{ color: `red` }}
                onClick={() => {
                  setQuickFilter({
                    filterType: { label: ``, value: `` },
                    filterValue: { label: ``, value: `` },
                  });
                }}
              >
                <FilterAltOffIcon />
              </IconButton>
            )}
          </div>
          <Button
            variant={`contained`}
            onClick={() => {
              setFormMode(FormCreateMode);
              setIsModalCreateTaskVisible(true);
            }}
          >
            {`Create Task`}
          </Button>
        </div>
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
              {
                children: `Due Date`,
                className: `px-4 pt-3`,
              },
              {
                children: `Assignee`,
                className: `px-4 pt-3`,
              },
              {
                children: `Urgency`,
                className: `px-4 pt-3`,
              },
              {
                children: `Action`,
                className: `px-4 pt-3`,
              },
            ],
          ]}
          content={taskList
            .filter((task) => {
              if (utils.isEmpty(quickFilter.filterValue.value)) {
                return true;
              }
              const key = quickFilter.filterType.value as keyof TaskFormValues;

              return task[key] === quickFilter.filterValue.value;
            })
            .map((item, index) => {
              return [
                {
                  children: item.title,
                  className: `px-4 pt-3`,
                },
                {
                  children: item.status,
                  className: `px-4 pt-3`,
                },
                {
                  children: item.dueDate,
                  className: `px-4 pt-3`,
                },
                {
                  children: item.assignee,
                  className: `px-4 pt-3`,
                },
                {
                  children: item.urgency,
                  className: `px-4 pt-3`,
                },
                {
                  children: (
                    <div className={`flex`}>
                      <IconButton
                        onClick={() => {
                          populateData(item);

                          setFormMode(FormViewMode);
                          setIsModalCreateTaskVisible(true);
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          populateData(item);

                          setFormMode(FormEditMode);
                          setEditIndex(index);
                          setIsModalCreateTaskVisible(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        style={{ color: `red` }}
                        onClick={() => {
                          const newTasks = [...taskList];

                          newTasks.splice(index, 1);

                          setTaskList(newTasks);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ),
                  className: `px-4 pt-3`,
                },
              ];
            })}
        />
      </div>
      <Modal
        isVisible={isModalCreateTaskVisible}
        onClickClose={() => {
          reset();
          setIsModalCreateTaskVisible(false);
        }}
        title={formMode.label}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`grid grid-cols-1 gap-6 md:grid-cols-2`}>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextBox
                  label={`Title`}
                  value={field.value}
                  onChangeValue={field.onChange}
                  error={errors.title}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <TextBox
                  label={`Description`}
                  value={field.value || ``}
                  onChangeValue={field.onChange}
                  error={errors.description}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />
            <Controller
              name='status'
              control={control}
              render={({ field }) => (
                <Dropdown
                  list={statusOptions}
                  label='Status'
                  value={field.value}
                  onChangeValue={field.onChange}
                  error={errors.status?.value}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />
            <Controller
              name='type'
              control={control}
              render={({ field }) => (
                <Dropdown
                  list={typeOptions}
                  label='Type'
                  value={field.value}
                  onChangeValue={field.onChange}
                  error={errors.type?.value}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />

            <Controller
              name='assignee'
              control={control}
              render={({ field }) => (
                <Dropdown
                  list={assigneeOptions}
                  label='Assignee'
                  value={field.value}
                  onChangeValue={field.onChange}
                  error={errors.assignee?.value}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />
            <Controller
              name='urgency'
              control={control}
              render={({ field }) => (
                <Dropdown
                  list={urgencyOptions}
                  label='Urgency'
                  value={field.value}
                  onChangeValue={field.onChange}
                  error={errors.urgency?.value}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />
            <Controller
              name='dueDate'
              control={control}
              render={({ field }) => (
                <CalendarPicker
                  label='Due Date'
                  value={field.value || ``}
                  onChangeValue={field.onChange}
                  error={errors.dueDate}
                  isDisabled={formMode.value === `view`}
                />
              )}
            />
          </div>
          <div className={`mt-8 flex justify-center gap-6`}>
            <Button
              color={`error`}
              onClick={() => {
                reset();
                setIsModalCreateTaskVisible(false);
              }}
            >{`Cancel`}</Button>
            <Button
              type={`submit`}
              variant={`contained`}
              onClick={() => {}}
            >{`Submit`}</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export { Component };
