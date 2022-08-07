import { Profile } from '../components/profile/Profile';
import { Statistics } from '../components/statistics/Statistics';
import { FriendList } from '../components/friendlist/FriendList';
import { TransactionHistory } from '../components/transaction/TransactionHistory.js';

import users from '../data/user.json';
import data from '../data/data.json';
import friendsdata from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={users} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsdata} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

