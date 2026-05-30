import styles from './AddNoteBtn.module.scss';

const AddNoteBtn = ({ ...props }) => {
  return (
    <button className={styles.addNoteBtn} {...props}>
      <span></span>
    </button>
  );
};
export default AddNoteBtn;
