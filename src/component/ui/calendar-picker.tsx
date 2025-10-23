import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { utils } from '@/lib';
import { FormControl, FormHelperText } from '@mui/material';
import { FieldError } from 'react-hook-form';
import { useTheme } from '@/contexts';

type Calendar = {
  label?: string;
  value: string;
  onChangeValue: (date: string) => void;
  error?: FieldError;
  isDisabled?: boolean;
};

const Component = ({
  label,
  value,
  onChangeValue,
  error,
  isDisabled,
}: Calendar) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth error={!utils.isEmpty(error)}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={[`DatePicker`]}>
          <DatePicker
            slotProps={{
              textField: {
                sx: {
                  '& .MuiInputLabel-root': {
                    color: theme.colors.primary,
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: theme.colors.primary,
                  },

                  '& .MuiPickersOutlinedInput-root': {
                    color: theme.colors.primary,
                    '& fieldset': {
                      borderColor: theme.colors.primary,
                    },
                  },

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

                  '& .MuiSvgIcon-root': {
                    color: theme.colors.primary,
                  },
                },
              },
            }}
            label={label}
            value={utils.convert(value)}
            onChange={(value) => {
              onChangeValue?.(value?.format(`YYYY-MM-DD`) || ``);
            }}
            disabled={isDisabled}
          />
        </DemoContainer>
      </LocalizationProvider>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export { Component };
