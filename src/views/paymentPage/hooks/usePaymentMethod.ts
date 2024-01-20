import { useEffect, useState } from "react";
import { getPaymentMethodUrl } from "../../../constants/urlList";

import {
  LocalPaymentMethod,
  RemotePaymentMethod,
} from "../../../types/payment/payment";
import { PaymentMethod } from "../models/PaymentMethod";

const payInCash = new PaymentMethod({ id: "3", name: "cash" });

export const usePaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  const convertPaymentMethods = (methods: RemotePaymentMethod) => {
    if (methods.data.length === 0) {
      return [];
    }
    const extended = methods.data.map(
      (method): LocalPaymentMethod => new PaymentMethod(method)
    );
    extended.push(payInCash);
    setPaymentMethods(extended);

    return extended;
  };

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const response = await fetch(getPaymentMethodUrl);
      const methods: RemotePaymentMethod = await response.json();
      const extended = convertPaymentMethods(methods);

      setPaymentMethods(extended);
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};
