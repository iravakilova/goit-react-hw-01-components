import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
        {friends.map(({ idx, avatar, name, isOnline }) =>
                    (<li class="item" key={idx}>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
        </li>
        ))}
        </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}