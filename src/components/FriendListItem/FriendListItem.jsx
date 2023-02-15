import PropTypes from 'prop-types';
import { Item, UserStatus, UserAvatar, UserName } from "./FriendListItem.styled";


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <UserStatus bgColor={String(isOnline)}>{isOnline}</UserStatus>
            <UserAvatar src={avatar} alt="User avatar" width="48" />
            <UserName>{name}</UserName>
        </Item>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}