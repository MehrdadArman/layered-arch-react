import { LocalPaymentMethod } from "../../../types/payment/payment";

const PaymentMethods = ({ options }: { options: LocalPaymentMethod[] }) => {
  console.log(options);

  return (
    <div className="flex flex-col m-5">
      {options.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.isDefaultMethod}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </div>
  );
};

export default PaymentMethods;
