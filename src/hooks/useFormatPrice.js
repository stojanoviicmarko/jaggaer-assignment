const { useMemo } = require('react');

const useFormatPrice = (number, currency) => {
  const formatted = useMemo(() => {
    return `${number
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${currency}`;
  }, [number]);

  return {
    formatted,
  };
};

export default useFormatPrice;
