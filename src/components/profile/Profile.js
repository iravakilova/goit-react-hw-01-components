import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Avatar, Description, Stats } from './StyledProfile';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return <Box as="section" mx = "auto" py = {4}>
  <Description>
    <Avatar
      src={avatar}
      alt={tag}
      class="avatar"
    />
    <Box fontSize = "l" fontWeight = "bold" color = "black" mt = {3}>{username}</Box>
    <Box fontSize = "m" color = "text" mt = {3}>@{tag}</Box>
    <Box fontSize = "s" color = "text" mt = {3}>{location}</Box>
  </Description>

  <Stats>
    <Box as = "li" display="flex" alignItems="center" flexDirection="column">
      <Box fontSize = "m" color = "text">Followers</Box>
      <Box fontSize = "m" fontWeight = "bold" color = "black" mt = {2}>{stats.followers}</Box>
    </Box>
    <Box as = "li" display="flex" alignItems="center" flexDirection="column">
      <Box fontSize = "m" color = "text">Views</Box>
      <Box fontSize = "m" fontWeight = "bold" color = "black" mt = {2}>{stats.views}</Box>
    </Box>
    <Box as = "li" display="flex" alignItems="center" flexDirection="column">
      <Box fontSize = "m" color = "text">Likes</Box>
      <Box fontSize = "m" fontWeight = "bold" color = "black" mt = {2}>{stats.likes}</Box>
    </Box>
  </Stats>
</Box>;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }).isRequired,
}


