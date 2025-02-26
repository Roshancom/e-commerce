import { getProductCard } from './utils.js';
import {productData} from "./data.js"

console.log("here") 
const render = document.getElementById('accessories-product-wrapper');

const accessoriesProducts = productData.map(el=> getProductCard(el.img, el.title, el.price, el.description)).join("");
render.innerHTML = accessoriesProducts;  