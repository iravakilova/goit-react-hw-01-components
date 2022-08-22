import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendItem } from './StyledFriendList';

export const FriendList = ({ friends }) => {
    return (
        <Box as="ul" width = "33%" mx = "auto" py = {4}>
        {friends.map(({ id, isOnline, avatar, name }) =>
                    (<FriendItem key={id}>
            <Box as="span" width = {8} height = {8} borderRadius = "round" bg = {isOnline ? "green" : "red"} mr = {3}></Box>
            <Box as="img" src={avatar} alt={name} width="48" borderRadius = "normal" mr = {3} />
            <Box as="p" fontWeight = "bold">{name}</Box>
        </FriendItem>
        ))}
        </Box>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
  ),
};