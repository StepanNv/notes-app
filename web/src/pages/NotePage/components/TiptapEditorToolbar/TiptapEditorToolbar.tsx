import { type Editor } from '@tiptap/react';
import {
  Heading1,
  Heading2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  RemoveFormatting,
} from 'lucide-react';
import styles from './TiptapEditorToolbar.module.scss';
import ToolbarBtn from '../../ui/ToolbarBtn/ToolbarBtn';

const TiptapEditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;
  return (
    <div className={styles.tiptapEditorToolbar}>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 />
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 />
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold />
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic />
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline />
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}>
        <Strikethrough />
      </ToolbarBtn>
      <ToolbarBtn
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <RemoveFormatting />
      </ToolbarBtn>
    </div>
  );
};
export default TiptapEditorToolbar;
