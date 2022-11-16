import styles from './Form.module.css';
import Button from '../UI/Button';

const Form = () => {
    const formHandler = e => {
        e.preventDefault();
        console.log(e.target.value);
    };

    return (
        <form onClick={formHandler}>
            <label value className={styles['form-field']} htmlFor="username">
                Username
            </label>
            <input className={styles['form-field']} id="username" type="text" name="username"></input>
            <label className={styles['form-field']} htmlFor="age">
                Age (Years)
            </label>
            <input className={styles['form-field']} id="age" type="text" name="age"></input>
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default Form;
