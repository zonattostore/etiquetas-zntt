import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export default function Button({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={[className, styles.btn].join(' ')} />;
}
