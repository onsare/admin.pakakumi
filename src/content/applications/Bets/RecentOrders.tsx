import { Card } from '@mui/material';
import { CryptoOrder } from 'src/types/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: 'VUVX70',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: 'KES '
    },
    {
      id: '2',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: '23M3UO',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '3',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: 'F6JHK6',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '4',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: 'QJFAI7',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '5',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'pending',
      orderID: 'BO5KFS',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '6',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: '6RS606',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '7',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'pending',
      orderID: '479KUY',
      sourceName: 'MPESA',
      sourceDesc: '*** 1212',
      amountCrypto: 2.346546,
      amount: 234234,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '8',
      orderDetails: 'Paypal Withdraw',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: 'W67CFZ',
      sourceName: 'Paypal Account',
      sourceDesc: '0712***',
      amountCrypto: 3.345456,
      amount: 34544,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '9',
      orderDetails: '1 X 2',
      orderDate: '25/11, 19:00',
      status: 'completed',
      orderID: '63GJ5D',
      sourceName: 'MPESA',
      sourceDesc: '*** 2222',
      amountCrypto: 1.4389567945,
      amount: 123843,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '10',
      orderDetails: 'Wallet Transfer',
      orderDate: '25/11, 19:00',
      status: 'failed',
      orderID: '17KRZH',
      sourceName: 'Wallet Transfer',
      sourceDesc: "John's Cardano Wallet",
      amountCrypto: 765.5695,
      amount: 7567,
      cryptoCurrency: 'ADA',
      currency: 'KES '
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
