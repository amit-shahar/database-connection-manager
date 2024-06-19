import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.15)',
  },
}));

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, color = 'primary', children, ...rest }) => {
  return (
    <StyledButton onClick={onClick} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
