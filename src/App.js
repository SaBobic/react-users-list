import { useState } from 'react';
import Form from './Components/Form/Form';
import UsersList from './Components/List/UsersList';

function App() {
    const DUMMY_USERS = [
        { id: 1, username: 'Michele', age: 32 },
        { id: 2, username: 'Sara', age: 19 },
    ];

    const [usersArray, setUsersArray] = useState(DUMMY_USERS);

    const addUserHandler = (username, age) => {
        setUsersArray(prevUsers => {
            const newUser = { id: Math.random(), username: username.trim(), age: age.trim() };
            return [newUser, ...prevUsers];
        });
    };

    return (
        <>
            <Form onSubmit={addUserHandler} />
            <UsersList users={usersArray} />
        </>
    );
}

export default App;
