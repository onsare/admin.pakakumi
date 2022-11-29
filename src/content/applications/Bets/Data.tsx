import { Card } from '@mui/material';
import { BetType } from 'src/types/bets';
import BetsTable from './BetsTable';

// id: string;
// type: string,
// competition: string,
// event: string,
// odd: number,
// amount: number,
// wht: number,
// excise: number,
// payout:number,
// status: BetStatus;

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
    }
  ];

  return (
    <Card>
      <BetsTable bets={bets} />
    </Card>
  );
}

export default Bets;
