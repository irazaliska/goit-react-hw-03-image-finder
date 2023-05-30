import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled'

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="40" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
