import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './FormAlert.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div onClick={props.onClose} className={styles.backdrop}></div>;
};

const AlertOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClose}>Okay</Button>
            </footer>
        </Card>
    );
};

const FormAlert = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<AlertOverlay onClose={props.onClose} title={props.title} message={props.message} />, document.getElementById('overlay-root'))}
        </>
    );
};

export default FormAlert;
