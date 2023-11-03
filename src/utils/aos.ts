export const delay = (order: number) => {
  const base = 500;
  return order * base;
};

export  const aosProps = (order: number) => {
  return {
    'data-aos': 'fade-down',
    'data-aos-delay': delay(order),
    'data-aos-duration': "1500"
  };
};
