export const delay = (order: number) => {
  const base = 500;
  return order * base;
};

export  const aosProps = ({
  order, animation = 'fade-up'
}: {
  order: number;
  animation?: string;
}) => {
  return {
    'data-aos': animation,
    'data-aos-delay': delay(order),
    'data-aos-duration': "900",
  };
};
