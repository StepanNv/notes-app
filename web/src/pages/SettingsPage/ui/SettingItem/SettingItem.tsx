import type { ButtonHTMLAttributes } from 'react';
import styles from './SettingItem.module.scss';

const SettingItem = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.settingItem} {...props}>
      {children}
    </button>
  );
};
export default SettingItem;
