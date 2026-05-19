import styles from './SidebarHeader.module.scss';
import SquareSvgBtn from '../../../../ui/SquareSvgBtn/SquareSvgBtn';
import CrossIcon from '/src/assets/icons/cross.svg?react';
import { useSidebarStore } from '../../stores/useSidebarStore';
import Logo from '../../../../components/Logo/Logo';

const SidebarHeader = () => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <div className={styles.sidebarHeader}>
      <SquareSvgBtn onClick={closeSidebar}>
        <CrossIcon />
      </SquareSvgBtn>
      <Logo isAppNameVisible={true} />
    </div>
  );
};
export default SidebarHeader;
