import styles from './NoteEditor.module.scss';

const NoteEditor = () => {
  return (
    <div className={styles.noteEditor}>
      <input
        className={styles.titleInput}
        style={{
          backgroundColor: 'transparent',
        }}
        type="text"
        placeholder="Title"
        // value={title}
        // onChange={(e) => onSetTitle(e.target.value)}
      />
    </div>
  );
};

export default NoteEditor;
