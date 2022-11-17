import Card from '../UI/Card';
import UserItem from './UserItem';
import styles from './UsersList.module.css';

const UserList = props => {
    const toCapitalize = word => {
        word = word[0].toUpperCase() + word.substr(1);
        return word;
    };

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => {
                    return <UserItem key={user.id} username={toCapitalize(user.username)} age={user.age} />;
                })}
            </ul>
        </Card>
    );
};

export default UserList;
