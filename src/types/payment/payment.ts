export type RemotePaymentMethod = {
  data: PaymentT[];
  code: number;
};

export type PaymentT = {
  name: string;
  id: string;
};

export type LocalPaymentMethod = {
  provider: string;
  label: string;
  isDefaultMethod: boolean;
};
