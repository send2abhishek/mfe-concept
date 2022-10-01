import randomNames from "random-indian-name";

const mount = (el) => {
  let cart = "";

  for (let i = 0; i < 3; i++) {
    const name = "cart " + randomNames({ random: Math.random, female: true });
    cart += `<div>${name}</div>`;
  }
  el.innerHTML = cart;
};

if (process.env.NODE_ENV === "development") {
  const cart = document.querySelector("#root-cart");
  // asssuming that container doesnot have key as root-product
  if (cart) {
    mount(cart);
  }
}

export { mount };
