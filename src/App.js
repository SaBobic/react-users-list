import { useState } from 'react';
import Form from './Components/Form/Form';
import UsersList from './Components/List/UsersList';

function App() {
    const DUMMY_USERS = [
        { id: 1, username: 'Michele', age: 32 },
        { id: 2, username: 'Sara', age: 19 },
    ];

    const [users, setUsers] = useState(DUMMY_USERS);

    const onAddUser = (username, age) => {
        setUsers(prevUsers => {
            const newUser = { id: Math.random(), username: username.trim(), age: age.trim() };
            return [newUser, ...prevUsers];
        });
    };

    return (
        <div>
            <Form onSubmit={onAddUser} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
