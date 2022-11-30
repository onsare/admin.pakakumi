import { Card } from '@mui/material';
import { BetType } from 'src/types/bets';
import BetsTable from './BetManagerTable';

function Bets() {
  const bets: BetType[] = [
    {
      id: '1',
      type: '1 X 2',
      competition: 'FIFA WORLD CUP',
      event: 'France vs England',
      odd: 1.34,
      date: '25/11, 19:00',
      status: 'completed',
      ref_id: 'VUVX70',
      payment_source: 'MPESA',
      user_phone: '0712***',
      amount: 34.4565,
      wht: 56787,
      excise: 23,
      payout: 200
    },
    {
      id: '2',
      type: '1 X 2',
      competition: 'FIFA WORLD CUP',
      event: 'France vs England',
      odd: 1.34,
      date: '25/11, 19:00',
      status: 'completed',
      ref_id: 'VUVX70',
      payment_source: 'MPESA',
      user_phone: '0712***',
      amount: 34.4565,
      wht: 56787,
      excise: 23,
      payout: 200
    },
    {
      id: '3',
      type: '1 X 2',
      competition: 'FIFA WORLD CUP',
      event: 'France vs England',
      odd: 1.34,
      date: '25/11, 19:00',
      status: 'completed',
      ref_id: 'VUVX70',
      payment_source: 'MPESA',
      user_phone: '0712***',
      amount: 34.4565,
      wht: 56787,
      excise: 23,
      payout: 200
    }
  ];

  return (
    <Card>
      <BetsTable bets={bets} />
    </Card>
  );
}

export default Bets;
