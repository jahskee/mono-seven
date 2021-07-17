import React from 'react';
import Button from '@material-ui/core/Button';

interface ButtonProps {
  color: 'primary'| 'secondary';
  variant: 'contained';
  label: string;
  onClick?: () => void;
}

export const ButtonX = ({
  color = 'primary',
  variant = "contained",
  label,
  ...props
}: ButtonProps) => {

  return (
    <Button {...props} >
         {label}
    </Button>
  );
};

export default ButtonX;
