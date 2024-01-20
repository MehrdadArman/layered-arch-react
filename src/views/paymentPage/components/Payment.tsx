import { usePaymentMethod } from "../hooks/usePaymentMethod";
import PaymentMethods from "./PaymentMethods";

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethod();

  return (
    <div>
      <PaymentMethods options={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};
