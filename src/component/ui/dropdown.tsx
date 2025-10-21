'use client';

import { memo } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Item } from '@/types';
import { utils } from '@/lib';
import { FieldError } from 'react-hook-form';
import { CSSProperties } from '@mui/material/styles';

type Dropdown<T> = {
  label: string;
  list: T[];
  value: T;
  onChangeValue?: (item: T) => void;
  error?: FieldError;
  isDisabled?: boolean;
  style?: CSSProperties;
};

const Component = memo(
  <T extends Item>({
    list,
    value,
    onChangeValue,
    label,
    error,
    isDisabled,
    style,
  }: Dropdown<T>) => {
    return (
      <Box sx={style}>
        <FormControl error={!utils.isEmpty(error)} fullWidth>
          <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={value.value}
            label={label}
            onChange={(e) => {
              onChangeValue?.(
                list.find((item) => {
                  return item.value === e.target.value;
                }) || list[0],
              );
            }}
            disabled={isDisabled}
          >
            {list
              .filter((item) => {
                return item.value !== ``;
              })
              .map(({ label, value }, index) => {
                return (
                  <MenuItem key={`${value}${index}`} value={value}>
                    {label}
                  </MenuItem>
                );
              })}
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      </Box>
    );
  },
);

export { Component };
