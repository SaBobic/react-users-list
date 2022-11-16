import styles from './Form.module.css';
import Button from '../UI/Button';
import FormAlert from './FormAlert';
import { useState } from 'react';

const Form = props => {
    const [usernameInput, setUsernameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');

    const usernameHandler = e => {
        setUsernameInput(e.target.value);
    };

    const ageHandler = e => {
        setAgeInput(e.target.value);
    };

    const formHandler = e => {
        e.preventDefault();
        if (!usernameInput || !ageInput) {
            setIsValid(false);
            setAlertMessage('Please enter a valid name and age (non-empty values).');
            return;
        }
        if (ageInput <= 0) {
            setIsValid(false);
            setAlertMessage('Please enter a valid age (>0).');
            return alertMessage;
        }
        props.onSubmit(usernameInput, ageInput);
        setUsernameInput('');
        setAgeInput('');
    };

    const onCloseAlert = () => {
        setIsValid(true);
    };

    return (
        <>
            <form onSubmit={formHandler}>
                <label value className={styles['form-field']} htmlFor="username">
                    Username
                </label>
                <input className={styles['form-field']} value={usernameInput} id="username" type="text" onChange={usernameHandler} />
                <label className={styles['form-field']} htmlFor="age">
                    Age (Years)
                </label>
                <input className={styles['form-field']} value={ageInput} id="age" type="text" onChange={ageHandler} />
                <Button type="submit">Add User</Button>
            </form>

            {!isValid && <FormAlert onClose={onCloseAlert}>{alertMessage}</FormAlert>}
        </>
    );
};

export default Form;
