import React from 'react';
import { TextField, MenuItem } from '@mui/material';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  select?: boolean;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, type = 'text', select = false, options = [] }) => {
  return (
    <TextField
      label={label}
      fullWidth
      value={value}
      onChange={onChange}
      type={type}
      select={select}
      margin="normal"
    >
      {select && options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormField;
