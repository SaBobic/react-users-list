import styles from './Form.module.css';
import Button from '../UI/Button';
import FormAlert from './FormAlert';
import Card from '../UI/Card';
import { useState } from 'react';

const Form = props => {
    const [usernameInput, setUsernameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [error, setError] = useState();

    const usernameHandler = e => {
        setUsernameInput(e.target.value);
    };

    const ageHandler = e => {
        setAgeInput(e.target.value);
    };

    const formHandler = e => {
        e.preventDefault();
        if (!usernameInput.trim() || !ageInput.trim()) {
            setError({
                title: 'Missing inputs',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (parseInt(ageInput) < 1) {
            setError({
                title: 'Invalid age input',
                message: 'Please enter a valid age (>0).',
            });
            return;
        }
        props.onSubmit(usernameInput, ageInput);
        setUsernameInput('');
        setAgeInput('');
    };

    const onCloseAlert = () => {
        setError();
    };

    return (
        <>
            {error && <FormAlert onClose={onCloseAlert} title={error.title} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={formHandler}>
                    <label htmlFor="username">Username</label>
                    <input value={usernameInput} id="username" type="text" onChange={usernameHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input value={ageInput} id="age" type="number" onChange={ageHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default Form;
