

const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-US", {
    style:"currency",
    currency:"USD",
    maximumFractionDigits:2,
  }).format(price/50);
};

export default FormatPrice