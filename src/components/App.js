import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendlist/FriendList';
import { TransactionHistory } from '../components/transaction/TransactionHistory.js';

import user from '../data/user.json';
import data from '../data/data.json';
import friendsdata from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Box } from './Box';

export const App = () => {
  return (
    <Box as = "section" width = "80%" mx = "auto">
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsdata} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};

