import styles from './App.module.css';
import Form from './Components/Form/Form';
import UserItem from './Components/List/UserItem';
import Card from './Components/UI/Card';

function App() {
    const usernames = [
        { id: 1, username: 'Michele', age: 32 },
        { id: 2, username: 'Sara', age: 19 },
    ];

    return (
        <div className={styles.container}>
            <Card>
                <Form />
            </Card>
            <Card>
                {usernames.map(user => {
                    return <UserItem key={user.id} username={user.username} age={user.age} />;
                })}
            </Card>
        </div>
    );
}

export default App;
