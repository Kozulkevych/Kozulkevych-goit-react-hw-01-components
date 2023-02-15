import PropTypes from 'prop-types';
import {ProfileContainer, ProfileDescr, ProfileImg, ProfileName, ProfileTag, ProfileLocation, StatsList, Item, Label, Quantity} from './Profile.styled'
export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes}}) => {
  return (
    <ProfileContainer>
      <ProfileDescr>
        <ProfileImg
          src={avatar}
          alt="User avatar" 
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <StatsList>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </StatsList>
    </ProfileContainer>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    Itemkes: PropTypes.number
    }).isRequired,
}