import styles from './AddNoteBtn.module.scss';
import { useNavigate } from 'react-router-dom';

const AddNoteBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.addNoteBtn}
      onClick={() => navigate('/notes/new')}
    >
      <span></span>
    </button>
  );
};
export default AddNoteBtn;
