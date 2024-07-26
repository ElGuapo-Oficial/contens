import styles from './box.module.css';

type BoxProps = {
    children: React.ReactNode; // 'React.ReactNode' covers anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
    title?: string;
  };

const Box: React.FC<BoxProps> = ({children, title}) => {
    return (
        <div className={styles.box}>
            {title && <p className={styles.title}>{title}</p>}
            <div className={`${styles.body} ${!title ? styles.noTitle : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Box;

{/* <div className={ title ? "" : styles.noTitle}></div> */}