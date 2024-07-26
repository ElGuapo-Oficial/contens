import styles from './card.module.css';

type CardProps = {
    children: React.ReactNode; // 'React.ReactNode' covers anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
    title?: string;
  };

const Card: React.FC<CardProps> = ({children, title}) => {
    return (
        <div className={styles.card}>
            {title && <p className={styles.title}>{title}</p>} 
            {children}
        </div>
    )
}

Card