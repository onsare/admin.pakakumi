import { Card } from '@mui/material';
// import { CryptoOrder } from 'src/types/crypto_order';
import PlayersTable from './PlayersTable';

function RecentOrders() {
  const players: any[] = [
    {
      id: '1',
      phone: '0711339581',
      joined: '25/11, 19:00',
      status: 'active',
      bets: '5',
      won: '3',
      amount: 873,
      payout: 500
    },
    {
      id: '2',
      phone: '0711339581',
      joined: '25/11, 19:00',
      status: 'active',
      bets: '10',
      won: '0',
      amount: 873,
      payout: 0
    },
    {
      id: '3',
      phone: '0711339581',
      joined: '25/11, 19:00',
      status: 'active',
      bets: '12',
      won: '0',
      amount: 873,
      payout: 0
    },
    {
      id: '4',
      phone: '0711339581',
      joined: '25/11, 19:00',
      status: 'active',
      bets: '56',
      won: '0',
      amount: 873,
      payout: 0
    },
    {
      id: '5',
      phone: '0711339581',
      joined: '25/11, 19:00',
      status: 'active',
      bets: '99',
      won: '0',
      amount: 873,
      payout: 0
    }
  ];

  return (
    <Card>
      <PlayersTable players={players} />
    </Card>
  );
}

export default RecentOrders;
