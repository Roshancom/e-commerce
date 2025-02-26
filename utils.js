export const getProductCard=(img, title, price, description, buy="Add to Cart") =>{
    return `<div class="product-card">
        <img src=${img} alt="Product Image">
        <div class="product-details">
            <h2 class="product-title">${title}</h2>
            <p class="product-description">${description}</p>
            <p class="product-price">${price}</p>
            <button class="add-to-cart">${buy}</button>
        </div>
    </div>`;
}