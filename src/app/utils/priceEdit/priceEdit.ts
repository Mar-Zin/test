const priceEdit = (price: number): string => {
  const arr = price.toString().split("").reverse();

  for (let i = 3; i < arr.length; i += 4) {
    arr.splice(i, 0, " ");
  }

  return arr.reverse().join("");
};

export default priceEdit;
