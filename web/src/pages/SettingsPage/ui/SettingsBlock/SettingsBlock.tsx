import styles from './SettingsBlock.module.scss';

const SettingsBlock = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className={styles.settingsBlock}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.settingsCard}>{children}</div>
    </div>
  );
};
export default SettingsBlock;
