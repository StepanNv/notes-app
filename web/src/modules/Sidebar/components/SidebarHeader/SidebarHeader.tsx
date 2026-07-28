import styles from './SidebarHeader.module.scss';
import { useSidebarStore } from '../../stores/useSidebarStore';
import Logo from '../../../../components/Logo/Logo';
import CrossBtn from '../../../../components/CrossBtn/CrossBtn';

const SidebarHeader = () => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <div className={styles.sidebarHeader}>
      <CrossBtn onClick={closeSidebar} />
      <Logo isAppNameVisible={true} />
    </div>
  );
};
export default SidebarHeader;
