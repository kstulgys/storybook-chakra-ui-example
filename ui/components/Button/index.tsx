import React from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@chakra-ui/react';

type ButtonProps = Omit<BaseButtonProps, 'variant' | 'size' | 'disabled'> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium';
  disabled?: boolean;
};
export const Button = (props: ButtonProps) => <BaseButton {...props} />;
