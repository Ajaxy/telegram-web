import { MouseEvent } from 'react';

import React, { FC, JsxChildren } from '../../lib/teact';

import Spinner from '../Spinner';
import './Button.scss';

type OnClickHandler = (e: MouseEvent<HTMLButtonElement>) => void;

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: Function;
  children: JsxChildren;
  size?: 'default' | 'smaller';
  color?: 'primary' | 'secondary' | 'translucent';
  className?: string;
  round?: boolean;
  isLoading?: boolean;
}

const Button: FC<IProps> = ({
  type = 'button',
  onClick,
  children,
  size = 'default',
  color = 'primary',
  className,
  round,
  isLoading,
}) => {
  let combinedClass = 'Button';
  combinedClass += ` ${size} ${color}`;

  if (round) {
    combinedClass += ' round';
  }
  if (className) {
    combinedClass += ` ${className}`;
  }
  if (isLoading) {
    combinedClass += ' loading';
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={combinedClass} onClick={onClick ? onClick as OnClickHandler : undefined}>
      {isLoading ? (
        <div>
          <span>Please wait...</span>
          <Spinner color="white" />
        </div>
      ) : children}
    </button>
  );
};

export default Button;
