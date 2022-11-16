import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './FormAlert.module.css';

const FormAlert = props => {
    const closeHandler = () => {
        props.onClose();
    };

    return (
        <>
            <div onClick={closeHandler} className={styles.backdrop}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={closeHandler}>Okay</Button>
                </footer>
            </Card>
        </>
    );
};

export default FormAlert;
