import Card from '../UI/Card';
import UserItem from './UserItem';
import styles from './UsersList.module.css';

const UserList = props => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => {
                    return <UserItem key={user.id} username={user.username} age={user.age} />;
                })}
            </ul>
        </Card>
    );
};

export default UserList;
