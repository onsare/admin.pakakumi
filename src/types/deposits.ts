export type DepositStatus = 'completed' | 'pending' | 'failed';

export interface DepositType {
  id: string;
  type: string;
  date: string;
  transaction_id: string;
  payment_source: string;
  mpesa_no: string;
  amount: number;
  status: DepositStatus;

}
