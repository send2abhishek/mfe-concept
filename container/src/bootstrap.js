import { mount as productMount } from "products/ProductIndex"; // first this will try to find out in this project node_modules then it will go y
// module fedration and search for it in remote section

import { mount as cartMount } from "cart/CartShow";

console.log("this is container js file");

productMount(document.querySelector("#my-product"));
cartMount(document.querySelector("#root-cart"));
