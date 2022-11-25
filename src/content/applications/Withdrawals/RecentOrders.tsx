import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Withdrawal',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: 'KES '
    },
    {
      id: '2',
      orderDetails: 'Withdrawal',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      orderID: '23M3UOG65G8K',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '3',
      orderDetails: 'Withdrawal',
      orderDate: subDays(new Date(), 5).getTime(),
      status: 'failed',
      orderID: 'F6JHK65MS818',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '4',
      orderDetails: 'Withdrawal',
      orderDate: subDays(new Date(), 55).getTime(),
      status: 'completed',
      orderID: 'QJFAI7N84LGM',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '5',
      orderDetails: 'Withdrawal',
      orderDate: subDays(new Date(), 56).getTime(),
      status: 'pending',
      orderID: 'BO5KFSYGC0YW',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '6',
      orderDetails: 'Withdrawal',
      orderDate: subDays(new Date(), 33).getTime(),
      status: 'completed',
      orderID: '6RS606CBMKVQ',
      sourceName: 'MPESA',
      sourceDesc: '0712***',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '7',
      orderDetails: 'Withdrawal',
      orderDate: new Date().getTime(),
      status: 'pending',
      orderID: '479KUYHOBMJS',
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
      orderDate: subDays(new Date(), 22).getTime(),
      status: 'completed',
      orderID: 'W67CFZNT71KR',
      sourceName: 'Paypal Account',
      sourceDesc: '0712***',
      amountCrypto: 3.345456,
      amount: 34544,
      cryptoCurrency: 'BTC',
      currency: 'KES '
    },
    {
      id: '9',
      orderDetails: 'Withdrawal',
      orderDate: subDays(new Date(), 11).getTime(),
      status: 'completed',
      orderID: '63GJ5DJFKS4H',
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
      orderDate: subDays(new Date(), 123).getTime(),
      status: 'failed',
      orderID: '17KRZHY8T05M',
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
