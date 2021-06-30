export function verifyEqual(dimension, size) {
  return dimension > size;
}

export const percentageProm = (average, value) => {
  const aux = value / average;
  return aux - 1;
}

export const getActualIcon = (product) => {
  const st = percentageProm(product.average, product.maximunPrice);
  if (st < 0) return 'down';
  if (st === 0) return 'equal';
  if (st > 0) return 'up';
};


export const formatDate = (d) => {
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth()}` : d.getMonth();
  const year = d.getFullYear() % 100;
  return `${day}/${month}/${year}`;
}