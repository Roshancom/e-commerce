import { getProductCard } from './utils.js';
import {productData} from "./data.js"

const render = document.getElementById('clothing-product-wrapper');

const clothingProducts = productData.map(el=> getProductCard(el.img, el.title, el.price, el.description)).join("");
render.innerHTML = clothingProducts;  