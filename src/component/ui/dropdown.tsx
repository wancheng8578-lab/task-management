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
import { useTheme } from '@/contexts';

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
    const theme = useTheme();

    return (
      <Box sx={style}>
        <FormControl error={!utils.isEmpty(error)} fullWidth>
          <InputLabel
            sx={{
              color: theme.colors.primary,
              '&.Mui-focused': {
                color: theme.colors.primary,
              },
            }}
            id='demo-simple-select-label'
          >
            {label}
          </InputLabel>
          <Select
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.colors.primary,
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.colors.primary,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.colors.primary,
              },
              '& .MuiSelect-select': {
                color: theme.colors.primary,
              },
              '& .MuiSelect-icon': {
                color: theme.colors.primary,
              },
            }}
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
