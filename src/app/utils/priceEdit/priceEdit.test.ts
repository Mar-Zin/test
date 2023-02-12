import priceEdit from "./priceEdit";

test("price 199 must be take the form 199", () => {
  const price = 199;

  const result = priceEdit(price);

  expect(result).toBe("199");
});

test("price 1999 must be take the form 1 999", () => {
  const price = 1999;

  const result = priceEdit(price);

  expect(result).toBe("1 999");
});

test("price 1999999 must be take the form 1 999 999", () => {
  const price = 1999999;

  const result = priceEdit(price);

  expect(result).toBe("1 999 999");
});
