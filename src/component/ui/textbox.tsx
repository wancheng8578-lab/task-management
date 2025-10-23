'use client';

import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { FieldError } from 'react-hook-form';
import { utils } from '@/lib';
import { CSSProperties } from '@mui/material/styles';
import { useTheme } from '@/contexts';

type Input = {
  className?: string;
  style?: CSSProperties;
  classNameInput?: string;
  inputStyle?: CSSProperties;
  value: string;
  onChangeValue?: (value: string) => void;
  placeholder?: string;
  variant?: `outlined` | `filled` | `standard`;
  type?: `email` | `number` | `password` | `tel` | `text` | `url`;
  isDisabled?: boolean;
  label?: string;
  isRequired?: boolean;
  validationMessage?: string | string[];
  isValidationMessageShow?: boolean;
  selectedLanguage?: { label: ``; value: `en_us` | `ms_my` };
  isHorizontal?: boolean;
  isMultiline?: boolean;
  onEnterClick?: () => void;
  onBlur?: () => void;
  id?: string;
  error?: FieldError;
};

const Component = forwardRef<HTMLInputElement, Input>(
  (
    {
      value,
      onChangeValue,
      label,
      variant = `outlined`,
      error,
      isDisabled,
      className,
    }: Input,
    ref,
  ) => {
    const theme = useTheme();

    return (
      <TextField
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.colors.primary,
            },
            '&:hover fieldset': {
              borderColor: theme.colors.secondary,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.colors.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: theme.colors.primary,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.colors.primary,
          },
        }}
        className={className}
        ref={ref}
        id='outlined-basic'
        label={label}
        value={value}
        variant={variant}
        onChange={(e) => {
          onChangeValue?.(e.target.value);
        }}
        error={!utils.isEmpty(error)}
        helperText={error?.message}
        disabled={isDisabled}
      />
    );
  },
);

Component.displayName = `Textbox`;

export { Component };
