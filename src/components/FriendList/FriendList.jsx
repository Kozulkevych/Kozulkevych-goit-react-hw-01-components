import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={ friend.name } isOnline={friend.isOnline} />
            ))}
        </List>
    );
}

