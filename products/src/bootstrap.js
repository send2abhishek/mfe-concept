import randomNames from "random-indian-name";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name =
      "product " + randomNames({ random: Math.random, female: true });
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const productContainer = document.querySelector("#root-product");
  // asssuming that container doesnot have key as root-product
  if (productContainer) {
    mount(productContainer);
  }
}

export { mount };
