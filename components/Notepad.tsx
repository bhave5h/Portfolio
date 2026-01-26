// Notepad.tsx
import styles from './Notepad.module.css';

interface NotepadProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Notepad({ 
  title = "It's a resizeable notepad!", 
  children 
}: NotepadProps) {
  return (
    <div className={styles.notepad}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children || (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
          </p>
        )}
      </div>
    </div>
  );
}