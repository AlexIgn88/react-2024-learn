import { useCallback, useState } from "react";

export const useAmount = (initialState = 0) => {
  const [amount, setAmount] = useState(initialState);
  const decrease = useCallback(() => {
    setAmount((oldAmount) => (oldAmount > 0 ? oldAmount - 1 : 0));
  }, []);
  const increase = useCallback(() => {
    setAmount((oldAmount) => (oldAmount <= 4 ? oldAmount + 1 : oldAmount));
  }, []);

  return {
    amount,
    decrease,
    increase,
  };
};
