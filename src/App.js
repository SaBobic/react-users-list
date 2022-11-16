import { useState } from 'react';
import styles from './App.module.css';
import Form from './Components/Form/Form';
import UserItem from './Components/List/UserItem';
import Card from './Components/UI/Card';

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
        <div className={styles.container}>
            <Card>
                <Form onSubmit={onAddUser} />
            </Card>
            <Card>
                {users.map(user => {
                    return <UserItem key={user.id} username={user.username} age={user.age} />;
                })}
            </Card>
        </div>
    );
}

export default App;
