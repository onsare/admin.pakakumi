import { Card } from '@mui/material';
import { DepositType } from 'src/types/deposits';
import DepositTable from './DepositsTable';

// id: string;
// type: string;
// date: string;
// transaction_id: string;
// payment_source: string;
// amount: number;
// status: DepositStatus;

function Deposits() {
  const deposits: DepositType[] = [
    {
      id: '1',
      type: 'Deposit',
      date: 'November 29 2022',
      transaction_id: 'VUVX709ET7BY',
      payment_source: 'MPESA',
      mpesa_no: '0711339581',
      amount: 100,
      status: 'completed'
    }
  ];

  return (
    <Card>
      <DepositTable deposits={deposits} />
    </Card>
  );
}

export default Deposits;
