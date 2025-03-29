import { ButtonHTMLAttributes } from 'react';
import styles from './tableButton.module.scss';

export default function TableButton({
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={[className, styles.btn].join(' ')} />;
}
