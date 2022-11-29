export type BetStatus = 'completed' | 'pending' | 'failed';

export interface BetType {
  id: string;
  ref_id: string;
  date: string;
  type: string;
  competition: string;
  payment_source: string;
  user_phone: string;
  event: string;
  odd: number;
  amount: number;
  wht: number;
  excise: number;
  payout:number;
  status: BetStatus;

}
