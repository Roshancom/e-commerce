import { productData } from "./data.js";
import { getProductCard } from './utils.js'

const render = document.getElementById('product');

const productsHtml = productData.map(el=> {
    return getProductCard(el.img, el.title, el.price, el.description);
}).join("")
render.innerHTML = productsHtml;