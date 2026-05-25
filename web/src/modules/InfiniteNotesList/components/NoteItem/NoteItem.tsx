import styles from './NoteItem.module.scss';

const NoteItem = () => {
  return (
    <div
      className={styles.noteItem}
      // onClick={openNote}
    >
      <div className={styles.noteContent}>
        <div className={styles.title}>{/* {content.title} */}</div>
        <div className={styles.textt}>
          {/* {parse(DOMPurify.sanitize(content.mainText))} */}
        </div>
      </div>

      <div
        className={styles.selectBtn} // onClick={addEditableNoteHandler}
      >
        {/* <SelectIcon /> */}
      </div>
    </div>
  );
};
export default NoteItem;
