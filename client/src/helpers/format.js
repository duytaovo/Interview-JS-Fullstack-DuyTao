export const formatPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const caculateTotalPrice = (cart) => {
  const total = cart.reduce((total, p) => total + p.price * p.quantity, 0);
  return total;
};

