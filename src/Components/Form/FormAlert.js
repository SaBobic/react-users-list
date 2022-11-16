import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './FormAlert.module.css';

const FormAlert = props => {
    const closeHandler = () => {
        props.onClose();
    };

    return (
        <div onClick={closeHandler} className={styles['form-overlay']}>
            <Card>
                <h2>Invalid input</h2>
                <div className={styles['form-content']}>
                    <div className={styles['form-message']}>{props.children}</div>
                    <div className={styles['form-button']}>
                        <Button onClick={closeHandler}>Okay</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FormAlert;
