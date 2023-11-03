import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.60);
  background: var(--gray-100, #F1F5F9);
  padding: var(--spacer-16, 16px) var(--spacer-24, 24px);
  cursor: pointer;
  flex-shrink: 0;
  height: fit-content;
  width: fit-content;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:empty {
    display: none;
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  endIcon?: React.ReactNode;
}

const Button = (props: IProps) => {
  const { children, endIcon, ...otherProps } = props;
  return (
    <ButtonContainer {...otherProps}>
      {children}
      <Icon>
        {endIcon}
      </Icon>
    </ButtonContainer>
  );
};

export default Button;
